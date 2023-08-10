import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer1";

import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";
export default function Totalteam() {
  const [Open, setIsOpen] = useState(false);
  const [Open1, setIsOpen1] = useState(false);
  const [Open2, setIsOpen2] = useState(false);
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
            
              Total Team
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
                      to="/total-team"
                      className="ml-1 whitespace-nowrap lg:text-lg md:text-lg text-sm font-medium text-gray-100 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white"
                    >
                      Total team
                    </Link>
                  </div>
                </li>
              </ol>
            </nav>
          </div>
          <div className="main-part">
            <div className="team-content">
              <div className="team-tree">
                <div className="body genealogy-body genealogy-scroll">
                  <div className="genealogy-tree">
                    <ul>
                      <li>
                        <a
                          href="javascript:void(0);"
                          onClick={() => setIsOpen(!Open)}
                        >
                          <div className="member-view-box">
                            <div className="member-image">
                              
                              <div className="member-details">
                                <h3 className="text-gray-50 text-lg  font-bold">
                                  Ruchita Sonar
                                </h3>
                                <span className="text-lime-400">
                                  Senior Advisor
                                </span>
                              </div>
                            </div>
                          </div>
                        </a>
                        {Open && (
                          <ul className="advisorgrp3">
                            <li>
                              <a
                                href="javascript:void(0);"
                                onClick={() => setIsOpen1(!Open1)}
                              >
                                <div className="member-view-box">
                                  <div className="member-image">
                                    <img
                                      src="../assets/images/user.png"
                                      className="mb-2"
                                      width="40"
                                      alt=""
                                    />
                                    <div className="member-details">
                                      <h3 className="text-gray-50 text-sm  font-bold">
                                        Ruchita Sonar
                                      </h3>
                                      <span className="text-lime-400">
                                        Advisor
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </a>
                              {Open1 && (
                                <ul className="advisorgrp">
                                  <li>
                                    <a
                                      href="javascript:void(0);"
                                      onClick={() => setIsOpen(!Open)}
                                    >
                                      <div className="member-view-box">
                                        <div className="member-image">
                                          <img
                                            src="../assets/images/user.png"
                                            className="mb-2"
                                            width="40"
                                            alt=""
                                          />
                                          <div className="member-details">
                                            <h3 className="text-gray-50 text-sm  font-bold">
                                              Ruchita Sonar
                                            </h3>
                                            <span className="text-lime-400">
                                              Advisor
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="javascript:void(0);">
                                      <div className="member-view-box">
                                        <div className="member-image">
                                          <img
                                            src="../assets/images/user.png"
                                            className="mb-2"
                                            width="40"
                                            alt=""
                                          />
                                          <div className="member-details">
                                            <h3 className="text-gray-50 text-sm  font-bold">
                                              Ruchita Sonar
                                            </h3>
                                            <span className="text-lime-400">
                                              Advisor
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="javascript:void(0);">
                                      <div className="member-view-box">
                                        <div className="member-image">
                                          <img
                                            src="../assets/images/user.png"
                                            className="mb-2"
                                            width="40"
                                            alt=""
                                          />
                                          <div className="member-details">
                                            <h3 className="text-gray-50 text-sm  font-bold">
                                              Ruchita Sonar
                                            </h3>
                                            <span className="text-lime-400">
                                              Advisor
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="javascript:void(0);">
                                      <div className="member-view-box">
                                        <div className="member-image">
                                          <img
                                            src="../assets/images/user.png"
                                            className="mb-2"
                                            width="40"
                                            alt=""
                                          />
                                          <div className="member-details">
                                            <h3 className="text-gray-50 text-sm  font-bold">
                                              Ruchita Sonar
                                            </h3>
                                            <span className="text-lime-400">
                                              Advisor
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="javascript:void(0);">
                                      <div className="member-view-box">
                                        <div className="member-image">
                                          <img
                                            src="../assets/images/user.png"
                                            className="mb-2"
                                            width="40"
                                            alt=""
                                          />
                                          <div className="member-details">
                                            <h3 className="text-gray-50 text-sm  font-bold">
                                              Ruchita Sonar
                                            </h3>
                                            <span className="text-lime-400">
                                              Advisor
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    </a>
                                  </li>
                                </ul>
                              )}
                            </li>
                            <li>
                              <a
                                href="javascript:void(0);"
                                onClick={() => setIsOpen2(!Open2)}
                              >
                                <div className="member-view-box">
                                  <div className="member-image">
                                    <img
                                      src="../assets/images/user.png"
                                      className="mb-2"
                                      width="40"
                                      alt=""
                                    />
                                    <div className="member-details">
                                      <h3 className="text-gray-50 text-sm  font-bold">
                                        Ruchita Sonar
                                      </h3>
                                      <span className="text-lime-400">
                                        Advisor
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </a>
                              {Open2 && (
                                <ul className="advisorgrp1">
                                  <li>
                                    <a
                                      href="javascript:void(0);"
                                      onClick={() => setIsOpen(!Open)}
                                    >
                                      <div className="member-view-box">
                                        <div className="member-image">
                                          <img
                                            src="../assets/images/user.png"
                                            className="mb-2"
                                            width="40"
                                            alt=""
                                          />
                                          <div className="member-details">
                                            <h3 className="text-gray-50 text-sm  font-bold">
                                              Ruchita Sonar
                                            </h3>
                                            <span className="text-lime-400">
                                              Advisor
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="javascript:void(0);">
                                      <div className="member-view-box">
                                        <div className="member-image">
                                          <img
                                            src="../assets/images/user.png"
                                            className="mb-2"
                                            width="40"
                                            alt=""
                                          />
                                          <div className="member-details">
                                            <h3 className="text-gray-50 text-sm  font-bold">
                                              Ruchita Sonar
                                            </h3>
                                            <span className="text-lime-400">
                                              Advisor
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="javascript:void(0);">
                                      <div className="member-view-box">
                                        <div className="member-image">
                                          <img
                                            src="../assets/images/user.png"
                                            className="mb-2"
                                            width="40"
                                            alt=""
                                          />
                                          <div className="member-details">
                                            <h3 className="text-gray-50 text-sm  font-bold">
                                              Ruchita Sonar
                                            </h3>
                                            <span className="text-lime-400">
                                              Advisor
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="javascript:void(0);">
                                      <div className="member-view-box">
                                        <div className="member-image">
                                          <img
                                            src="../assets/images/user.png"
                                            className="mb-2"
                                            width="40"
                                            alt=""
                                          />
                                          <div className="member-details">
                                            <h3 className="text-gray-50 text-sm  font-bold">
                                              Ruchita Sonar
                                            </h3>
                                            <span className="text-lime-400">
                                              Advisor
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="javascript:void(0);">
                                      <div className="member-view-box">
                                        <div className="member-image">
                                          <img
                                            src="../assets/images/user.png"
                                            className="mb-2"
                                            width="40"
                                            alt=""
                                          />
                                          <div className="member-details">
                                            <h3 className="text-gray-50 text-sm  font-bold">
                                              Ruchita Sonar
                                            </h3>
                                            <span className="text-lime-400">
                                              Advisor
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    </a>
                                  </li>
                                </ul>
                              )}
                            </li>
                            <li>
                              <a href="javascript:void(0);">
                                <div className="member-view-box">
                                  <div className="member-image">
                                    <img
                                      src="../assets/images/user.png"
                                      className="mb-2"
                                      width="40"
                                      alt=""
                                    />
                                    <div className="member-details">
                                      <h3 className="text-gray-50 text-sm  font-bold">
                                        Ruchita Sonar
                                      </h3>
                                      <span className="text-lime-400">
                                        Advisor
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </a>
                            </li>
                            <li>
                              <a href="javascript:void(0);">
                                <div className="member-view-box">
                                  <div className="member-image">
                                    <img
                                      src="../assets/images/user.png"
                                      className="mb-2"
                                      width="40"
                                      alt=""
                                    />
                                    <div className="member-details">
                                      <h3 className="text-gray-50 text-sm  font-bold">
                                        Ruchita Sonar
                                      </h3>
                                      <span className="text-lime-400">
                                        Advisor
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </a>
                            </li>
                            <li>
                              <a href="javascript:void(0);">
                                <div className="member-view-box">
                                  <div className="member-image">
                                    <img
                                      src="../assets/images/user.png"
                                      className="mb-2"
                                      width="40"
                                      alt=""
                                    />
                                    <div className="member-details">
                                      <h3 className="text-gray-50 text-sm  font-bold">
                                        Ruchita Sonar
                                      </h3>
                                      <span className="text-lime-400">
                                        Advisor
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </a>
                            </li>
                          </ul>
                        )}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
