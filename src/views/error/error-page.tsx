import { useRouteError } from "react-router-dom";

type RouteError = {
	statusText?: string;
	message?: string;
};

export default function ErrorPage() {
	const error = useRouteError() as RouteError;

	return (
		<div
			id="error-page"
			className="flex flex-col items-center justify-center w-full min-h-screen text-gray-800 bg-gray-100"
		>
			<div className="max-w-md p-6 text-center bg-white border border-gray-300 rounded-lg shadow-md">
				<h1 className="mb-4 text-6xl font-bold text-gray-800">404</h1>
				<h2 className="mb-4 text-2xl font-semibold">Page Not Found</h2>
				<p className="mb-6 text-base text-gray-600">
					Sorry, the page you're looking for doesn't exist or an unexpected
					error occurred.
				</p>
				{error?.statusText || error?.message ? (
					<p className="mb-6 text-sm italic text-red-600">
						<i>{error.statusText || error.message}</i>
					</p>
				) : null}
				<a
					href="/"
					className="px-5 py-2 font-medium text-white transition bg-blue-600 rounded-md hover:bg-blue-700"
				>
					Go to Homepage
				</a>
			</div>

			<footer className="mt-6 text-sm text-gray-500">
				© {new Date().getFullYear()} DAM. All rights reserved.
			</footer>
		</div>
	);
}
