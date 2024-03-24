import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/HomePage/Home";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Olympiad from "../Pages/Olympiad/Olympiad";

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
      }
    ],
  },
]);

export default router;
