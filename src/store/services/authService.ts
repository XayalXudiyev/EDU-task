import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { RootState } from "..";

export interface User {
	email: string;
	password: string;
}
export interface UserResponse {
	user: User;
	token: string;
}

export interface LoginRequest {
	email: string;
	password: string;
}

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const authApi = createApi({
	reducerPath: "authApi",
	baseQuery: fetchBaseQuery({
		baseUrl: BASE_URL,
		prepareHeaders: (headers, { getState }) => {
			const token = (getState() as RootState).auth.token;
			if (token) {
				headers.set("authorization", `Bearer ${token}`);
			}
			return headers;
		},
	}),
	endpoints: (builder) => ({
		login: builder.mutation<UserResponse, LoginRequest>({
			query: (credentials) => ({
				url: "users",
				method: "GET",
				params: {
					email: credentials.email,
					password: credentials.password,
				},
			}),
			transformResponse: (response: any) => {
				if (response.length > 0) {
					return {
						user: response[0],
						token: "sample_token",
					};
				}
				throw new Error("Invalid email or password");
			},
		}),
	}),
});

export const { useLoginMutation } = authApi;
