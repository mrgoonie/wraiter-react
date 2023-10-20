import "./index.css";

import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import Examples from "./routes/example";
import TestImportPage from "./routes/import";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
	},
	{
		path: "/examples",
		element: <Examples />,
	},
	{
		path: "/import",
		element: <TestImportPage />,
	},
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
