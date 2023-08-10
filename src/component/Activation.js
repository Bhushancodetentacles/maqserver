import React, { useEffect, useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer1";
import { Link } from "react-router-dom";
export default function Activation() {
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
            <h3 className="text-white font-extrabold text-3xl">Activation</h3>

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
                      className="w-3 svg-icon h-3 text-gray-100 mx-1"
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
                      to="/activation"
                      className="ml-1 whitespace-nowrap lg:text-lg md:text-lg text-sm font-medium text-gray-100 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white"
                    >
                      Activation
                    </Link>
                  </div>
                </li>
              </ol>
            </nav>
          </div>
          <div className="main-part ">
            <div className="container">
              <div className="activate-content rounded ">
                {/* <div className="grid grid-cols-2  gap-2">
                                <div>
                                    <label className="text-white text-xl">Select Symbol</label>
                                    <input type="text" className="referral-input1 relative" placeholder="100 USDT" />
                                    
                                </div>
                                <div>
                                    <label className="text-white text-xl">Chain Name</label>
                                    <input type="text" className="referral-input1 relative" placeholder="100 USDT" />
                                    
                                </div>
                            </div> */}
                <div className="grid lg:grid-cols-2 md:grid-cols-2">
                  <div>
                    <label className="text-white text-xl">Depsoit Amount</label>
                    <img
                      className="my-2"
                      src="../assets/images/QR.png"
                      width="150"
                      alt=""
                    />
                    <div className="flex relative items-center">
                      <input
                        type="text"
                        className="referral-input relative"
                        placeholder="referral Link"
                      />
                      <button className="Copy-btn text-white px-4">Copy</button>
                    </div>
                  </div>
                </div>
                <div className="mt-3">
                  <h6 className="text-white text-lg ">Precaution</h6>
                  <ol className="list-decimal lg:px-6 md:px-6 px-4">
                    <li className="text-gray-400 px-2 py-1 font-thin text-sm ">
                      Please do not deposit any non-USDT assets to the address
                      above.
                    </li>
                    <li className="text-gray-400  px-2 py-1 font-thin text-sm ">
                      Ensure you use BEP20 to deposit, or assets might be lost.
                    </li>
                    <li className="text-gray-400  px-2 py-1 font-thin text-sm">
                      The deposit may take a short while to arrive.
                    </li>
                    <li className="text-gray-400  px-2 py-1 font-thin text-sm">
                      Funds may not be withdrawn from inactive accounts.
                    </li>
                  </ol>
                </div>
              </div>

              <div className="table-content rounded mt-10 ">
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
                          Date
                        </th>
                        <th scope="col" className="px-6 text-center py-3">
                          Activate Amount
                        </th>
                        <th scope="col" className="px-6 text-center py-3">
                          Earning Amount
                        </th>
                        <th scope="col" className="px-6 text-center py-3">
                          Status
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b text-base text-gray-200 ">
                        <th scope="row" className="text-center px-6 py-4 ">
                          1
                        </th>
                        <td className="px-6 py-4">23/02/2020</td>
                        <td className="px-6 py-4 text-center">100 USDT</td>
                        <td className="px-6 py-4 text-center">300 USDT</td>
                        <td className=" px-6 py-4 text-center">  <span className="bg-green-300 text-green-900 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">Completed</span></td>
                      </tr>
                      <tr className="border-b text-base text-gray-200 ">
                        <th scope="row" className="text-center px-6 py-4 ">
                          2
                        </th>
                        <td className="px-6 py-4">23/02/2020</td>
                        <td className="px-6 py-4 text-center">100 USDT</td>
                        <td className="px-6 py-4 text-center">300 USDT</td>
                        <td className=" px-6 py-4 text-center">
                        <span className="bg-red-300 text-red-900 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">Pending</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                  </div>
              <ul className="pagination mt-5 modal-4 mb-10">
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
      <Footer data={data}></Footer>
    </div>
  );
}