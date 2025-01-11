function renderMovieItem(itemId, page = "MovieFinder", API_KEY, domInsert) {
  fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${itemId}`)
    .then((res) => res.json())
    .then((movie) => {
      domInsert.innerHTML += `
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
                        ${
                          page === "Watchlist" ? "Remove" : "Watchlist"
                        }</button>
                    </div>
                    <p class="movie-listing__description">${movie.Plot}</p>
                </div>
            </div>
            `;
    });
}

export { renderMovieItem };
