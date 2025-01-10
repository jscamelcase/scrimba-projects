const API_KEY = "9fcc666";
const search = document.querySelector(".header__search-input");

const body = document.querySelector("body");
const resultsDisplay = document.querySelector(".results__display");
const savedMoviesArray = [];

function renderMovieItem(itemId) {
  fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${itemId}`)
    .then((res) => res.json())
    .then((movie) => {
      resultsDisplay.innerHTML += `
          <div class="movie-listing">
              <img class="movie-listing__img" src="${movie.Poster}">
              <div class="movie-listing__text-container">
                  <div class="movie-listing__heading-container">
                      <h3 class="movie-listing__title">${movie.Title}</h3>
                      <span class="movie-listing__rating">⭐${
                        movie.Ratings[0].Value.split("/")[0]
                      }</span>
                  </div>
                  <div class="movie-listing__meta-data">
                      <p class="movie-listing__time">${movie.Runtime}</p>
                      <p class="movie-listing__category">${movie.Genre}</p>
                      <button id="${itemId}" class="movie-listing__watchlist"><img src="./images/Icon.png" alt="plus sign">Watchlist</button>
                  </div>
                  <p class="movie-listing__description">${movie.Plot}</p>
              </div>
          </div>
          `;
    });
}

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
          renderMovieItem(item.imdbID);
        });
      });
  } else if (
    e.target.classList.contains("movie-listing__watchlist") &&
    !savedMoviesArray.includes(e.target.id)
  ) {
    savedMoviesArray.push(e.target.id);
    console.log(savedMoviesArray);
  }
});
