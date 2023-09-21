import { authorizationKey } from "./authorizationKey";

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: authorizationKey
  }
};

export const getMovieDetails = async (movieId) => {
  
  const urlMovieDetails = `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`;
  
  const response = await fetch(urlMovieDetails, options);

  if (!response.ok) {
    new Error(response.statusText);
  }

  const result = await response.json();
  return result;
};

export const getMovieCredits = async (movieId) => {
  
  const urlMovieCredits = `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`;
  
  const response = await fetch(urlMovieCredits, options);

  if (!response.ok) {
    new Error(response.statusText);
  }

  const result = await response.json();
  return result;
};
