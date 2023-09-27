import { authorizationKey } from "../authorizationKey";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: authorizationKey,
  },
};

export const getPopularMovies = async (page) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${page}`,
    options
  );

  if (!response.ok) {
    new Error(response.statusText);
  }

  const result = await response.json();
  return result;
};
