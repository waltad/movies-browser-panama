import { authorizationKey } from "./authorizationKey";

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: authorizationKey
  },
};

const urlPopularMovies = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';

export const getPopularMovies = async () => {

  const response = await fetch(urlPopularMovies, options);

  if (!response.ok) {
    new Error(response.statusText);
  }
  
  const result = await response.json();
  return result;
};
