import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";

export default function Header({ onDataChanged }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    onDataChanged(!isMenuOpen);
  };


  // to clear data on logout start
  const ClearData = async() => {
    localStorage.removeItem('token');
    localStorage.removeItem('data');

  }
  // to clear data on logout end
  return (
    <>
      <header>
        <nav
          className={
            isMenuOpen
              ? "fixed header-nav-hidden top-0 right-0 z-40 transition-colors duration-300"
              : "fixed top-0 header-nav right-0 z-40 transition-colors duration-300"
          }
        >
          <div className="lg:max-w-full md:max-w-screen-xl  flex  items-center justify-between py-2 px-4">
            <div className="flex">
              <Link to="/dashboard" className="flex lg:hidden items-center">
                <img
                  src="../assets/images/logo.png"
                  className="h-8 mr-3"
                  width="80"
                  alt="logo"
                />
              </Link>
              <button
                type="button"
                className="transition ease-in-out inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg"
                aria-controls="mobile-menu"
                aria-expanded={isMenuOpen}
                onClick={toggleMenu}
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                {/* <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg> */}
              </button>
            </div>
            <div
              className=" flex justify-end  w-full md:flex md:w-auto md:order-1"
              id="navbar-sticky"
            >
              <ul className="flex  navmenu items-center font-medium lg:p-2 p-2 md:p-0  rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-gray-900 ">
                <li>
                  <button className="button-bell">
                    <svg viewBox="0 0 448 512" className="bell">
                      <path d="M224 0c-17.7 0-32 14.3-32 32V49.9C119.5 61.4 64 124.2 64 200v33.4c0 45.4-15.5 89.5-43.8 124.9L5.3 377c-5.8 7.2-6.9 17.1-2.9 25.4S14.8 416 24 416H424c9.2 0 17.6-5.3 21.6-13.6s2.9-18.2-2.9-25.4l-14.9-18.6C399.5 322.9 384 278.8 384 233.4V200c0-75.8-55.5-138.6-128-150.1V32c0-17.7-14.3-32-32-32zm0 96h8c57.4 0 104 46.6 104 104v33.4c0 47.9 13.9 94.6 39.7 134.6H72.3C98.1 328 112 281.3 112 233.4V200c0-57.4 46.6-104 104-104h8zm64 352H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7s18.7-28.3 18.7-45.3z"></path>
                    </svg>
                    <span className="icon-button__badge">2</span>
                  </button>
                </li>
                <li style={{ marginLeft: "0px" }}>
                  <Menu>
                    <Menu.Button className="flex relative text-white text-sm items-center ">
                      <ChevronDownIcon className="w-5 h-5" />
                      <i className="text-2xl uil uil-user-circle"></i>
                      <span className="hidden lg:block md:block">
                        Ruchita Sonar
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
                      <Menu.Items className="dropdown-item origin-top-right absolute lg:right-15 mt-2 w-48 rounded-md shadow-lg  ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              className={`${
                                active ? "bg-gray-100" : ""
                              } block px-4 py-2 text-sm rounded text-gray-100 w-full text-left`}
                            >
                              Profile
                            </button>
                          )}
                        </Menu.Item>

                        <Menu.Item>
                          {({ active }) => (
                            <button
                              className={`${
                                active ? "bg-gray-100" : ""
                              } block px-4 py-2 text-sm rounded text-gray-100 w-full text-left`}
                            >
                              Change Password
                            </button>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              to="/login"
                              className={`${
                                active ? "bg-gray-100" : ""
                              } block px-4 py-2 rounded text-sm text-gray-100 w-full text-left`}
                              onClick={ClearData}
                            >
                              Logout
                            </Link>
                          )}
                        </Menu.Item>
                        {/* Add more Menu.Item components for additional options */}
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
