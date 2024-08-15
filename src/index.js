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
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import "assets/plugins/nucleo/css/nucleo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/scss/argon-dashboard-react.scss";
import AdminLayout from "layouts/Admin.js";
import AuthLayout from "layouts/Auth.js";
import Departments from "./views/examples/parametre/departement/departement"
import Filieres from "./views/examples/parametre/filiere/filiere"
import Grades from "./views/examples/parametre/grades/grades"
import Posts from "./views/examples/parametre/posts/posts"
import Profiles from "./views/examples/parametre/profiles/profiles"
import PublicHolidays from "./views/examples/parametre/public_holiday/public_holliday"
import Services from "./views/examples/parametre/service/service"


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(

  <BrowserRouter>
    <Routes>
      <Route path="/admin/*" element={<AdminLayout />} />
      <Route path="/auth/*" element={<AuthLayout />} />
      <Route path="/grades" element={<Grades/>} />
      <Route path="/posts" element={<Posts/>} />
      <Route path="/departments" element={<Departments/>} />
      <Route path="/filieres" element={<Filieres/>} />
      <Route path="/services" element={<Services/>} />
      <Route path="/public-holiday" element={<PublicHolidays/>} />
      <Route path="/profiles" element={<Profiles/>} />
      <Route path="*" element={<Navigate to="/admin/index" replace />} />
    </Routes>
  </BrowserRouter>
);
