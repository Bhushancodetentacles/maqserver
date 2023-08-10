import React, { useState } from "react";
import { Button } from "reactstrap";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import OtpInput from "react-otp-input";
import Typography from "@mui/material/Typography";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { RotatingLines } from "react-loader-spinner";
import CryptoJS from 'crypto-js';



import { post } from "../services/apiServices";
import { valid } from "semver";
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
export default function Forgetpassword() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [open, setOpen] = React.useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [otpReceived, setOtpReceived] = useState(false)
  const [otpVerified, setOtpVerified] = useState(false)
  const [isLoadingOTP, setIsLoadingOTP] = useState(false);

  const cryptoToken = process.env.REACT_APP_CRYPTO_SECRET

  // const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [otp, setOtp] = useState("");
  // formik start

  const validation = useFormik({
    enableReinitialize: true,

    initialValues: {
      email: "",
      otp: "",
      password: "",
      confirmPassword: "",
    },

    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Please enter the email"),
      password: Yup.string()
        .min(8, "length of the password should be atleast 8 digits")
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[a-zA-Z\d@$!%*?&]+$/,
          "Password must contain at least 1 lowercase, 1 uppercase, 1 digit, and 1 special character"
        )
        .required("Please enter the password"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Please confirm your password"),
    }),
    onSubmit: async (values) => {
      try {


        const data = {
          email: values.email,
          newPassword: values.password,
          confirmPassword: values.confirmPassword,
        };

        console.log(data)

        if (otpOk) {
          setIsLoading(true)
          const response = await post(`/User/changePassword`, data);
          // localStorage.setItem("token", response.data.data.tokenId);
          setIsLoading(false)
          console.log(response);
          navigate("/dashboard");
        }else{
          setIsLoading(false)
          toast.error("Please verify email using OTP")
        }
      } catch (error) {
        // toast("error.response.data.message");
        setIsLoading(false)
        toast.error(error.response.data.status)
        console.log(error);
      }
    },
  });

  // formik end

  // to get Otp start

  const emailData = {
    email: validation.values.email,
  };

  const getOpt = async () => {
    try {
      setOtpReceived(true)
      const response = await post(`/User/forgetPassword`, emailData);
      if(response.status == 200){
        setOtpReceived(false)
        setOpen(true);
      }
    } catch (error) {
      setOtpReceived(false)
      console.log(error);
      toast.error(error.response.data.status)
    }
  };
  // to get Otp end

  // to verify otp start

  const [otpOk, setOtpOk] = useState(false);
  const verifyOtp = async () => {


    try {
      const otpData = {
        email: validation.values.email,
        otp: otp,
      };
      console.log(otpData);
      setOtpOk(false);
      setIsLoadingOTP(true)
      const response = await post(`/User/emailVerificationByOtp`, otpData);
      setIsLoadingOTP(false)
      setOtp("")
      setOpen(false);
      if(response.status == 200){
        var ciphertext = CryptoJS.AES.encrypt(response.data.data.email, cryptoToken).toString();
        localStorage.setItem("data", ciphertext);
        setOtpVerified(true)
        setOtpOk(true);
      }
    } catch (error) {
      setIsLoadingOTP(false)
      // toast.error(error.response.data.message)
      console.log(error)
    }
  };
  // to verify otp end

  console.log(validation.values)
  console.log(validation.errors)

  return (
    <div>
      <section className="signin-section">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-2">
          
            <div className="img-part mx-auto">
              <img
                src="assets/images/forgetpassword.png"
                width="550"
                alt=""
              />
            </div>
            <div className="w-full mx-auto lg:max-w-md md:max-w-md flex flex-col justify-center">
              <div className="img-logo mb-2 m-auto flex justify-content items-center">
                <img
                  src="assets/images/logo.png"
                  className="m-auto"
                  alt=""
                  width="180"
                />
              </div>
              <form
                className="login-form shadow-md rounded-lg  mb-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  validation.handleSubmit();
                  return false;
                }}
              >
                <h2 className="lg:text-3xl md:text-3xl text-2xl font-bold  text-white  py-5 px-6 text-center tracking-wider">
                  Forget Password
                </h2>
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
                        autoComplete="off"
                        type="email"
                        className="flex-shrink flex-grow text-white flex-auto pl-8 pr-3 bg-transparent leading-normal w-px flex-1 h-10  rounded rounded-l-none  self-center relative 
                         text-base outline-none"
                        placeholder="Email Id"
                        name="email"
                        id="email"
                        onChange={validation.handleChange}
                        onBlur={validation.handleBlur}
                        value={validation.values.email}
                      />

                      {otpReceived ? null : otpVerified ? <div className="isVerified text-white">Verified</div> :
                      <button
                      onClick={getOpt}
                      className="btn-otp"
                      type="button">
                     Get Otp
                      <div className="arrow-wrapper">
                          <div class="arrow"></div>
                  
                      </div>
                  </button>
                      
                      }
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
                        autoComplete="off"
                        type={showPassword ? "text" : "password"}
                        className="flex-shrink flex-grow text-white flex-auto pl-8 pr-3 bg-transparent leading-normal w-px flex-1 h-10  rounded rounded-l-none self-center relative 
                       text-base outline-none"
                        placeholder="Password"
                        name="password"
                        id="password"
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
                        autoComplete="off"
                        type={showConfirmPassword ? "text" : "password"}
                        className="flex-shrink flex-grow text-white flex-auto pl-8 pr-3 bg-transparent leading-normal w-px flex-1 h-10  rounded rounded-l-none self-center relative 
                       text-base outline-none"
                        placeholder="Confirm Password"
                        name="confirmPassword"
                        id="confirmPassword"
                        onChange={validation.handleChange}
                        onBlur={validation.handleBlur}
                        value={validation.values.confirmPassword}
                      />

                      <div className="flex">
                        <span
                          onClick={() =>
                            setShowConfirmPassword(!showConfirmPassword)
                          }
                          className="flex items-center leading-normal bg-transparent  rounded rounded-l-none border-0 px-3 whitespace-no-wrap text-gray-400"
                        >
                          {showConfirmPassword ? (
                            <i className="text-white fa fa-eye"></i>
                          ) : (
                            <i className="text-white fa fa-eye-slash"></i>
                          )}
                        </span>
                      </div>
                    </div>
                    {validation.touched.confirmPassword &&
                    validation.errors.confirmPassword ? (
                      <span className="error">
                        {validation.errors.confirmPassword}
                      </span>
                    ) : null}
                  </div>
                  <div className="block ">
                    <button className="new-reg  w-full py-3 px-6" type="submit" disabled={isLoading}>
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
                    <p className="text-gray-400 mt-3 text-sm text-center">
                      Have account?
                      <Link
                        to="/login"
                        className="hover:underline inline-block px-2 align-baseline font-medium text-sm text-sky-600 hover:text-blue-800"
                        style={{ color: "#9381ff" }}
                      >
                        Login
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
              <Link onClick={()=>setOpen(false)} className="close-btn text-red-500 absolute  top-0 right-2">&times;</Link>
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
              <button className="new-reg py-3 px-6" onClick={verifyOtp} type="button" disabled={isLoadingOTP}>
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
