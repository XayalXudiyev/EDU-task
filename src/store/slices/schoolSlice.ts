import { createSlice } from "@reduxjs/toolkit";
import type { ISchool } from "../../types";
import { schoolsApi } from "../services";

const initialState = {
	schoolsItems: [] as ISchool[],
};

export const schoolSlice = createSlice({
	name: "school",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
    builder.addMatcher(
      schoolsApi.endpoints.getAllSchools.matchFulfilled,
			(state, action) => {
        state.schoolsItems = action.payload;
			},
		);
    builder.addMatcher(
      schoolsApi.endpoints.deleteSchool.matchFulfilled,
      (state, action) => {
        console.log(state);
        console.log(action)
      },
    );
	},
});

export default schoolSlice.reducer;
