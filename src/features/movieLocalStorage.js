const localStorageKey = "movieId";

export const saveMovieIdInLocalStorage = movieId =>
  localStorage.setItem(localStorageKey, JSON.stringify(movieId));

export const getMovieIdFromLocalStorage = () =>
  JSON.parse(localStorage.getItem(localStorageKey)) || "";