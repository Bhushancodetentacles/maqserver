import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Footer from "./Footer1";
import { Link } from "react-router-dom";
export default function Dashboard() {
  const [data, setData] = useState("");

  const handleDataChange = (newData) => {
    setData(newData);
  };

  console.log("data in dashboard");
  console.log(data);

  return (
    <>
      <Header onDataChanged={handleDataChange}></Header>
      <Sidebar data={data}></Sidebar>
      <div
        className={
          data == false || data == ""
            ? "main-section relative"
            : "main-section-hidden relative"
        }
      >
        <div className="page-content">
          <div className="dashboard-part lg:flex md:flex block lg:justify-between md:justify-between">
            {/* <h3 className="text-white font-extrabold text-3xl">
                            <i className="uil uil-home"></i>
                            Dashboard</h3> */}
            <h3 className="text-4xl">Hi,Welcome back!</h3>

            <nav className="flex breadcrumb" aria-label="Breadcrumb">
              <ol className="inline-flex items-center space-x-1 md:space-x-2">
                <li className="inline-flex items-center">
                  <Link
                    to="/dashboard"
                    className="inline-flex items-center lg:text-lg md:text-lg text-sm                     <Link
                    font-medium hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
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
                      className="w-3 h-3 svg-icon mx-1"
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
                      to="/dashboard"
                      className="ml-1 lg:text-lg md:text-lg text-sm font-medium  hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white"
                    >
                      Dashboard
                    </Link>
                  </div>
                </li>
              </ol>
            </nav>
          </div>
          <div className="main-part">
            <div className="dashboard-intro ">
              <div className="grid grid-cols-12 z-20 gap-4">
                <div className="lg:col-span-5 md:col-span-5 col-span-12 ">
                  <div className="flex rounded text-center mt-2 dashboard-intro1 ">
                    {/* <div className="card-img-part">
                                        <div className="profile-img-wrap">
                                            <img className="inline-block mb-10 img-fluid" src="../assets/images/required/profile.png" alt="user" />
                                        </div>
                                    </div> */}
                    <div className="dashboard-heading text-left pt-4 pb-4 px-2">
                      {/* <h2 className="text-3xl mb-2 text-white">Welcome to MAQ,</h2> */}
                      <h2 className="text-xxl text-white">Ruchita Sonar</h2>
                      <span
                        className="text-xl font-extrabold  leading-tigh text-lime-500"
                        style={{ lineHeight: "1.5" }}
                      >
                        Advisor
                      </span>
                      <div className="flex relative text-white text-lg space-x-1">
                        <span className="">Active</span>
                        <span className="circle"></span>
                      </div>
                    </div>
                    <div className="dashboard-imgs mx-auto">
                      <img
                        src="assets/images/banner-img.png"
                        width="250"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="dashboard-link rounded mt-2 py-3 px-3 ">
                    <h3 className="text-gray-100 text-lg">Referral Link</h3>
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
                <div className="lg:col-span-7 md:col-span-7 col-span-12">
                  <div className="grid lg:grid-cols-2 md:grid-cols-2 mt-2  gap-4">
                    <div className="dashboard-box dashboard-blue w-full flex p-4 rounded">
                      <div className="block justify-between w-full ">
                        <h6 className="text-gray-100  flex items-center text-left text-lg">
                          Total post Count
                        </h6>
                        <h2
                          className="text-white font-extrabold  text-4xl"
                          style={{ lineHeight: "2" }}
                        >
                          2556
                        </h2>
                      </div>
                      <div className="dashboard-img  flex items-center w-1/4">
                        <img src="assets/images/count.png" width=" 80" alt="" />
                      </div>
                    </div>
                    <div className="dashboard-box dashboard-red flex p-4 rounded">
                      <div className="block justify-between w-full">
                        <h6 className="text-gray-100 flex items-center text-lg">
                          Total Team Count
                        </h6>
                        <h2
                          className="text-white font-extrabold  text-4xl"
                          style={{ lineHeight: "2" }}
                        >
                          2556
                        </h2>
                      </div>
                      <div className="dashboard-img  flex items-center w-1/4">
                        <img src="assets/images/team.png" width=" 80" alt="" />
                      </div>
                    </div>
                    <div className="dashboard-box dashboard-green  flex p-4 rounded">
                      <div className="block justify-between w-full">
                        <h6 className="text-gray-100  flex items-center text-lg">
                          Total Earning
                        </h6>
                        <h2
                          className="text-white font-extrabold  text-4xl"
                          style={{ lineHeight: "2" }}
                        >
                          2556
                        </h2>
                      </div>
                      <div className="dashboard-img  flex items-center w-1/4">
                        {/* <img
                          src="../assets/images/earning.png"
                          width="80"
                          alt=""
                        /> */}
                        <img
                          width="96"
                          height="96"
                          src="https://img.icons8.com/external-goofy-solid-kerismaker/96/000000/external-Earning-business-goofy-solid-kerismaker.png"
                          alt="external-Earning-business-goofy-solid-kerismaker"
                        />
                      </div>
                    </div>
                    <div className="dashboard-box dashboard-blue  w-full flex p-4 rounded">
                      <div className="block justify-between w-full ">
                        <h6 className="text-gray-100  flex items-center text-left text-lg">
                          Total Rank Count
                        </h6>
                        <h2
                          className="text-white font-extrabold  text-4xl"
                          style={{ lineHeight: "2" }}
                        >
                          2556
                        </h2>
                      </div>
                      <div className="dashboard-img  flex items-center w-1/4">
                        <img src="assets/images/count.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="dashboard-content mt-5">
              <div className="progress-content rounded mt-5 mb-5 pb-3">
                <div className="grid mb-10 md:grid-cols-3 grid-cols-2 lg:grid-cols-6 gap-3">
                  <div className="card-circle">
                    <div className="box-circle box-1">
                      <div className="percent">
                        <div className="num block">
                          <h2>9</h2>
                          <h5 className="text text-white">AD</h5>
                        </div>
                        {/* <h5 className="text">Senior Vice President</h5> */}
                      </div>
                    </div>
                  </div>
                  <div className="card-circle">
                    <div className="box-circle box-2">
                      <div className="percent">
                        <div className="num block">
                          <h2>9</h2>
                          <h5 className="text text-white">SA</h5>
                        </div>
                        {/* <h5 className="text">Senior Vice President</h5> */}
                      </div>
                    </div>
                  </div>
                  <div className="card-circle">
                    <div className="box-circle box-3">
                      <div className="percent">
                        <div className="num block">
                          <h2>9</h2>
                          <h5 className="text text-white">M</h5>
                        </div>
                        {/* <h5 className="text">Senior Vice President</h5> */}
                      </div>
                    </div>
                  </div>
                  <div className="card-circle">
                    <div className="box-circle box-6">
                      <div className="percent">
                        <div className="num block">
                          <h2>9</h2>
                          <h5 className="text text-white">SM</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-circle">
                    <div className="box-circle box-4">
                      <div className="percent">
                        <div className="num block">
                          <h2>9</h2>
                          <h5 className="text text-white">VP</h5>
                        </div>
                        {/* <h5 className="text">Senior Vice President</h5> */}
                      </div>
                    </div>
                  </div>
                  <div className="card-circle">
                    <div className="box-circle box-5">
                      <div className="percent">
                        <div className="num block">
                          <h2>9</h2>
                          <h5 className="text text-white">SVP</h5>
                        </div>
                        {/* <h5 className="text">Senior Vice President</h5> */}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap space-x-4">
                  <div className="card-square space-x-2">
                    <div className="box-square-1 box-square"></div>
                    <h6 className="text-lg text-white">A-Advisor</h6>
                  </div>
                  <div className="card-square space-x-2">
                    <div className="box-square-2 box-square"></div>
                    <h6 className="text-lg text-white">SA-Senior Advisor</h6>
                  </div>
                  <div className="card-square space-x-2">
                    <div className="box-square-3 box-square"></div>
                    <h6 className="text-lg text-white">M-Manger</h6>
                  </div>
                  <div className="card-square space-x-2">
                    <div className="box-square-6 box-square"></div>
                    <h6 className="text-sm text-white">M-Manger</h6>
                    <h6 className="text-white px-1">SM-Senior Manger</h6>
                  </div>
                  <div className="card-square space-x-2">
                    <div className="box-square box-square-4"></div>
                    <h6 className="text-lg text-white">VP- Vice President</h6>
                  </div>
                  <div className="card-square space-x-2">
                    <div className="box-square box-square-5"></div>
                    <h6 className="text-lg text-white">
                      SVP-Senior Vice President
                    </h6>
                  </div>
                </div>
              </div>
              <div className="gap-4 mt-5 mb-5 pb-5">
                <div className="withdrawhistory mb-5">
                  <h2 className="text-xl text-white mb-3">Withdraw History</h2>
                  <div className="table-content rounded">
                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-base text-gray-50 uppercase  dark:text-gray-400">
                          <tr>
                            <th scope="col" className="px-6 text-center py-3">
                              Sr.No
                            </th>
                            <th scope="col" className="px-6 py-3">
                              Date
                            </th>
                            <th scope="col" className="px-6 text-center py-3">
                              Withdraw Amount
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
                            <td className="px-6 py-4">23/02/2023</td>
                            <td className="px-6 py-4 text-center">20 USDT</td>
                            <td className="px-6 py-4 text-center">
                              {" "}
                              <span className="bg-green-300 text-green-900 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
                                Completed
                              </span>
                            </td>
                          </tr>
                          <tr className="border-b text-base text-gray-200 ">
                            <th scope="row" className="text-center px-6 py-4 ">
                              2
                            </th>
                            <td className="px-6 py-4">04/02/2023</td>
                            <td className="px-6 py-4 text-center">30 USDT</td>
                            <td className="px-6 py-4 text-center">
                              <span className="bg-red-300 text-red-900 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">
                                Pending
                              </span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <Link
                        to="/withdrawhistory"
                        className="text-xs hover:underline text-font justify-end flex underline-offset-2"
                        style={{ color: "rgb(211, 129, 255)" }}
                      >
                        View More
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="commissionhistory">
                  <div className="table-content rounded">
                    <h2 className="text-xl text-white mb-3">
                      Commision History
                    </h2>
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
                              Commission
                            </th>
                            <th scope="col" className="px-6 text-center py-3">
                              Date
                            </th>
                            <th scope="col" className="px-6 text-center py-3">
                              Activate status
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b text-base text-gray-200 ">
                            <th scope="row" className="text-center px-6 py-4 ">
                              1
                            </th>
                            <td className="px-6 py-4">Ruchita</td>

                            <td className="px-6 py-4 text-center">1000</td>
                            <td className="px-6 py-4 text-center">
                              23/02/2023
                            </td>
                            <td className="px-6 py-4 text-center">
                              {" "}
                              <span className="bg-green-300 text-green-900 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
                                yes
                              </span>
                            </td>
                          </tr>
                          <tr className="border-b text-base text-gray-200 ">
                            <th scope="row" className="text-center px-6 py-4 ">
                              1
                            </th>
                            <td className="px-6 py-4">Ruchita</td>

                            <td className="px-6 py-4 text-center">1000</td>
                            <td className="px-6 py-4 text-center">
                              23/02/2023
                            </td>
                            <td className="px-6 py-4 text-center">
                              <span className="bg-green-300 text-green-900 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
                                yes
                              </span>
                            </td>
                          </tr>
                          <tr className="border-b text-base text-gray-200  ">
                            <th scope="row" className="text-center px-6 py-4 ">
                              1
                            </th>
                            <td className="px-6 py-4">Ruchita</td>

                            <td className="px-6 py-4 text-center">1000</td>
                            <td className="px-6 py-4 text-center">
                              23/02/2023
                            </td>
                            <td className="px-6 py-4 text-center">
                              <span className="bg-green-300 text-green-900 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
                                yes
                              </span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <Link
                      to="/commisionhistory"
                      className="text-xs hover:underline text-font justify-end flex underline-offset-2"
                      style={{ color: "rgb(211, 129, 255)" }}
                    >
                      View More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer data={data}></Footer>
    </>
  );
}
