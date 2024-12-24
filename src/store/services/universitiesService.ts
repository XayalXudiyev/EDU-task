import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { IUniversity } from "../../types";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const universitiesApi = createApi({
	reducerPath: "universities",
	baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
	tagTypes: ["Universities"],
	endpoints: (builder) => ({
		getAllUniversities: builder.query<IUniversity[], void>({
			query: () => "universities",
			providesTags: ["Universities"],
		}),
		deleteUniversity: builder.mutation<void, number>({
			query: (uniId: number) => ({
				url: `universities/${uniId}`,
				method: "DELETE",
			}),
			invalidatesTags: ["Universities"],
			onQueryStarted: async (uniId, { dispatch, queryFulfilled }) => {
				dispatch(
					universitiesApi.util.updateQueryData(
						"getAllUniversities",
						undefined,
						(draft) => {
							return draft.filter((university) => university.id !== uniId);
						},
					),
				);
				try {
					await queryFulfilled;
				} catch {
					console.error("Failed to delete university.");
				}
			},
		}),
	}),
});

export const { useGetAllUniversitiesQuery, useDeleteUniversityMutation } =
	universitiesApi;
