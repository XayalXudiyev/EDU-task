import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { ISchool } from "../../types";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const schoolsApi = createApi({
	reducerPath: "schools",
	baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
	tagTypes: ["Schools"],
	endpoints: (builder) => ({
		getAllSchools: builder.query<ISchool[], void>({
			query: () => "schools",
			providesTags: ["Schools"],
		}),
		deleteSchool: builder.mutation<void, number>({
			query: (schoolId: number) => ({
				url: `schools/${schoolId}`,
				method: "DELETE",
			}),
			invalidatesTags: ["Schools"],
			onQueryStarted: async (schoolId, { dispatch, queryFulfilled }) => {
				dispatch(
					schoolsApi.util.updateQueryData(
						"getAllSchools",
						undefined,
						(draft) => {
							return draft.filter((school) => school.id !== schoolId);
						},
					),
				);
				try {
					await queryFulfilled;
				} catch {
					console.error("Failed to delete school.");
				}
			},
		}),
	}),
});

export const { useGetAllSchoolsQuery, useDeleteSchoolMutation } = schoolsApi;
