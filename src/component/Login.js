import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import OtpInput from "react-otp-input";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { RotatingLines } from "react-loader-spinner";
import CryptoJS from 'crypto-js';

import { post } from "../services/apiServices";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#000",
  border: "2px solid #6c571d",
  boxShadow: 24,
  p: 4,
};
export default function Login() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [otp, setOtp] = useState("");
  const [open, setOpen] = React.useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingOTP, setIsLoadingOTP] = useState(false);

  const cryptoToken = process.env.REACT_APP_CRYPTO_SECRET

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    // You can prevent the modal from closing here
    // or handle any other custom behavior when the modal is closed.
  };

  const validation = useFormik({
    enableReinitialize: true,

    initialValues: {
      email: "",
      password: "",
    },

    validationSchema: Yup.object({
      email: Yup.string()
        .min(2, "Please enter atleast two letters ")
        .required("Please enter the Email Id / Username")
        .matches(
          /^(?=.*[a-zA-Z\u0900-\u097F])[a-zA-Z0-9\u0900-\u097F\s!@#$%^&*()-=_+[\]{}|;':",.<>/?]+$/,
          {
            message: "Only digits are not allowed",
          }
        ),
      password: Yup.string()
        .min(8, "length of the password should be atleast 8 digits")
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[a-zA-Z\d@$!%*?&]+$/,
          "Password must contain at least 1 lowercase, 1 uppercase, 1 digit, and 1 special character"
        )
        .required("Please enter the Password"),
    }),
    onSubmit: async (values) => {
      try {
        const data = {
          userName: values.email,
          password: values.password,
        };

        setIsLoading(true);
        const response = await post(`/user/login`, data);
        setIsLoading(false);

        if (response && response.status == 200) {
          localStorage.setItem("token", response.data.data.tokenId);
          setOpen(true);
        }
      } catch (error) {
        setIsLoading(false);
        // toast.error(error.response.data.status)
        console.log(error);
      }
    },
  });

  // to verify otp start

  const verifyOtp = async () => {
    try {
      const otpData = {
        email: validation.values.email,
        otp: otp,
      };
      console.log(otpData);
      setIsLoadingOTP(true);
      const response = await post(`/User/emailVerificationByOtp`, otpData);
      setIsLoadingOTP(false);
      setOtp("");
      if (response.status == 200) {
        var ciphertext = CryptoJS.AES.encrypt(response.data.data.email, cryptoToken).toString();
        localStorage.setItem("data", ciphertext);
        toast.success("Login successfull")
        navigate("/dashboard");
      }
    } catch (error) {
      setIsLoadingOTP(false);
      console.log(error);
      // toast.error(error.response.data.message)
    }
    setIsLoadingOTP(true);
    // Simulating OTP verification with a timeout (replace with your actual verification logic)
   
  };
  // to verify otp end

  return (
    <div>
      <section className="signin-section " style={{ padding: "4rem 0" }}>
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-2">
            <div className="img-part mx-auto">
              <img src="assets/images/mobile.png" width="450" alt="" />
            </div>

            <div className="w-full mx-auto lg:max-w-md md:max-w-md flex flex-col justify-center ">
              <div className="img-logo m-auto flex justify-content items-center">
                <img
                  src="assets/images/logo.png"
                  className="m-auto"
                  alt=""
                  width="180"
                />
              </div>
              <h2 className="lg:text-3xl md:text-3xl text-2xl  font-bold text-white  py-5 px-6 text-center tracking-wider">
                Login to Dashboard
              </h2>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  validation.handleSubmit();
                  return false;
                }}
                className="login-form shadow-md rounded-lg  mb-4"
              >
                <div className="px-8 pt-6 pb-8">
                  <div className="mb-4 form-group">
                    <div
                      className="flex flex-wrap   bg-transparent  items-stretch w-full  relative items-center"
                      style={{
                        border: "none",
                        borderBottom: "1px solid #9381ff",
                        height: "50px",
                      }}
                    >
                      <div className="flex -mr-px justify-center w-30 p-3">
                        <span className="flex items-center leading-normal rounded rounded-r-none text-2xl text-gray-400">
                          <i className="input-icon uil uil-at"></i>
                        </span>
                      </div>

                      <input
                        type="text"
                        id="email"
                        name="email"
                        className="flex-shrink peer flex-grow text-white flex-auto pl-8 pr-3 bg-transparent leading-normal w-px flex-1 h-10  rounded rounded-l-none self-center relative 
                                                 text-base outline-none"
                        placeholder="Email Id / Username"
                        autoComplete="off"
                        onChange={validation.handleChange}
                        onBlur={validation.handleBlur}
                        value={validation.values.email}
                      />
                    </div>
                    {validation.touched.email && validation.errors.email ? (
                      <span className="error">{validation.errors.email}</span>
                    ) : null}
                  </div>

                  <div className="mb-4">
                    <div
                      className="flex flex-wrap   bg-transparent  items-stretch w-full  relative items-center"
                      style={{
                        border: "none",
                        borderBottom: "1px solid #9381ff",
                        height: "50px",
                      }}
                    >
                      <div className="flex -mr-px justify-center w-30 p-3">
                        <span className="flex items-center leading-normal rounded rounded-r-none text-2xl text-gray-400">
                          <i className="input-icon uil uil-lock-alt"></i>
                        </span>
                      </div>
                      <input
                        type={showPassword ? "text" : "password"}
                        id="password"
                        name="password"
                        className="flex-shrink flex-grow text-white flex-auto pl-8 pr-3 bg-transparent leading-normal w-px flex-1 h-10  rounded rounded-l-none self-center relative 
                       text-base outline-none"
                        placeholder="Password"
                        autoComplete="off"
                        onChange={validation.handleChange}
                        onBlur={validation.handleBlur}
                        value={validation.values.password}
                      />

                      <div className="flex">
                        <span
                          onClick={() => setShowPassword(!showPassword)}
                          className="flex items-center leading-normal bg-transparent  rounded rounded-l-none border-0 px-3 whitespace-no-wrap text-gray-400"
                        >
                          {showPassword ? (
                            <i className="text-white fa fa-eye"></i>
                          ) : (
                            <i className="text-white fa fa-eye-slash"></i>
                          )}
                        </span>
                      </div>
                    </div>
                    {validation.touched.password &&
                    validation.errors.password ? (
                      <span className="error">
                        {validation.errors.password}
                      </span>
                    ) : null}
                  </div>
                  <Link
                    to="/forget-password"
                    className="flex hover:underline justify-end mb-4 align-baseline font-light text-xs"
                    style={{ color: "#9381ff" }}
                  >
                    Forgot Password?
                  </Link>
                  <div className="block ">
                    <button
                      className="new-reg w-full py-3 px-6"
                      type="submit"
                      disabled={isLoading}
                    >
                      {isLoading ? "Submitting" : "Submit"}
                      {isLoading && (
                        <div style={{ color: "green" }}>
                          <RotatingLines
                            strokeColor="green"
                            strokeWidth="5"
                            animationDuration="0.75"
                            width="20"
                            visible={true}
                          />
                        </div>
                      )}
                    </button>

                    <p className="text-gray-400  mt-6 text-sm text-center">
                      Don't Have an Account ?
                      <Link
                        to="/Register"
                        className="inline-block hover:underline px-2 align-baseline font-medium text-sm text-sky-600 hover:text-blue-800"
                        style={{ color: "#9381ff" }}
                      >
                        Register
                      </Link>
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        // onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              <h3 className="text-white info-text text-center text-3xl mb-2">
                OTP VERIFICATION
              </h3>
              <Link onClick={()=>setOpen(false)} className="text-red-500 close-btn absolute  top-0 right-2">&times;</Link>
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              <p className="info  text-lime-300 text-sm mb-1 text-center">
                An otp has been sent to your registered email address
              </p>
              <p className="msg  text-gray-100 text-base text-center">
                Please enter OTP to verify
              </p>
              <div className="otp-input-fields">
                <OtpInput
                  value={otp}
                  onChange={setOtp}
                  numInputs={6}
                  renderSeparator={<span>-</span>}
                  renderInput={(props) => <input {...props} />}
                />
              </div>
              
              <button className="new-reg py-3 px-6 " onClick={verifyOtp} disabled={isLoadingOTP}>
                {isLoadingOTP ? "Verifying OTP" : "Verify OTP"}
                {isLoadingOTP && (
                  <div style={{ color: "green" }}>
                    <RotatingLines
                      strokeColor="green"
                      strokeWidth="5"
                      animationDuration="0.75"
                      width="20"
                      visible={true}
                    />
                  </div>
                )}
              </button>
              <Link  to="#"
                        className="flex justify-center items-center py-2 hover:underline px-2 align-baseline font-medium text-sm text-sky-600 hover:text-blue-800"
                        style={{ color: "#9381ff" }}
                      >
                        Resend Otp
                      </Link>
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
