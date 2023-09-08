import { authorizationKey } from "./authorizationKey";

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: authorizationKey
  }
};

export const getPopularMovies = async () => {

  const response = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options);

  if (!response.ok) {
    new Error(response.statusText);
  }

  return await response.json();
};