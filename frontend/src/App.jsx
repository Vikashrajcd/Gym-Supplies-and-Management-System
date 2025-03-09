import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Membership from "./pages/Membership";
import Shop from "./pages/Shop";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import ForgotPassword from "./pages/ForgotPassword";
import Services from "./pages/Services";  
import ServiceDetail from "./pages/ServiceDetail";  

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/services" element={<Services />} />  
        <Route path="/services/:id" element={<ServiceDetail />} />  
      </Routes>
    </>
  );
}

export default App;
