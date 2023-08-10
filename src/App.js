import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import "./css/style.css";
import { protectedRoutes, publicRoutes } from "./routes";
import Authmiddleware from "./AuthPages/AuthLayout";
import NonAuthLayout from "./AuthPages/NonAuthLayout";

function App() {
  return (
    <>
      <Routes>
        {publicRoutes.map((route, idx) => (
          <Route
            path={route.path}
            element={<NonAuthLayout>{route.component}</NonAuthLayout>}
            key={idx}
            exact={true}
          />
        ))}

        {protectedRoutes.map((route, idx) => (
          <Route
            path={route.path}
            element={
              <Authmiddleware>
                {/* <Layout>{route.component}</Layout> */}
                {route.component}
              </Authmiddleware>
            }
            key={idx}
            exact={true}
          />
        ))}
      </Routes>

      <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
          closeButton={
            <button
              style={{
                width: "30px",
                backgroundColor: "inherit",
                border: "none",
                color: "white",
              }}
            >
              X
            </button>
          }
        />
    </>
  );
}

export default App;
