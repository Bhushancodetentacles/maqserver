import React, { useEffect, useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer1";
import { Link } from "react-router-dom";
export default function ProductInfo() {
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
              Product Information
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
                      className="svg-icon w-3 h-3 text-gray-100 mx-1"
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
                      to="/product-info"
                      className="ml-1 whitespace-nowrap lg:text-lg md:text-lg text-sm font-medium text-gray-100 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white"
                    >
                      Product Information
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
                          Sr.no
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Name of Business
                        </th>
                        <th scope="col" className="px-6 text-center py-3">
                          Description
                        </th>
                        <th scope="col" className="px-6 text-center py-3">
                          Link
                        </th>
                        <th scope="col" className="px-6 text-center py-3">
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b text-base text-gray-200 ">
                        <th scope="row" className="text-center px-6 py-4 ">
                          1
                        </th>
                        <td className="px-6 py-4">XYZ</td>
                        <td className="px-6 py-4 text-center">
                          Loream ashdkajilja
                        </td>
                        <td className="px-6 py-4 text-center">
                          <Link
                            to=""
                            className=" text-font justify-center flex underline"
                            style={{ color: "rgb(211, 129, 255)" }}
                          >
                            Click Here
                          </Link>
                        </td>
                        <td className=" px-6 py-4 text-center">
                          <a className="btn-sm btn-view px-2  btn">
                            <i
                              className="fa fa-pencil-square-o text-lime-300"
                              aria-hidden="true"
                            ></i>
                            {/* <span className="tooltiptext">पहा</span></i> */}
                          </a>

                          <a className="btn-sm btn-delete text-red-500 px-2  btn">
                            <i className="fa fa-trash-o items-center">
                              {/* <span className="tooltiptext">हटवा</span> */}
                            </i>
                          </a>
                        </td>
                      </tr>
                      <tr className="border-b text-base text-gray-200 ">
                        <th scope="row" className="text-center px-6 py-4 ">
                          2
                        </th>
                        <td className="px-6 py-4">XYZ</td>
                        <td className="px-6 py-4 text-center">
                          Loream ashdkajilja
                        </td>
                        <td className="px-6 py-4 text-center">
                          <Link
                            to=""
                            className=" text-font justify-center flex underline"
                            style={{ color: "rgb(211, 129, 255)" }}
                          >
                            Click Here
                          </Link>
                        </td>
                        <td className=" px-6 py-4 text-center">
                          <a className="btn-sm btn-view px-2  btn">
                            <i
                              className="fa fa-pencil-square-o text-lime-300"
                              aria-hidden="true"
                            ></i>
                            {/* <span className="tooltiptext">पहा</span></i> */}
                          </a>

                          <a className="btn-sm btn-delete text-red-500 px-2  btn">
                            <i className="fa fa-trash-o items-center">
                              {/* <span className="tooltiptext">हटवा</span> */}
                            </i>
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer data={data}></Footer>
    </div>
  );
}
