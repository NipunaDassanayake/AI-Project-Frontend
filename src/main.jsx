import React from "react";
import ReactDOM from "react-dom/client";
import HomePage from "./pages/home/home.page.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import JobPage from "./pages/job/job.page.jsx";
import RootLayout from "./layouts/root.layout.jsx";
import SignInPage from "./pages/sign.in.page.jsx";
import SignUpPage from "./pages/sign.up.page.jsx";
import MainLayout from "./layouts/main.layout.jsx";
import { ClerkProvider } from "@clerk/clerk-react";
import AdminMainLayout from "./layouts/admin.layout.jsx";
import AdminJobPostsPage from "./pages/admin/jobPosts/admin-job-posts.page.jsx";
import AdminJobCreatePage from "./pages/admin/createJob/job-create.page.jsx";
import AdminJobPage from "./pages/admin/job/admin-job.page.jsx";
import AdminJobApplicationPage from "./pages/admin/jobApplication/admin-job-application.page.jsx";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

const router = createBrowserRouter([
  {
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
            path: "/job/:id",
            element: <JobPage />,
          },
        ],
      },
      {
        path: "admin",
        element: <AdminMainLayout />,
        children: [
          {
            path: "jobs",
            element: <AdminJobPostsPage />,
          },
          {
            path: "job/create",
            element: <AdminJobCreatePage />,
          },
          {
            path: "job/:id",
            element: <AdminJobPage />,
          },
          {
            path: "job/:id/application/:applicationId",
            element: <AdminJobApplicationPage />,
          },
        ],
      },
      {
        path: "/sign-in",
        element: <SignInPage />,
      },
      {
        path: "/sign-up",
        element: <SignUpPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      <RouterProvider router={router} />
    </ClerkProvider>
  </React.StrictMode>
);
