import { createSlice } from "@reduxjs/toolkit";
import type { IUniversity } from "../../types";
import { universitiesApi } from "../services";

const initialState = {
	UniversitiesItems: [] as IUniversity[],
};


export const universitySlice = createSlice({
	name: "university",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
	  builder.addMatcher(
      universitiesApi.endpoints.getAllUniversities.matchFulfilled,
        (state, action) => {
          state.UniversitiesItems = action.payload; 
        },
      );
		builder.addMatcher(
			universitiesApi.endpoints.deleteUniversity.matchFulfilled,
			(state, action) => {
				console.log(state);
				console.log(action)
			},
		);
	},
});

export default universitySlice.reducer;
