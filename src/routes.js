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
import Profile from "views/examples/profilePerso/Profile";
import Register from "views/examples/Register.js";
import Login from "views/examples/Login.js";
import Leave from "views/examples/Leave/Leave";
import Employees from "views/examples/Employess/Employees";

import Parametre from "views/examples/parametre/parametre";
import AnnualLeave from "views/examples/annualLeave/annualLeave"
import LeavePerson from "views/examples/Leave/LeavePerson";

var routes = [
  {
    path: "/index",
    name: "الواجهة",
    icon: "ni ni-tv-2 text-primary",
    component: <Index />,
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
    name: " الرخص العامة",
    icon: "ni ni-bullet-list-67 text-red",
    component: <Leave/>,
    layout: "/admin",
  },
  {
    path: "/LeavePerson",
    name: "الرخص الشخصية",
    icon: "ni ni-bullet-list-67 text-red",
    component: <LeavePerson/>,
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
    name: "تسجيل الدخول",
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
