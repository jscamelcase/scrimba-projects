import { renderMovieItem } from "./functions.js";

const API_KEY = "9fcc666";
const resultsDisplay = document.querySelector(".results__display");

let savedMoviesArray = JSON.parse(localStorage.getItem("savedMovies")) ?? [];

const watchListDisplay = document.querySelector(".watchlist-results__display");
console.log(watchListDisplay);

if (savedMoviesArray.length === 0) {
  watchListDisplay.innerHTML = `
  <div class="watchlist-message__container">
            <p class="watchlist__para--light">Your watchlist is looking a little empty.</p>
            <p class="watchlist__para text-bold text-small"><a href="./index.html" class="watchlist__link"><img class="watchlist__img" src="./images/icon.png"></a>Let's add some movies!</p>
          </div>
  `;
} else {
  savedMoviesArray.forEach((itemId) =>
    renderMovieItem(itemId, "Watchlist", API_KEY, watchListDisplay)
  );
}

//Application Event Listener

document.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("movie-listing__watchlist") &&
    savedMoviesArray.includes(e.target.id)
  ) {
    const savedIndex = savedMoviesArray.indexOf(e.target.id);
    savedMoviesArray.splice(savedIndex, 1);
    watchListDisplay.innerHTML = "";
    savedMoviesArray.forEach((itemId) =>
      renderMovieItem(itemId, "Watchlist", API_KEY, watchListDisplay)
    );
    localStorage.setItem("savedMovies", JSON.stringify(savedMoviesArray));
  }
});
