



import React from "react";
import Login from "../component/Login";
import Register from "../component/Register";
import Forgetpassword from "../component/forgetpassword";
import Confirmpassword from "../component/Confirmpassword";
import Dashboard from "../component/Dashboard";
import Totalteam from "../component/totalteam";
import Withdrawhistory from "../component/Withdrawhistory";
import Commissionhistory from "../component/commissionhistory";
import Referralteam from "../component/referralteam";
import ProductInfo from "../component/productinfo";
import Activation from "../component/Activation";
import Admindashboard from "../Admin/Admindashboard";
import Userlist from "../Admin/Userlist";
import Requestwithdraw from "../Admin/Requestwithdraw";
import Cartpage from "../Admin/Cartpage";
// import Notification from "../Admin/Notification";
import Report from "../Admin/Report";


const protectedRoutes = [
    { path: "/dashboard", component: <Dashboard/> },
    { path: "/total-team", component: <Totalteam/> },
    { path: "/withdraw-history", component: <Withdrawhistory/> },
    { path: "/commission-history", component: <Commissionhistory/> },
    { path: "/direct-referral", component: <Referralteam/> },
    { path: "/product-info", component: <ProductInfo/> },
    { path: "/activation", component: <Activation/> },
    { path: "/admin/admin-dashboard", component: <Admindashboard/> },
    { path: "/admin/user-list", component: <Userlist/> },
    { path: "/admin/request-withdraw", component: <Requestwithdraw/> },
    { path: "/admin/cart-page", component: <Cartpage/> },
    // { path: "/admin/notification", component: <Notification/> },
    { path: "/admin/reports", component: <Report/> },
]


const publicRoutes = [
    { path: "/login", component: <Login/> },
    { path: "/register", component: <Register/> },
    { path: "/forget-password", component: <Forgetpassword/> },
    { path: "/confirm-password", component: <Confirmpassword/> },
]


export{
    protectedRoutes, publicRoutes
}