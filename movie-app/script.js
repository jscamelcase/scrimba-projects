import { renderMovieItem } from "./functions.js";

const API_KEY = "9fcc666";
const search = document.querySelector(".header__search-input");

const body = document.querySelector("body");
const resultsDisplay = document.querySelector(".results__display");

let savedMoviesArray = JSON.parse(localStorage.getItem("savedMovies")) ?? [];

//Application Event Listener

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("header__search-button")) {
    const searchTerm = search.value;
    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${searchTerm}`)
      .then((res) => res.json())
      .then((data) => {
        if (!data.Search) {
          resultsDisplay.innerHTML =
            '<p class="results-none">Unable to find what you\'re looking for. Please try another search.</p>';
        } else {
          resultsDisplay.innerHTML = "";
        }
        data.Search.forEach((item) => {
          renderMovieItem(item.imdbID, "MovieFinder", API_KEY, resultsDisplay);
        });
      });
  } else if (
    e.target.classList.contains("movie-listing__watchlist") &&
    !savedMoviesArray.includes(e.target.id)
  ) {
    savedMoviesArray.push(e.target.id);
    localStorage.setItem("savedMovies", JSON.stringify(savedMoviesArray));
  }
});
