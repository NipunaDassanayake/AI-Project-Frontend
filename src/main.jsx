import React from "react";
import ReactDOM from "react-dom/client";
import HomePage from "./pages/home/home.page.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ProfilePage from "./pages/profile/profile.page.jsx";
import JobPage from "./pages/job/job.page.jsx";
import RootLayout from "./layouts/root.layout.jsx";
import SignIn from "./pages/sign.in.page.jsx";
import SignUp from "./pages/sign.up.page.jsx";
import MainLayout from "./layouts/main.layout.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        element: <MainLayout />,
        children: [
          {
            path: "/",
            element: <HomePage />,
          },
          {
            path: "/profile",
            element: <ProfilePage />,
          },
          {
            path: "/job/:id",
            element: <JobPage />,
          },
        ],
      },

      {
        path: "/sign-in",
        element: <SignIn />,
      },
      {
        path: "/sign-up",
        element: <SignUp />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
