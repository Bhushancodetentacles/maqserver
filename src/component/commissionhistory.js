import React, { useEffect, useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer1";
import { Link } from "react-router-dom";
export default function Commissionhistory() {
  const [data, setData] = useState("");

  const handleDataChange = (newData) => {
    setData(newData);
  };

  return (
    <div>
      <Header onDataChanged={handleDataChange}></Header>
      <Sidebar data={data}></Sidebar>
      <div
        className={
          data == false || data == "" ? "main-section relative" : "main-section-hidden relative"
        }
      >
        <div className="page-content">
          <div className="dashboard-part lg:flex md:flex block md:justify-between lg:justify-between">
            <h3 className="text-white font-extrabold text-3xl">
              {/* <i className="uil uil-home"></i> */}
              Commission History
            </h3>

            <nav className="flex breadcrumb" aria-label="Breadcrumb">
              <ol className="inline-flex items-center space-x-1 md:space-x-2">
                <li className="inline-flex items-center">
                  <Link
                    to="/dashboard"
                    className="inline-flex items-center whitespace-nowrap lg:text-lg md:text-lg text-sm font-medium text-gray-100 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
                  >
                    <svg
                      className="w-3 h-3 mr-2.5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                    </svg>
                    Dashboard
                  </Link>
                </li>
                <li>
                  <div className="flex items-center">
                    <svg
                      className="w-3 h-3 svg-icon text-gray-100 mx-1"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 6 10"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m1 9 4-4-4-4"
                      />
                    </svg>
                    <Link
                      to="/commission-history"
                      className="ml-1 whitespace-nowrap lg:text-lg md:text-lg text-sm font-medium text-gray-100 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white"
                    >
                      Commission History
                    </Link>
                  </div>
                </li>
              </ol>
            </nav>
          </div>
          <div className="main-part">
            <div className="container">
              <div className="table-content rounded">
                <div className="wrap">
                  <div className="search">
                    <input
                      type="text"
                      className="searchTerm"
                      placeholder="Search.."
                    />
                    <button type="submit" className="searchButton">
                      <i className="fa fa-search"></i>
                    </button>
                  </div>
                </div>
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                  <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-base text-gray-50 uppercase  dark:text-gray-400">
                      <tr>
                        <th scope="col" className="px-6 text-center py-3">
                          User Id
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Name
                        </th>
                        <th scope="col" className="px-6 text-center py-3">
                          Date
                        </th>
                        <th scope="col" className="px-6 text-center py-3">
                          Commission
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b text-base text-gray-200 ">
                        <th scope="row" className="text-center px-6 py-4 ">
                          1
                        </th>
                        <td className="px-6 py-4">Ruchita</td>
                        <td className="px-6 py-4 text-center">23/02/2023</td>
                        <td className="px-6 py-4 text-center">1000</td>
                      </tr>
                      <tr className="border-b text-base text-gray-200 ">
                        <th scope="row" className="text-center px-6 py-4 ">
                          1
                        </th>
                        <td className="px-6 py-4">Ruchita</td>
                        <td className="px-6 py-4 text-center">23/02/2023</td>
                        <td className="px-6 py-4 text-center">1000</td>
                      </tr>
                      <tr className="border-b text-base text-gray-200  ">
                        <th scope="row" className="text-center px-6 py-4 ">
                          1
                        </th>
                        <td className="px-6 py-4">Ruchita</td>
                        <td className="px-6 py-4 text-center">23/02/2023</td>
                        <td className="px-6 py-4 text-center">1000</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <ul className="pagination mt-5 modal-4">
                <li>
                  <a href="#" className="prev">
                    <i className="fa fa-chevron-left"></i>
                    Previous
                  </a>
                </li>
                <li>
                  <a href="#">1</a>
                </li>
                <li>
                  {" "}
                  <a href="#">2</a>
                </li>
                <li>
                  {" "}
                  <a href="#">3</a>
                </li>
                <li>
                  {" "}
                  <a href="#">4</a>
                </li>
                <li>
                  {" "}
                  <a href="#" className="active">
                    5
                  </a>
                </li>

                <li>
                  <a href="#" className="next">
                    {" "}
                    Next
                    <i className="fa fa-chevron-right"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
