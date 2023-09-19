import { APIkey, personAPI } from "../../apiURL";

export const getPersonById = async (id) => {
  try {
    const response = await fetch(
      `${personAPI}${id}?api_key=${APIkey}&language=en-US`
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
// This function is very similar to the getPeople function. The only difference is that we are now passing in an id as an argument. We then use that id to fetch the data for a specific person. The data is then returned.
