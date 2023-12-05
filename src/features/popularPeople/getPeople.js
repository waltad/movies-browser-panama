import { authorizationKey } from "../../authorizationKey";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: authorizationKey,
  },
};

export const getPeople = async (page) => {
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

// import { APIkey, peopleUrl } from "../../apiURL";

// export const getPeople = async (page) => {
//   try {
//     const response = await fetch(
//       `${peopleUrl}?api_key=${APIkey}&language=en-US&page=${page}`
//     );

//     if (!response.ok) {
//       throw new Error("An error occurred. Please try again later.");
//     }

//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error(error);
//     throw error;
//   }
// };
