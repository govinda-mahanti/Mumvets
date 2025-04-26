import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "../assets/logo.svg";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import avtar from "../assets/Avtar (1).svg";
import User from "../assets/User.svg";
import { logOut } from "../redux/authSlice";

const Navbar = ({ setShowProfile }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  
  const token =
    useSelector((state) => state.auth.token) || localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    dispatch(logOut());
    setIsOpen(false);
  };

  const handleProfile = () => {
    setShowProfile(true);
    setIsOpen(false);
  };

  const handleBooking = () => {
    if (token) {
      navigate("/bookingStatus");
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="bg-white shadow-lg py-3 px-6 rounded-full flex justify-between items-center mx-auto max-w-7xl mt-4 relative">
      {/* Logo */}
      <div className="flex items-center">
        <img src={logo} alt="Mumvets Logo" className="h-10 w-auto" />
      </div>

      <ul className="hidden md:flex space-x-6 text-gray-800 font-medium mx-auto">
        <NavLink to="/" className={({ isActive }) => (isActive ? "text-orange-500 font-semibold" : "hover:text-orange-500")}>Home</NavLink>
        <NavLink to="/about" className={({ isActive }) => (isActive ? "text-orange-500 font-semibold" : "hover:text-orange-500")}>About Us</NavLink>
        <NavLink to="/services" className={({ isActive }) => (isActive ? "text-orange-500 font-semibold" : "hover:text-orange-500")}>Our Service</NavLink>
        <button onClick={handleBooking} className="hover:text-orange-500">Tracking</button>
        <NavLink to="/contact" className={({ isActive }) => (isActive ? "text-orange-500 font-semibold" : "hover:text-orange-500")}>Contact</NavLink>
        <a href="https://blogs.mumvets.com/" target="_blank" className="hover:text-orange-500" >Blog</a>
      </ul>

      <div className="hidden md:flex items-center space-x-4">
        {isAuthenticated ? (
          <button onClick={handleProfile} className="cursor-pointer mr-4">
            <img src={User} alt="" className="w-8" />
          </button>
        ) : (
          <NavLink to="/login">
            <button className="bg-orange-200 text-orange-600 px-4 py-2 rounded-full font-medium shadow-md hover:bg-orange-300">Log In</button>
          </NavLink>
        )}
        <a href="tel:9326471539">
          <button className="bg-orange-500 text-white px-5 py-2 rounded-full font-medium shadow-md hover:bg-orange-600">Call On 9326471539</button>
        </a>
      </div>

      <button onClick={() => setIsOpen(true)} className="md:hidden text-gray-800">
        <MenuIcon fontSize="large" />
      </button>

      {/* Mobile Sidebar */}
      {isOpen && <div className="fixed inset-0 bg-black bg-opacity-50 z-50" onClick={() => setIsOpen(false)}></div>}
      <motion.div 
        initial={{ y: "-100%" }} 
        animate={{ y: isOpen ? "0%" : "-100%" }} 
        exit={{ y: "-100%" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed top-0 left-0 w-full bg-white shadow-lg z-50 p-4 rounded-b-2xl"
      >
        <div className="flex justify-between items-center border-b pb-2">
          <h2 className="text-lg font-semibold">Menu</h2>
          <button onClick={() => setIsOpen(false)} className="text-gray-800">
            <CloseIcon fontSize="large" />
          </button>
        </div>

     

        <ul className="flex flex-col items-center space-y-4 p-4 text-gray-800 font-medium">
          {isAuthenticated ? (
            <NavLink onClick={handleProfile}>Profile</NavLink>
          ) : (
            <NavLink to="/login" onClick={() => setIsOpen(false)}>Log In</NavLink>
          )}
          <NavLink to="/" onClick={() => setIsOpen(false)}>Home</NavLink>
          <NavLink to="/about" onClick={() => setIsOpen(false)}>About Us</NavLink>
          <NavLink to="/services" onClick={() => setIsOpen(false)}>Our Service</NavLink>
          <button onClick={handleBooking} className="text-left">Tracking</button>
          <NavLink to="/contact" onClick={() => setIsOpen(false)}>Contact</NavLink>
          <a href="https://blogs.mumvets.com/" target="_blank" className="hover:text-orange-500" >Blog</a>
          <a href="tel:9326471539" onClick={() => setIsOpen(false)}>Call On 9326471539</a>

          {isAuthenticated && (
            <button onClick={handleLogout} className="mt-4 bg-red-500 text-white px-4 py-2 rounded-full font-medium shadow-md hover:bg-red-600 w-full">Logout</button>
          )}
        </ul>
      </motion.div>
    </div>
  );
};

export default Navbar;
