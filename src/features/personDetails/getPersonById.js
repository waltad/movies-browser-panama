import { APIkey, personAPI } from "../../apiURL";

export const getPersonById = async (id) => {
  try {
    const response = await fetch(
      `${personAPI}${id}?api_key=${APIkey}&language=en-US`
    );
    if (!response.ok) {
      new Error(response.statusText);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const getPersonInMoviesByID = async (id) => {
  try {
    const response = await fetch(`${personAPI}${id}/movie_credits?api_key=${APIkey}&language=en-US`);

    if (!response.ok) {
      throw new Error("An error occurred. Please try again later.");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};