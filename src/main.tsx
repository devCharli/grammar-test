import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import GrammarPage from "./pages/grammar/index.tsx";
import GrammarTest from "./pages/grammar/test/index.tsx";
import Test from "./pages/grammar/test/[id]/index.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/grammar",
    element: <GrammarPage />,
  },
  {
    path: "/grammar/test",
    element: <GrammarTest />,
  },
  {
    path: "/grammar/test/:id",
    element: <Test />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
