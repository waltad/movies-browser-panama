import { createSlice } from "@reduxjs/toolkit";

const peopleSlice = createSlice({
  name: "people",
  initialState: {
    peopleList: [],
    status: undefined,
  },

  reducers: {
    fetchPeople: state => {
      state.status = "loading";
    },
    fetchPeopleSuccess: (state, { payload: peopleList }) => {
      state.peopleList = peopleList;
      state.status = "success";
    },
    fetchPeopleError: state => {
      state.status = "error";
    },
    fetchSearchPeople: state => {
      state.status = "loading";
    },
  },
});

export const {
  fetchPeople,
  fetchPeopleSuccess,
  fetchPeopleError,
  fetchPeoplePageModifer,
  fetchSearchPeople
} = peopleSlice.actions;

export const selectPeopleState = (state) => state.people;
export const selectPeopleList = (state) => selectPeopleState(state).peopleList;
export const selectPeopleStatus = (state) => selectPeopleState(state).status;
export default peopleSlice.reducer;
