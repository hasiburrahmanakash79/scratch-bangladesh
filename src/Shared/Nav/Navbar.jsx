import { Link } from "react-router-dom";

const Navbar = () => {
  const NavItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About us</Link>
      </li>
      <li>
        <Link to="/olympiad">Olympiad</Link>
      </li>
      <li>
        <Link to="/learn">Learn</Link>
      </li>
      <li>
        <Link to="/blog">Blog</Link>
      </li>
    </>
  );

  return (
    <div className="bg-opacity-70 backdrop-blur-md navbar bg-[#F4F1F1] fixed z-10 text-black">
      <div className="container mx-auto flex items-center">
        <div className="navbar-start  flex justify-start items-center">
          <div className="dropdown  lg:hidden">
            <label tabIndex={0} className="btn btn-ghost">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png" alt=""  className="w-5"/>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-blue-600 rounded-box w-52"
            >
              {NavItems}
            </ul>
          </div>
          <Link className="">
            <img
              src="https://i.ibb.co/x7G0RNy/Scratch-Bangladesh-Logo-1.png"
              className="w-16"
            />
          </Link>
        </div>
        <div className="navbar-center  hidden md:flex">
          <ul className="menu menu-horizontal px-1">{NavItems}</ul>
        </div>
        <div className="navbar-end flex items-center justify-end gap-5 mr-5">
          <Link className="btn btn-sm btn-primary" to="/login">
            Login
          </Link>
          <Link to="/profile" className="btn btn-sm btn-primary">
          profile
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
