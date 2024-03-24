import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/HomePage/Home";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Olympiad from "../Pages/Olympiad/Olympiad";
import Blog from "../Pages/Blog/Blog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <AboutUs/>
      },
      {
        path: "/olympiad",
        element: <Olympiad/>
      },
      {
        path: "/blog",
        element: <Blog/>
      }
    ],
  },
]);

export default router;
