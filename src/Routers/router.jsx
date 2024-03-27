import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/HomePage/Home";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Olympiad from "../Pages/Olympiad/Olympiad";
import Blog from "../Pages/Blog/Blog";
import BlogDetails from "../Pages/Blog/BlogDetails";
import Login from "../Pages/RegistrationPage/Login/Login";
import Registration from "../Pages/RegistrationPage/Registration/Registration";
import PageNotFound from "../Pages/PageNotFound/PageNotFound";
import TeachersProfile from "../Pages/TeachersProfile/TeachersProfile";

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
      },
      {
        path: "/details",
        element: <BlogDetails/>
      },
      {
        path: "/profile",
        element: <TeachersProfile/>
      }
    ],
    
  },
  {
    path: "/login",
    element: <Login/>
  },
  {
    path: "/signUp",
    element: <Registration/>
  },
  {
    path: "*",
    element: <PageNotFound/>
  }
]);

export default router;
