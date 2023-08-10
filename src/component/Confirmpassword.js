import React from 'react';


import { Link } from 'react-router-dom';
export default function Confirmpassword() {
  return (
    <div>
       
        <section className='signin-section'>
        <div className='container mx-auto'>
          <div className="w-full mx-auto lg:max-w-md md:max-w-md">
            <form className="bg-white shadow-md rounded-lg  mb-4">
              <h2 className='text-3xl text-transparent  bg-clip-text bg-gradient-to-r to-amber-200 from-amber-400 py-5 px-6 text-center tracking-wider font-bold'>Confirm Password</h2>
              <div className='px-8 pt-6 pb-8'>
              
                <div className="mb-4">
                <div className="flex flex-wrap bg-slate-700 items-stretch w-full  relative h-15 bg-slate-700 items-center rounded mb-6 ">
                    <div className="flex -mr-px justify-center w-15 p-3">
                      <span
                        className="flex items-center leading-normal rounded rounded-r-none text-2xl text-gray-400"
                      ><i className="input-icon fa fa-envelope"></i>
                      </span>
                    </div>
                    <input
                      type="email"
                      className="flex-shrink flex-grow text-white flex-auto px-3 bg-slate-700 leading-normal w-px flex-1 h-10  rounded rounded-l-none self-center relative  text-base outline-none"
                      placeholder="Enter Email"
                    />
                  
                  </div>
                
                </div>
                <div className="mb-4">
                <div className="flex flex-wrap bg-slate-700 items-stretch w-full  relative h-15 bg-slate-700 items-center rounded mb-6 ">
                    <div className="flex -mr-px justify-center w-15 p-3">
                      <span
                        className="flex items-center leading-normal rounded rounded-r-none text-2xl text-gray-400"
                      ><i className="input-icon fa fa-lock"></i>
                      </span>
                    </div>
                    <input
                      type="password"
                      className="flex-shrink flex-grow text-white flex-auto px-3 bg-slate-700 leading-normal w-px flex-1 h-10  rounded rounded-l-none self-center relative  text-base outline-none"
                      placeholder="Password"
                    />
                 
                  </div>
                </div>
                <div className="mb-4">
                <div className="flex flex-wrap bg-slate-700 items-stretch w-full  relative h-15 bg-slate-700 items-center rounded mb-6 ">
                    <div className="flex -mr-px justify-center w-15 p-3">
                      <span
                        className="flex items-center leading-normal rounded rounded-r-none text-2xl text-gray-400"
                      ><i className="input-icon fa fa-lock"></i>
                      </span>
                    </div>
                    <input
                      type="password"
                      className="flex-shrink flex-grow text-white flex-auto px-3 bg-slate-700 leading-normal w-px flex-1 h-10  rounded rounded-l-none self-center relative  text-base outline-none"
                      placeholder="Confirm Password"
                    />
                   
                  </div>
                </div>
                <div className="block ">
                  <button className="button-reg w-full  text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                 Finished
                  </button>
                  {/* <Link to="Forgetpasword"  className="inline-block align-baseline font-light text-xs text-sky-600 hover:text-blue-800" >
                    Forgot Password?
                  </Link> */}
                
                </div>
              </div>
            </form>
            </div>
            </div>
            </section>
  

    </div>
  )
}