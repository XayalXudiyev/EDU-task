import { Suspense, lazy } from "react";
import { Spin } from "antd";
import { Navigate } from "react-router-dom";

const Universities = lazy(() => import("../views/universites"));
const Schools = lazy(() => import("../views/schools"));
const HighSchools = lazy(() => import("../views/highSchools"));  
const Login = lazy(() => import("../views/login"));
const MainLayout = lazy(() => import("../views/layout"));
const ErrorPage = lazy(() => import("../views/error/error-page"));

const LazyComponent = ({ Component }: { Component: React.FC }) => (
	<Suspense
		fallback={
			<Spin
				size="large"
				className="absolute inset-0 flex items-center justify-center h-screen"
			/>
		}
	>
		<Component />
	</Suspense>
);

export const router = [
	{
		path: "/",
		element: <LazyComponent Component={MainLayout} />,
		errorElement: <LazyComponent Component={ErrorPage} />,
		children: [
			{ index: true, element: <Navigate to="/universities" replace /> },

			{
				path: "/universities",
				element: <LazyComponent Component={Universities} />,
			},
			{
				path: "/schools",
				element: <LazyComponent Component={Schools} />,
			},
			{
				path: "/high-schools",
				element: <LazyComponent Component={HighSchools} />,
			},
		],
	},
	{ path: "login", element: <LazyComponent Component={Login} /> },
];
