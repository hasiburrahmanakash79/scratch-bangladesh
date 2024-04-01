import { Link } from "react-router-dom";
import { Menu, Transition } from "@headlessui/react";
import { GlobeAltIcon } from "@heroicons/react/24/outline";
import { useTranslation } from "react-i18next";
import { Fragment } from "react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

let countries = [
  {
    code: "bn",
    name: "বাংলা",
    country_code: "fr",
  },
  {
    code: "en",
    name: "English",
    country_code: "gb",
  },
];

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const NavItems = (
    <>
      <li>
        <Link to="/">{t("Home")}</Link>
      </li>
      <li>
        <Link to="/about">{t("About us")}</Link>
      </li>
      <li>
        <Link to="/olympiad">{t("Olympiad")}</Link>
      </li>
      <li>
        <a href="https://scratch.mit.edu/projects/editor/?tutorial=getStarted">
          {t("Learn")}
        </a>
      </li>
      <li>
        <Link to="/blog">{t("Blog")}</Link>
      </li>
    </>
  );

  return (
    <div className="bg-opacity-70 backdrop-blur-md navbar bg-[#F4F1F1] fixed z-10 text-black">
      <div className="container mx-auto flex items-center">
        <div className="navbar-start  flex justify-start items-center">
          <div className="dropdown  lg:hidden">
            <label tabIndex={0} className="btn btn-ghost">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png"
                alt=""
                className="w-5"
              />
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
          <ul className="menu menu-horizontal font-semibold px-1">
            {NavItems}
          </ul>
        </div>
        <div className="navbar-end flex items-center justify-end gap-5 mr-5">
          <Link className="btn btn-sm btn-primary" to="/login">
            {t("Login")}
          </Link>
          <Link to="/profile" className="btn btn-sm btn-primary">
            {t("Profile")}
          </Link>
          <div>
            <div>
              <Menu
                as="div"
                className="px-3 pl-0 relative flex"
                aria-label="usermenu"
              >
                <Menu.Button
                  className="group w-full  text-sm text-left font-medium text-gray-700 focus:outline-none"
                  aria-label="usermenu-button"
                >
                  <span className="flex w-full justify-between items-center">
                    <GlobeAltIcon className="h-7 w-7 cursor-pointer  text-blue-600" />
                  </span>
                </Menu.Button>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items
                    aria-label="menu-item-container"
                    className="z-10 mx-3 origin-top absolute left-[-36px] sm:left-[-25px] md:left-[-25px] top-[42px] xl:left-[-80px] right-0 min-w-max mt-1 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-200 focus:outline-none"
                  >
                    <div className="px-1 py-1 " aria-label="menu-items">
                      {countries.map((lng) => {
                        return (
                          <Menu.Item key={lng.code}>
                            <button
                              className={classNames(
                                "flex items-center space-x-2 px-4 py-2 text-sm cursor-pointer"
                              )}
                              onClick={() => i18n.changeLanguage(lng.code)} // used to change language that needs to be rendered
                              disabled={i18n.language === lng.code}
                            >
                              <span
                                className={`fi fi-${lng.country_code}`}
                              ></span>
                              <span>{lng.name}</span>
                            </button>
                          </Menu.Item>
                        );
                      })}
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
