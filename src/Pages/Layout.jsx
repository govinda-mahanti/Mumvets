import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Profile from "../Components/Profile";
import { useState } from "react";
import SideBar from "../Components/SideBar";
import bgImage from "../assets/bg.png"; // ✅ Import the image

const Layout = () => {
  const [showProfile, setShowProfile] = useState(false);
  return (
    <div
      className="mt-0 pt-2 overflow-hidden bg-center bg-no-repeat"
      style={{ 
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover", // ✅ Ensures it fits width-wise
      }}
    >
      <div className={` ${showProfile ? "blur-sm" : ""}`}>
        <Navbar setShowProfile={setShowProfile} />
        <Outlet />
        <Footer />
        <SideBar />
      </div>
      {showProfile && <Profile setShowProfile={setShowProfile} />}
    </div>
  );
};

export default Layout;
