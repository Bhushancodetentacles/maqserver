import React from "react";

export default function Footer() {
    return (
        <div>
            <footer className="footer-area z-50 relative">
                <div className="container mx-auto py-24">
            <div className="grid grid-cols-12 gap-4">
                <div className="lg:col-span-3 col-span-12 md:col-span-3 footer1 p-4">
                    <div className="footer-address">
                        <img className="mb-4 h-12" width="150" src="../assets/images/logo.png"  alt="logo"/>
                        <p className="text-sm text-gray-300">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                        <ul className="flex mt-5 gap-4">
                        <li className=" text-gray-300"><i className="text-3xl fa fa-facebook-square" aria-hidden="true"></i></li>
                        <li className="text-gray-300"><i className=" text-3xl fa fa-twitter-square" aria-hidden="true"></i></li>
                        <li className="text-gray-300"><i className=" text-3xl fa fa-telegram" aria-hidden="true"></i></li>
                        <li className="text-gray-300"><i className="text-3xl fa fa-youtube-play" aria-hidden="true"></i></li>
                    </ul>
                    </div>
                </div>
                <div className="lg:col-span-3 col-span-12 md:col-span-3 footer1 lg:mx-auto md:mx-auto p-4">
                    <h6 className="text-xl text-white pb-3">Supports</h6>
                    <ul className="link">
                        <li className="text-sm py-1  text-gray-300"><i className="fa fa-caret-right me-2"></i>Support</li>
                        <li className="text-sm py-1  text-gray-300"><i className="fa fa-caret-right me-2"></i>Tutorial</li>
                        <li className="text-sm py-1  text-gray-300"><i className="fa fa-caret-right me-2"></i>Help</li>
                    </ul>
                </div>
                <div className="lg:col-span-3 col-span-12  md:col-span-3 footer1 lg:mx-auto md:mx-auto  p-4">
                <h6 className="text-xl text-white pb-3">Links</h6>
                <ul className="link">
                        <li className="text-sm py-1  text-gray-300"><i className="fa fa-caret-right me-2"></i>About</li>
                        <li className="text-sm py-1  text-gray-300"><i className="fa fa-caret-right me-2"></i>Privacy Policy</li>
                        <li className="text-sm py-1  text-gray-300"><i className="fa fa-caret-right me-2"></i>User Service Agreement</li>
                        <li className="text-sm py-1  text-gray-300"><i className="fa fa-caret-right me-2"></i>Announcement</li>
                        <li className="text-sm py-1  text-gray-300"><i className="fa fa-caret-right me-2"></i>Sign in</li>
                    </ul>
                </div>
                <div className="lg:col-span-3 md:col-span-3  col-span-12 p-4 lg:mx-auto md:mx-auto">
                <h6 className="text-xl text-white pb-3">Contact Us</h6>
                <ul className="link ">
                        <li className="text-sm py-1 flex text-gray-300">
                            <i className="fa fa-map-marker me-2 text-smflex items-center"></i>
                            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span></li>
                        <li className="text-sm py-1 flex text-gray-300">
                            <i className="fa fa-mobile  me-2 text-smflex items-center"></i>
                            <p> +91 9192762782 </p>
                            </li>
                        <li className="text-sm py-1 flex text-gray-300">
                            <i className="fa fa-envelope  me-2 text-smflex items-center"></i>
                            <p>emai@gmail.com</p>
                            </li>
                       
                    </ul>
                </div>
            
            </div>
        
            </div>
            <div className="grid gird-cols-12 ">
                <div className="col-span-12 p-4 copyright flex text-center justify-center">
                  <span className="text-sm text-gray-200">2023 © MAQ | Developed by CodetentaclesTechnologies</span>
                </div>
            </div>
            </footer>
        </div>
    )
}