import React, { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import logo from "../assets/logo.svg";
import fb from "../assets/footer/fb.png";
import insta from "../assets/footer/insta.png";
import tiktok from "../assets/footer/tiktok.png";
import { BASE_URL } from "../Utils/urlconfig";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const token =
    useSelector((state) => state.auth.token) || localStorage.getItem("token");

  console.log(token);
  const handleSubmit = async () => {
    if (!message.trim()) {
      alert("Please enter a message.");
      return;
    }
    setLoading(true);
    try {
      const response = await axios.post(
        `${BASE_URL}/api/sendEmail`,
        {
          message,
        },
        {
          headers: {
            Authorization: `${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        alert("Message sent successfully!");
        setMessage("");
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Error sending message. Please try again later.");
    }
    setLoading(false);
  };

  return (
    <footer className="relative text-gray-800">
      <div className="w-full bg-orange-400 rounded-t-[10%] md:rounded-t-[45%]">
        <div className="max-w-7xl mx-auto text-center relative z-10 p-6">
          <img
            src={logo}
            alt="Mumvets Logo"
            className="mx-auto h-16 md:h-[120px]"
            onClick={() => {
              navigate("/");
            }}
          />
          <h2 className="text-lg font-semibold underline">
            Join an Online Community of 1000+ Pet Parents in Mai
          </h2>
          <div className="flex flex-col md:flex-row justify-evenly gap-6 mt-6 p-6 rounded-xl">
            {/* Social & Branding Section */}
            <div className="flex flex-col items-center md:items-start w-full md:w-1/4">
              <p className="mt-2 text-lg font-semibold text-center md:text-left">
                Take care of your pets!
              </p>
              <p className="text-sm text-gray-700">Befriend Us</p>
              <div className="flex justify-center space-x-4 mt-2">
                <a href="https://blogs.mumvets.com/" target="_blank">
                  <img src={fb} alt="Facebook" className="w-8" />
                </a>
                <a
                  href="https://www.instagram.com/mumvets1?igsh=a3M4NnYzdTc2Yzcy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={insta} alt="Instagram" className="w-8" />
                </a>
                <a href="https://g.co/kgs/ykqhJqV" target="_blank">
                  <img
                    src={tiktok}
                    alt="TikTok"
                    className="w-8 bg-white rounded"
                  />
                </a>
              </div>
              <a
                href="https://virtualspheretechnologies.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 text-sm text-center md:text-start hidden md:flex cursor-pointer"
              >
                Powered By Virtualsphere Technologies Pvt Ltd
              </a>
            </div>

            {/* Quick Links */}
            <div className="w-full md:w-1/4 mt-4 md:mt-0">
              <h4 className="text-base font-semibold text-gray-800 mb-2">
                Quick Links
              </h4>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>
                  <NavLink to="/about">About Us</NavLink>
                </li>
                <li>
                  <NavLink to="/contact">Contact Us</NavLink>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Terms & Conditions</a>
                </li>
                <li>
                  <a
                    href="https://blogs.mumvets.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Blog
                  </a>
                </li>
              </ul>
            </div>
  
            {/* Popular Services */}
            <div className="w-full md:w-1/4 mt-4 md:mt-0">
              <h4 className="text-base font-semibold text-gray-800 mb-2">
                Our Popular Services
              </h4>

<ul className="space-y-1 text-sm text-gray-700">
  <li>
    <NavLink to="/pet-grooming-at-home-in-mumbai">
      Pet Grooming at Home in Mumbai
    </NavLink>
  </li>
  <li>
    <NavLink to="/online-vet-consultation">
      Online Vet Consultation
    </NavLink>
  </li>
  <li>
    <NavLink to="/vet-home-visit">
      Vet Home Visit
    </NavLink>
  </li>
  <li>
    <NavLink to="/pet-vaccinations-at-home/">
      Pet Vaccinations at Home
    </NavLink>
  </li>
</ul>

            </div>

            {/* Call Now Button */}
            <div className="flex justify-center items-center w-full md:w-auto mt-4">
              <input
                type="text"
                placeholder="MailBox"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="border bg-gray-300 px-4 py-2 rounded-lg outline-none w-full md:w-auto"
              />
              <button
                onClick={handleSubmit}
                disabled={loading}
                className="bg-pink-300 text-white px-6 py-2 rounded-lg shadow-md"
              >
                {loading ? "Sending..." : "Submit"}
              </button>
            </div>
          </div>

          {/* Newsletter & Copyright */}
            <div className="flex flex-wrap justify-center items-center gap-2">
              <button
                className="bg-gray-500 text-white px-6 py-2 rounded-3xl shadow-md h-min cursor-pointer"
                onClick={() => (window.location.href = "tel:+919326471539")}
              >
                Call Now
              </button>
          </div>

          <p className="w-full text-center mt-4">
            Currently serving in 4 cities: Mumbai, Delhi, Bangalore, Gurgaon
          </p>
          <p className="mt-6 text-sm text-center md:text-start md:hidden w-full">
            Powered By Virtualsphere Technologies Pvt Ltd
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
