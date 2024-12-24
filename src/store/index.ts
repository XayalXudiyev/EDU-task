import { configureStore } from "@reduxjs/toolkit";
import { highSchoolsApi } from "./services/highSchoolsService";
import { schoolsApi } from "./services/schoolsService";
import { universitiesApi } from "./services/universitiesService";
import { useDispatch } from "react-redux";
import { authApi } from "./services/authService";
import AuthReducer from "./slices/authSlice";

export const store = configureStore({
	reducer: {
		[highSchoolsApi.reducerPath]: highSchoolsApi.reducer,
		[schoolsApi.reducerPath]: schoolsApi.reducer,
		[universitiesApi.reducerPath]: universitiesApi.reducer,
		[authApi.reducerPath]: authApi.reducer,
		auth: AuthReducer,
	},

	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware()
			.concat(highSchoolsApi.middleware)
			.concat(schoolsApi.middleware)
			.concat(universitiesApi.middleware)
			.concat(authApi.middleware),
	devTools: import.meta.env.NODE_ENV !== "production",
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export type RootState = ReturnType<typeof store.getState>;

export default store;
