import React from "react";
import logo from "../assets/logo.svg";
import fb from "../assets/footer/fb.png";
import insta from "../assets/footer/insta.png";
import tiktok from "../assets/footer/tiktok.png";

const Footer = () => {
  return (
    <footer className="relative text-gray-800">
      <div className="w-full bg-orange-400 rounded-t-[10%] md:rounded-t-[45%]">
        <div className="max-w-7xl mx-auto text-center relative z-10 p-6">
          {/* Logo */}
          <img
            src={logo}
            alt="Mumvets Logo"
            className="mx-auto h-16 md:h-[120px]"
          />

          <h2 className="text-lg font-semibold text-white underline">
            Join an Online Community of 1000+ Pet Parents in Mai
          </h2>

          <div className="flex flex-wrap justify-evenly gap-4 mt-6">
            <div className="flex flex-col items-center md:items-start w-full md:w-1/3">
              <p className="mt-6 text-lg font-semibold text-center md:text-left">
                Take care of your pets !
              </p>
              <p className="text-sm text-gray-700">Befriend Us</p>

              <div className="flex justify-center space-x-4 mt-2">
                <img src={fb} alt="" className="w-8" />
                <img src={tiktok} alt="" className="w-8" />
                <img src={insta} alt="" className="w-8" />
              </div>
              <p className="mt-6 text-sm text-center md:text-start hidden md:flex">
                Powered By Virtualsphere Technologies Pvt Ltd
              </p>
            </div>

            <button
              className="bg-gray-500 text-white px-6 py-2 rounded-3xl shadow-md mt-3 h-min cursor-pointer"
              onClick={() => (window.location.href = "tel:+919326471539")}
            >
              Call Now
            </button>

            <div className="flex flex-col items-center md:items-end w-full md:w-1/3 mt-4">
              <div className="flex flex-wrap justify-center items-center space-x-2 md:space-x-4 mt-4">
                <input
                  type="text"
                  placeholder="MailBox"
                  className="border bg-gray-300 px-4 py-2 rounded-lg outline-none w-full md:w-auto"
                />
                <button className="bg-pink-300 text-white px-6 py-2 rounded-lg shadow-md mt-4 md:mt-0">
                  Submit
                </button>
              </div>
              <p className="text-sm mt-4 text-center md:text-right">
                © 2025 Mumvets
              </p>
            </div>
          </div>
          <p className="w-full text-center mt-4">
            Currently serving in 4 cities: Mumbai, Delhi, Bangalore, Gurgaon
          </p>
          <p className="mt-6 text-sm text-center md:text-start md:hidden w-full text-center">
            Powered By Virtualsphere Technologies Pvt Ltd
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
