import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { IHighSchool } from "../../types";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const highSchoolsApi = createApi({
	reducerPath: "highSchools",
	baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
	tagTypes: ["HighSchools"],
	endpoints: (builder) => ({
		getAllHighSchools: builder.query<IHighSchool[], void>({
			query: () => "high-schools",
			providesTags: ["HighSchools"],
		}),
		deleteHighSchool: builder.mutation<void, number>({
			query: (highSchoolId: number) => ({
				url: `high-schools/${highSchoolId}`,
				method: "DELETE",
			}),
			invalidatesTags: [{ type: "HighSchools" }],
			onQueryStarted: async (highSchoolId, { dispatch, queryFulfilled }) => {
				dispatch(
					highSchoolsApi.util.updateQueryData(
						"getAllHighSchools",
						undefined,
						(draft) => {
							return draft.filter((school) => school.id !== highSchoolId);
						},
					),
				);
				try {
					await queryFulfilled;
				} catch {
					console.error("Failed to delete high school.");
				}
			},
		}),
	}),
});

export const { useGetAllHighSchoolsQuery, useDeleteHighSchoolMutation } =
	highSchoolsApi;
