import { useState, useEffect } from "react";
import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Sidebar({data}) {
  const location = useLocation();
  const [active, setActive] = useState("");
  useEffect(() => {
    setActive(location.pathname);
  }, [active]);

  console.log("data in sidebar")
  console.log(data)
  return (
    <>
      <aside
      //   id={data ? "logo-sidebar" : "logo-sidebar-hidden"}
        id={data == false || data == "" ? "logo-sidebar" : "logo-sidebar-hidden"}
        // id={"logo-sidebar"}
        className="fixed  lg:top-0 top-16 bottom-0 left-0 z-50 w-64 h-screen transition-transform"
        aria-label="Sidebar"
      >
        <div className="h-full lg:px-3 lg:py-4 overflow-y-auto">
        <Link to="/dashboard" className="lg:flex md:hidden hidden logo-block  items-center pl-2.5 mb-5">
                  <img src="assets/images/logo.png" className="h-12 mr-3" width="150" alt="Logo" />

               </Link>
               <Link to="/dashboard" className="flex items-center logo-hidden hidden  mb-5">
                  <img src="assets/images/logo.png" className="h-4 mx-auto" width="200" alt="Logo" />
               </Link>
                <ul className="space-y-3 lg:mt-20 md:mt-20 mt-10 font-medium">
            <li>
              <Link
                to="/dashboard"
                className={`flex items-center ${
                  active == "/dashboard" ? "active" : ""
                } p-2 text-gray-200 rounded-lg dark:text-white menu-item group`}
              >
                <svg
                  className="w-5 h-5 text-white transition duration-75 dark:text-gray-400 group-hover:text-gray-50 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 21"
                >
                  <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                  <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                </svg>
                <span className="ml-3">Dashboard</span>
              </Link>
            </li>
            <li>
              <Link
                to="/activation"
                id="customer_tab"
                className={`${
                  active == "/activation" ? "active" : ""
                } flex items-center p-2 text-gray-200 rounded-lg dark:text-white menu-item group `}
              >
                <svg
                  className="flex-shrink-0 w-5 h-5 text-white transition duration-75 dark:text-gray-400 group-hover:text-gray-50 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 18"
                >
                  <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
                </svg>
                <span className="flex-1 ml-3 whitespace-nowrap">Activation</span>
              </Link>
            </li>
            <li>
              <Link
                to="/total-team"
                className={`${
                  active == "/total-team" ? "active" : ""
                } flex items-center p-2 text-gray-200 rounded-lg dark:text-white menu-item group `}
              >
             <svg
                  className="flex-shrink-0 w-5 h-5 transition duration-75 dark:text-gray-400 group-hover:text-gray-50 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 18"
                >
                  <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
                </svg>
                <span className="flex-1 ml-3 whitespace-nowrap">Total Team</span>
              </Link>
            </li>
            <li>
              <Link
                to="/direct-referral"
                className={`${
                  active == "/direct-referral" ? "active" : ""
                } flex items-center p-2 text-gray-200 rounded-lg dark:text-white menu-item group `}
              >
          <img src="assets/images/directreferral.png" alt="sidebarimg" className="flex-shrink-0 w-6 h-6 text-white transition duration-75 dark:text-gray-400 group-hover:text-gray-50 dark:group-hover:text-white"/>
                <span className="flex-1 ml-3 whitespace-nowrap">
                  Direct Referral
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/withdraw-history"
                className={`${
                  active == "/withdraw-history" ? "active" : ""
                } flex items-center p-2 text-gray-200 rounded-lg dark:text-white menu-item group `}
              >
                 <img src="assets/images/withdrawhistory.png" alt="sidebarimg" className="flex-shrink-0 w-6 h-6 text-white transition duration-75 dark:text-gray-400 group-hover:text-gray-50 dark:group-hover:text-white"/>
                <span className="flex-1 ml-3 whitespace-nowrap">
                  Withdraw History
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/commission-history"
                className={`${
                  active == "/commission-history" ? "active" : ""
                } flex items-center p-2 text-gray-200 rounded-lg dark:text-white menu-item group `}
              >
                <img src="assets/images/commissionhistory.png" alt="sidebarimg" className="flex-shrink-0 w-7 h-7 text-white transition duration-75 dark:text-gray-400 group-hover:text-gray-50 dark:group-hover:text-white"/>
                {/* <svg
                  className="flex-shrink-0 w-5 h-5 text-white transition duration-75 dark:text-gray-400 group-hover:text-gray-50 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 16"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"
                  />
                </svg> */}
                <span className="flex-1 ml-3 whitespace-nowrap">
                  Commision History
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/product-info"
                className={`${
                  active == "/product-info" ? "active" : ""
                } flex items-center p-2 text-gray-200 rounded-lg dark:text-white menu-item group `}
              >
                <svg
                  className="flex-shrink-0 w-5 h-5 text-white transition duration-75 dark:text-gray-400 group-hover:text-gray-50 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5H5Z" />
                  <path d="M6.737 11.061a2.961 2.961 0 0 1 .81-1.515l6.117-6.116A4.839 4.839 0 0 1 16 2.141V2a1.97 1.97 0 0 0-1.933-2H7v5a2 2 0 0 1-2 2H0v11a1.969 1.969 0 0 0 1.933 2h12.134A1.97 1.97 0 0 0 16 18v-3.093l-1.546 1.546c-.413.413-.94.695-1.513.81l-3.4.679a2.947 2.947 0 0 1-1.85-.227 2.96 2.96 0 0 1-1.635-3.257l.681-3.397Z" />
                  <path d="M8.961 16a.93.93 0 0 0 .189-.019l3.4-.679a.961.961 0 0 0 .49-.263l6.118-6.117a2.884 2.884 0 0 0-4.079-4.078l-6.117 6.117a.96.96 0 0 0-.263.491l-.679 3.4A.961.961 0 0 0 8.961 16Zm7.477-9.8a.958.958 0 0 1 .68-.281.961.961 0 0 1 .682 1.644l-.315.315-1.36-1.36.313-.318Zm-5.911 5.911 4.236-4.236 1.359 1.359-4.236 4.237-1.7.339.341-1.699Z" />
                </svg>
                <span className="flex-1 ml-3 whitespace-nowrap">
                  Product Information
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
}
