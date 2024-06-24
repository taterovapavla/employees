import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./components/Layout/Layout.tsx";
import {
  TribeList,
  loader as tribesLoader,
} from "./components/TribeList/TribeList.tsx";
import { employeesRoutes } from "./routes/employees.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      ...employeesRoutes,
      {
        path: "tribes",
        element: <TribeList />,
        loader: tribesLoader,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
