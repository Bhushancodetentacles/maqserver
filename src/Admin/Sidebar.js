import { useState, useEffect } from "react";
import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Sidebar({ data }) {
   const location = useLocation()
   const [active, setActive] = useState('')
   useEffect(() => {
      setActive(location.pathname)
   }, [active])
   return (
      <>
         <aside id={data == false || data == "" ? "logo-sidebar" : "logo-sidebar-hidden"}
               className="fixed  lg:top-0 top-16 bottom-0 left-0 z-50 w-64 h-screen transition-transform"
        aria-label="Sidebar"
      >
            <div className="h-full lg:px-3 lg:py-4 overflow-y-auto">
               <Link to="/admin/admin-dashboard" className="flex logo-block items-center pl-2.5 mb-5">
                  <img src="../assets/images/logo.png" className="h-12 mr-3" width="150" alt="Flowbite Logo" />

               </Link>
               <Link to="/admin/admin-dashboard" className="flex items-center logo-hidden hidden  mb-5">
                  <img src="../assets/images/logo.png" className="h-4 mx-auto" width="250" alt="Flowbite Logo" />
               </Link>


               {/* <div className="activation-details mx-auto flex-col justify-center items-center flex">
         <img src="../assets/images/user.png" className="mb-2"width="80" alt=""/> 
         <span className="text-lg text-amber-400">Ruchita Sonar</span>
         <span className="text-sm text-lime-600">Advisor</span>
      </div> */}
               <ul className="space-y-3 lg:mt-20 md:mt-20 mt-10 font-medium">
                  <li>
                     <Link to="/Admin/Admin-dashboard"
                        className={`flex items-center ${active == '/Admin/Admin-dashboard' ? 'active' : ''} p-2 text-gray-200 rounded-lg dark:text-white menu-item group`}>
                        <svg className="w-5 h-5 text-white transition duration-75 dark:text-gray-400 group-hover:text-gray-50 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                           <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                           <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                        </svg>
                        <span className="ml-3">Dashboard</span>
                     </Link>
                  </li>
                  <li >
                     <Link to="/Admin/user-list" id="customer_tab" className={`${active == '/Admin/user-list' ? 'active' : ''} flex items-center p-2 text-gray-200 rounded-lg dark:text-white menu-item group `}>
                        
                        <svg className="flex-shrink-0 w-5 h-5 transition duration-75 dark:text-gray-400 group-hover:text-gray-50 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                           <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
                        </svg>
                        <span className="flex-1 ml-3 whitespace-nowrap">User List</span>

                     </Link>
                  </li>
                  <li >
                     <Link to="/Admin/request-withdraw" className={`${active == '/Admin/request-withdraw' ? 'active' : ''} flex items-center p-2 text-gray-200 rounded-lg dark:text-white menu-item group `}>
                     <img src="../assets/images/withdrawhistory.png" alt="sidebarimg" className="flex-shrink-0 w-6 h-6 text-white transition duration-75 dark:text-gray-400 group-hover:text-gray-50 dark:group-hover:text-white"/>
                        <span className="flex-1 ml-3 whitespace-nowrap">Request To Withdraw</span>

                     </Link>
                  </li>
                  <li >
                     <Link to="/Admin/cart-page" className={`${active == '/Admin/cart-page' ? 'active' : ''} flex items-center p-2 text-gray-200 rounded-lg dark:text-white menu-item group `}>
                     <img src="../assets/images/cart.png" alt="sidebarimg" className="flex-shrink-0 w-6 h-6 text-white transition duration-75 dark:text-gray-400 group-hover:text-gray-50 dark:group-hover:text-white"/>
                        <span className="flex-1 ml-3 whitespace-nowrap">Cart Page</span>
                     </Link>
                  </li>
                  <li>
                     <Link to="/Admin/reports" className={`${active == '/Admin/reports' ? 'active' : ''} flex items-center p-2 text-gray-200 rounded-lg dark:text-white menu-item group `}>
                     <img src="../assets/images/report.png" alt="sidebarimg" className="flex-shrink-0 w-6 h-6 text-white transition duration-75 dark:text-gray-400 group-hover:text-gray-50 dark:group-hover:text-white"/>
                        <span className="flex-1 ml-3 whitespace-nowrap">Reports</span>
                     </Link>
                  </li>

               </ul>
            </div>
         </aside>



      </>

   )
}

