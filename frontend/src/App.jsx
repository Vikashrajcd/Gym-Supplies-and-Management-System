import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Membership from "./pages/Membership";
import Shop from "./pages/Shop";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Services from "./pages/Services";  // ✅ Import Services Page
import ServiceDetail from "./pages/ServiceDetail";  // ✅ Import ServiceDetail Page

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
        <Route path="/services" element={<Services />} />  {/* ✅ Services Page */}
        <Route path="/services/:id" element={<ServiceDetail />} />  {/* ✅ Service Detail Page */}
      </Routes>
    </>
  );
}

export default App;
