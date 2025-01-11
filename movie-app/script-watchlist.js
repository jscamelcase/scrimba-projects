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
  savedMoviesArray.forEach((itemId) => renderMovieItem(itemId, "Watchlist"));
}

function renderMovieItem(itemId, page = "MovieFinder") {
  fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${itemId}`)
    .then((res) => res.json())
    .then((movie) => {
      watchListDisplay.innerHTML += `
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
                      <button id="${itemId}" class="movie-listing__watchlist"><img src="${
        page === "Watchlist"
          ? "./images/negative-symb.png"
          : "./images/Icon.png"
      }" alt="plus sign">
                      ${page === "Watchlist" ? "Remove" : "Watchlist"}</button>
                  </div>
                  <p class="movie-listing__description">${movie.Plot}</p>
              </div>
          </div>
          `;
    });
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
    savedMoviesArray.forEach((itemId) => renderMovieItem(itemId, "Watchlist"));
    localStorage.setItem("savedMovies", JSON.stringify(savedMoviesArray));
  }
});
