import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Blog from "../Pages/Blog/Blog/Blog";
import Courses from "../Pages/Courses/Courses/Courses";
import FAQ from "../Pages/FAQ/FAQ/FAQ";
import Home from "../Pages/Home/Home/Home";

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {path: '/', element: <Home />},
      {path: '/home', element: <Home />},
      {path: '/courses', element: <Courses />},
      {path: '/faq', element: <FAQ />},
      {path: '/blog', element: <Blog />},
    ]
  }
])