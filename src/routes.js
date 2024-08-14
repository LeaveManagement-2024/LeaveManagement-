/*!

=========================================================
* Argon Dashboard React - v1.2.4
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2024 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Index from "views/Index.js";
import Profile from "views/examples/Profile.js";
import Maps from "views/examples/Maps.js";
import Register from "views/examples/Register.js";
import Login from "views/examples/Login.js";
import Leave from "views/examples/Leave/Leave";
import Employees from "views/examples/Employess/Employees";
import Icons from "views/examples/Icons.js";
import Parametre from "views/examples/parametre/parametre";
import AnnualLeave from "views/examples/annualLeave/annualLeave"

var routes = [
  {
    path: "/index",
    name: "الواجهة",
    icon: "ni ni-tv-2 text-primary",
    component: <Index />,
    layout: "/admin",
  },
  {
    path: "/icons",
    name: "Icons",
    icon: "ni ni-planet text-blue",
    component: <Icons />,
    layout: "/admin",
  },
  
  {
    path: "/user-profile",
    name: "الملف الشخصي للمستخدم",
    icon: "ni ni-single-02 text-yellow",
    component: <Profile />,
    layout: "/admin",
  },
  {
    path: "/Leave",
    name: "الرخص",
    icon: "ni ni-bullet-list-67 text-red",
    component: <Leave/>,
    layout: "/admin",
  },
  {
    path: "/Parametre",
    name: "الاعدادات",
    icon: "ni ni-bullet-list-67 text-red",
    component: <Parametre/>,
    layout: "/admin",
  },
  {
    path: "/employees",
    name: "الموظفون",
    icon: "ni ni-bullet-list-67 text-red",
    component: <Employees />,
    layout: "/admin",
  },
  {
    path: "/annualLeave",
    name: "العطل السنوية ",
    icon: "ni ni-bullet-list-67 text-red",
    component: <AnnualLeave />,
    layout: "/admin",
  },
  {
    path: "/login",
    name: "Login",
    icon: "ni ni-key-25 text-info",
    component: <Login />,
    layout: "/auth",
  },
  {
    path: "/register",
    name: "Register",
    icon: "ni ni-circle-08 text-pink",
    component: <Register />,
    layout: "/auth",
  },
];
export default routes;
