import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Nav/Navbar";


const Main = () => {
    return (
        <div>
      <Navbar></Navbar>
      <div className="min-h-[calc(100vh-239px)]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
    );
};

export default Main;