import { createSlice } from "@reduxjs/toolkit";
import type { IHighSchool } from "../../types";
import { highSchoolsApi } from "../services";

const initialState = {
	highSchoolsItems: [] as IHighSchool[],
};

export const highSchoolSlice = createSlice({
	name: "highSchool",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addMatcher(
			highSchoolsApi.endpoints.getAllHighSchools.matchFulfilled,
			(state, action) => {
				state.highSchoolsItems = action.payload;
			},
		);
		builder.addMatcher(
			highSchoolsApi.endpoints.deleteHighSchool.matchFulfilled,
			(state, action) => {
				console.log(state);
				console.log(action);
			},
		);
	},
});

export default highSchoolSlice.reducer;
