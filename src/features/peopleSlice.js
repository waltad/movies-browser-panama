import { createSlice } from "@reduxjs/toolkit";

const peopleSlice = createSlice({
  name: "people",
  initialState: {
    peopleList: null,
    status: null,
  },

  reducers: {
    fetchPeople: (page) => ({
      status: "loading",
      peopleList: null,
      page,
    }),
    fetchPeopleSuccess: (_, { payload: peopleList }) => ({
      status: "success",
      peopleList,
      page: peopleList.page,
    }),
    fetchPeopleError: () => ({
      status: "error",
      peopleList: null,
    }),
  },
});

export const {
  fetchPeople,
  fetchPeopleSuccess,
  fetchPeopleError,
  fetchPeoplePageModifer,
} = peopleSlice.actions;

export const selectPeopleState = (state) => state.people;
export const selectPeopleList = (state) => selectPeopleState(state).peopleList;
export const selectPeopleStatus = (state) => selectPeopleState(state).status;
export const selectPeoplePage = (state) => selectPeopleState(state).page;
export default peopleSlice.reducer;
