import { createBrowserRouter } from "react-router-dom";
import Course from "../components/Course/Course";
import Main from "../layout/Main";
import Blog from "../Pages/Blog/Blog/Blog";
import Courses from "../Pages/Courses/Courses/Courses";
import FAQ from "../Pages/FAQ/FAQ/FAQ";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login/Login";
import Register from "../Pages/Login/Register/Register";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/home", element: <Home /> },
      {
        path: "/courses",
        element: <Courses />,
        loader: () => fetch("http://localhost:5000/courses"),
      },
      {
        path: "/course/:name",
        element: <Course />,
        loader: ({params}) => fetch(`http://localhost:5000/course/${params.name}`),
      },
      { path: "/faq", element: <FAQ /> },
      { path: "/blog", element: <Blog /> },
      { path: "/register", element: <Register /> },
      { path: "/login", element: <Login /> },
    ],
  },
]);
