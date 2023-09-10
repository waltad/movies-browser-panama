import { authorizationKey } from "./authorizationKey";

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: authorizationKey
  }
};

const urlGenresList = 'https://api.themoviedb.org/3/genre/movie/list?language=en';

export const getGenresList = async () => {

  const response = await fetch(urlGenresList, options);

  if (!response.ok) {
    new Error(response.statusText);
  }

  const result = await response.json();
  return result.genres;
};
