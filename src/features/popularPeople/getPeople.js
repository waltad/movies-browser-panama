import { authorizationKey } from "../../authorizationKey";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: authorizationKey,
  },
};

export const getPeople = async (page) => {
  if (page === null) {
    return;
  }

  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/person/popular?language=en-US&page=${page}`,
      options
    );

    if (!response.ok) {
      new Error(response.statusText);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
