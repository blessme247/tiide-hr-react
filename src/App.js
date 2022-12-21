// EXTERNAL IMPORTS
// import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

// INTERNAL IMPORTS
import "./App.css";
import About from "./Pages/AboutPage/About";
import SignIn from "./Pages/SignInPage/SignIn";
import Homepage from "./Pages/Landing page/Homepage";
import Privacy from "./Pages/privacy policy/Privacy";
import Signup from "./Pages/Signup/Signup";
import EmployeeManagementDashboard from "./Pages/Dashboards/EmployeeManagement/EmployeeManagementDashboard";
import Employerdashboard from "./Pages/Employerdashboard/Employerdashboard";
import Contact from "./Pages/ContactPage/Contact";
import PopusPlayground from "./Pages/Dashboards/EmployeeManagement/playground/PopusPlayground";
import EmployerLeaveManagement from "./Pages/EmployerLeaveManagement/EmployerLeaveManagement";
import Employeedashboard from "./Pages/Employeedashboard/Employeedashboard";

import RoleManagementDashboard from "./Pages/Dashboards/RoleManagement/RoleManagementDashboard";

import EmployeeLeaveManagement from "./Pages/EmployeeLeaveManagement/EmployeeLeavemanagement";
import ManagementLevel from "./Pages/LevelManagement/ManagementLevel";

import ForgotPassword from "./Pages/ForgotPassword/ForgotPassword";
import NewPassword from "./Pages/NewPassword/NewPassword";
import NotificationPage from "./Pages/MainNotificationPage/NotificationPage";


import BusinessRegistrationForm from "./Pages/BusinessProfile/BusinessProfile";
import LevelPreview from "./Pages/LevelManagement/LevelPreview";
import BusinessProfilePage from "./Pages/BusinessProfile/BusinessProfilePage";
// import PendingLeaves from "./Pages/EmployerLeaveManagement/PendingLeaves";


function App() {
  // const [isLoading, setIsLoading] = useState(true);

  // const localToken = JSON.parse(localStorage.getItem("token"));



  return (
    <div className="App">
      <ToastContainer autoClose={2000} />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/employeemanagement"
          element={<EmployeeManagementDashboard />}
        />
        <Route path="/rolemgtdashb" element={<RoleManagementDashboard />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/Privacy" element={<Privacy />} />
        <Route path="/dashboard" element={<Employerdashboard />} />
        <Route path="/employee" element={<Employeedashboard />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/leavemanagement" element={<EmployerLeaveManagement />} />

        <Route path="/leaveapplication" element={<EmployeeLeaveManagement />} />
        <Route path="/levelmanagement" element={<ManagementLevel />} />
        <Route path="/levelformpreview" element={<LevelPreview />} />
        <Route path="/ppg" element={<PopusPlayground />} />
        <Route path="/businessprofile" element={<BusinessRegistrationForm />} />
        <Route path="/businessprofilepage" element={<BusinessProfilePage />} />
        <Route path="/forgotten" element={<ForgotPassword />} />
        <Route path="/confirmpassword" element={<NewPassword />} />
        <Route path="/notifications" element={<NotificationPage />} />
        {/* <Route path="/pendingleaves" element={<PendingLeaves />} /> */}


      </Routes>
    </div>
  );
}

export default App;
