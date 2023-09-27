import { APIkey, peopleUrl } from "../../apiURL";

export const getPeople = async (page) => {
  try {
    const response = await fetch(
      `${peopleUrl}?api_key=${APIkey}&language=en-US&page=${page}`
    );
    if (!response.ok) {
      throw new Error("An error occurred. Please try again later.");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
