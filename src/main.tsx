import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { router } from "./routes/routes";
import { Provider } from "react-redux";
import { store } from "./store";

const appRouter = createBrowserRouter(router);

createRoot(document.getElementById("root") as HTMLElement).render(
	<Provider store={store}>
		<RouterProvider router={appRouter} />
	</Provider>,
);
