import { createBrowserRouter } from "react-router-dom";
import CheckOut from "../components/CheckOut/CheckOut";
import Course from "../components/Course/Course";
import Main from "../layout/Main";
import Blog from "../Pages/Blog/Blog/Blog";
import Courses from "../Pages/Courses/Courses/Courses";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import FAQ from "../Pages/FAQ/FAQ/FAQ";
import Login from "../Pages/Login/Login/Login";
import Register from "../Pages/Login/Register/Register";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Courses />,
        loader: () => fetch("https://e-school-server.vercel.app/courses"),
      },
      {
        path: "/courses",
        element: <Courses />,
        loader: () => fetch("https://e-school-server.vercel.app/courses"),
      },
      {
        path: "/course/:name",
        element: <PrivateRoute><Course /></PrivateRoute>,
        loader: ({params}) => fetch(`https://e-school-server.vercel.app/course/${params.name}`),
      },
      { path: "/faq", element: <FAQ /> },
      { path: "/blog", element: <Blog /> },
      { path: "/register", element: <Register /> },
      { path: "/login", element: <Login /> },
      { path: "/checkout", element: <PrivateRoute><CheckOut /></PrivateRoute> },
    ],
  },
]);
