import { authorizationKey } from "./authorizationKey";

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: authorizationKey
  }
};

export const getMovieDetails = async (movieId) => {
  
  const id = movieId.payload;
  const urlMovieDetails = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;
  
  const response = await fetch(urlMovieDetails, options);

  if (!response.ok) {
    new Error(response.statusText);
  }

  const result = await response.json();
  return result;
};
