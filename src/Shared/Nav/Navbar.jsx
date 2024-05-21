import { Link } from "react-router-dom";
import { Menu, Transition } from "@headlessui/react";
import { useTranslation } from "react-i18next";
import { Fragment, useState } from "react";
import { FaAngleDown, FaBars, FaEarthAmericas } from "react-icons/fa6";

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
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleNavItemClick = () => {
    setDropdownOpen(false);
  };
  const { t, i18n } = useTranslation();
  const user = true;
  const NavItems = (
    <>
      <li onClick={() => setDropdownOpen(false)}>
        <Link to="/">{t("Home")}</Link>
      </li>
      <li onClick={() => setDropdownOpen(false)}>
        <Link to="/about">{t("About us")}</Link>
      </li>
      <li onClick={() => setDropdownOpen(false)}>
        <Link to="/olympiad">{t("Olympiad")}</Link>
      </li>
      <li onClick={() => setDropdownOpen(false)}>
        <a href="https://scratch.mit.edu/projects/editor/?tutorial=getStarted">
          {t("Learn")}
        </a>
      </li>
      <li onClick={() => setDropdownOpen(false)}>
        <Link to="/blog">{t("Blog")}</Link>
      </li>
    </>
  );

  return (
    <div className="bg-opacity-70 min-w-full backdrop-blur-md bg-[#F4F1F1] fixed z-10 text-black">
      <div className="container mx-auto flex items-center justify-between">
        <div className="dropdown md:hidden">
          <label
            tabIndex={0}
            className="btn btn-ghost"
            onClick={handleDropdownToggle}
          >
            <FaBars className="text-xl" />
          </label>
          {dropdownOpen && (
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-white rounded-box w-52"
            >
              {NavItems}
            </ul>
          )}
        </div>
        <div className="flex justify-start items-center">
          <Link className="">
            <img
              src="https://i.ibb.co/x7G0RNy/Scratch-Bangladesh-Logo-1.png"
              className="md:w-28 w-16"
            />
          </Link>
        </div>
        <div className="hidden md:flex">
          <ul className="menu menu-horizontal text-lg font-semibold px-1">
            {NavItems}
          </ul>
        </div>
        <div className="flex items-center gap-5 md:mr-5">
          {user ? (
            <>
              <div className="dropdown dropdown-end">
                <div className="tooltip tooltip-left" data-tip="User Name">
                  <label
                    tabIndex={0}
                    className="btn btn-ghost btn-circle avatar"
                    onClick={handleDropdownToggle}
                  >
                    <div className="md:w-10 w-7 rounded-full">
                      <img src="https://e7.pngegg.com/pngimages/550/997/png-clipart-user-icon-foreigners-avatar-child-face.png" />
                    </div>
                  </label>
                </div>
                {dropdownOpen && (
                  <ul
                    tabIndex={0}
                    className="mt-3 p-2 shadow bg-white text-black menu menu-compact dropdown-content rounded-box w-52"
                  >
                    <li onClick={() => setDropdownOpen(false)}>
                      <Link to="/profile" className="">
                        {t("Your Profile")}
                      </Link>
                    </li>
                    <li onClick={() => setDropdownOpen(false)}>
                      <Link to="/dashboard" className="">
                        {t("Dashboard")}
                      </Link>
                    </li>
                    <li onClick={() => setDropdownOpen(false)}>
                      <Link className="w-full">Log Out</Link>
                    </li>
                  </ul>
                )}
              </div>
            </>
          ) : (
            <>
              <Link className="btn text-lg btn-primary" to="/login">
                {t("Login")}
              </Link>
            </>
          )}
          <div className="hidden md:block">
            <div>
              <Menu
                as="div"
                className="pl-0 relative flex"
                aria-label="usermenu"
              >
                <Menu.Button
                  className="group w-full text-lg text-left text-gray-700 focus:outline-none"
                  aria-label="usermenu-button"
                >
                  <span className="flex items-center gap-1">
                    <FaEarthAmericas />
                    <FaAngleDown className="text-xs" />
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
                                "flex items-center space-x-2 px-4 py-2 text-lg cursor-pointer"
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
  // return (
  //   <div className="bg-opacity-70 min-w-full backdrop-blur-md bg-[#F4F1F1] fixed top-0 z-10 text-black">
  //     <div className="container mx-auto flex items-center justify-between">
  //     <div className="dropdown  md:hidden">
  //           <label tabIndex={0} className="btn btn-ghost">
  //             <FaBars className="text-xl" />
  //           </label>
  //           <ul
  //             tabIndex={0}
  //             className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-white rounded-box w-52"
  //           >
  //             {NavItems}
  //           </ul>
  //         </div>
  //       <div className="flex justify-start items-center">

  //         <Link className="">
  //           <img
  //             src="https://i.ibb.co/x7G0RNy/Scratch-Bangladesh-Logo-1.png"
  //             className="md:w-28 w-16"
  //           />
  //         </Link>
  //       </div>
  //       <div className="hidden md:flex">
  //         <ul className="menu menu-horizontal text-lg font-semibold px-1">
  //           {NavItems}
  //         </ul>
  //       </div>
  //       <div className="flex items-center  gap-5 md:mr-5">
  //         {user ? (
  //           <>
  //             <div className="dropdown dropdown-end  md:mr-0 mr-7">
  //               <div className="tooltip tooltip-left" data-tip="User Name">
  //                 <label
  //                   tabIndex={0}
  //                   className="btn btn-ghost btn-circle avatar"
  //                 >
  //                   <div className="md:w-10 w-7 rounded-full">
  //                     <img src="https://e7.pngegg.com/pngimages/550/997/png-clipart-user-icon-foreigners-avatar-child-face.png" />
  //                   </div>
  //                 </label>
  //               </div>

  //               <ul
  //                 tabIndex={0}
  //                 className="mt-3 p-2 shadow bg-white text-black menu menu-compact dropdown-content rounded-box w-52"
  //               >
  //                 <li>
  //                   <Link to="/profile" className="">
  //                     {t("Your Profile")}
  //                   </Link>
  //                 </li>
  //                 <li>
  //                   <Link to="/dashboard" className="">
  //                     {t("Dashboard")}
  //                   </Link>
  //                 </li>
  //                 <li>
  //                   <Link className="w-full">Log Out</Link>
  //                 </li>
  //               </ul>
  //             </div>
  //           </>
  //         ) : (
  //           <>
  //             <Link className="btn text-lg btn-primary" to="/login">
  //               {t("Login")}
  //             </Link>
  //           </>
  //         )}

  //         <div className="hidden md:block">
  //           <div>
  //             <Menu
  //               as="div"
  //               className=" pl-0 relative flex"
  //               aria-label="usermenu"
  //             >
  //               <Menu.Button
  //                 className="group w-full  text-lg text-left text-gray-700 focus:outline-none"
  //                 aria-label="usermenu-button"
  //               >
  //                 <span className="flex items-center gap-1">
  //                   <FaEarthAmericas />
  //                   <FaAngleDown className="text-xs" />
  //                 </span>
  //               </Menu.Button>
  //               <Transition
  //                 as={Fragment}
  //                 enter="transition ease-out duration-100"
  //                 enterFrom="transform opacity-0 scale-95"
  //                 enterTo="transform opacity-100 scale-100"
  //                 leave="transition ease-in duration-75"
  //                 leaveFrom="transform opacity-100 scale-100"
  //                 leaveTo="transform opacity-0 scale-95"
  //               >
  //                 <Menu.Items
  //                   aria-label="menu-item-container"
  //                   className="z-10 mx-3 origin-top absolute left-[-36px] sm:left-[-25px] md:left-[-25px] top-[42px] xl:left-[-80px] right-0 min-w-max mt-1 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-200 focus:outline-none"
  //                 >
  //                   <div className="px-1 py-1 " aria-label="menu-items">
  //                     {countries.map((lng) => {
  //                       return (
  //                         <Menu.Item key={lng.code}>
  //                           <button
  //                             className={classNames(
  //                               "flex items-center space-x-2 px-4 py-2 text-lg cursor-pointer"
  //                             )}
  //                             onClick={() => i18n.changeLanguage(lng.code)} // used to change language that needs to be rendered
  //                             disabled={i18n.language === lng.code}
  //                           >
  //                             <span
  //                               className={`fi fi-${lng.country_code}`}
  //                             ></span>
  //                             <span>{lng.name}</span>
  //                           </button>
  //                         </Menu.Item>
  //                       );
  //                     })}
  //                   </div>
  //                 </Menu.Items>
  //               </Transition>
  //             </Menu>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );
};

export default Navbar;
