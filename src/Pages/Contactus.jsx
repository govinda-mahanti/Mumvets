import React, { useState } from "react";

import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import TwitterIcon from "@mui/icons-material/Twitter";

import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import axios from "axios";
import { BASE_URL } from "../Utils/urlconfig";
import { useSelector } from "react-redux";

const Contactus = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNo: "",
    subject: 1,
    message: "",
  });

  //   {
  //     "firstName":"Abhimanyu",
  //     "lastName":"Kumar",
  //     "email":"isha@gmail.com",
  //     "phoneNo":"9865895478",
  //     "subject":1,
  //     "message":"I want to know the booking status for my service"
  // }

  const handleChange = (e) => {
    const { name, value } = e.target;

    const newValue = name === "subject" ? parseInt(value, 10) : value;

    setFormData({ ...formData, [name]: newValue });
  };

  const token =
    useSelector((state) => state.auth.token) || localStorage.getItem("token");
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(token);
    console.log(formData);
    try {
      const response = await axios.post(`${BASE_URL}/api/contact`, formData, {
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
        },
      });
      alert("Application submitted successfully!");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phoneNo: "",
        subject: 1,
        message: "",
      });
      console.log(response.data);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };
  return (
    <div>
          <h2 className="text-3xl font-bold text-center mb-4 mt-8">
            Contact Us
          </h2>
          <p className="text-center mb-6">
            Any question or remarks? Just write us a message!
          </p>
      <div className=" md:w-[60%] md:mx-auto flex flex-col md:flex-row justify-center items-stretch min-h-[80%] p-4 md:gap-0 my-10">
        <div className=" bg-indigo-500 relative text-white p-8 md:w-[40%] w-full shadow-lg rounded-tl-2xl md:rounded-bl-2xl rounded-tr-2xl md:rounded-tr-[0px] overflow-hidden">
          <h2 className="text-2xl font-bold mb-2">Contact Information</h2>
          <p className="text-lg mb-6">Say something to start a live chat!</p>

          {/* Contact Details */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span>📞</span>
              <p className="text-md">+7050506400</p>
            </div>
            <div className="flex items-center space-x-2">
              <span>✉️</span>
              <p className="text-md">demo@gmail.com</p>
            </div>
            <div className="flex items-center space-x-2">
              <span>📍</span>
              <p className="text-md">
                132 Dartmouth Street Boston, Massachusetts 02156 United States
              </p>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-8 md:mt-20">
            <TwitterIcon className="text-black bg-white rounded-full p-1 w-10 h-10" />
            <InstagramIcon className="text-black bg-white rounded-full p-1 w-10 h-10" />
            <WhatsAppIcon className="text-green-500 bg-white rounded-full p-1 w-10 h-10" />
          </div>

          {/* Background Overlays */}
          <div className="absolute bottom-0 right-0">
            <div className="w-24 h-24 bg-black opacity-80 rounded-full absolute bottom-[-13px] right-[-13px]"></div>
            <div className="w-20 h-20 bg-gray-400 opacity-60 rounded-full absolute bottom-6 right-6"></div>
          </div>
        </div>

        <div className="bg-white p-8 shadow-lg md:w-[60%] w-full md:mt-0 md:rounded-tr-2xl rounded-br-2xl  rounded-bl-2xl md:rounded-bl-[0px]">

          <form onSubmit={handleSubmit}>
            {/* Name Inputs */}
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label className="text-gray-500 text-sm">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  className="border-b border-black p-2 outline-none w-full"
                  onChange={handleChange}
                  value={formData.firstName} 

                  required
                />
              </div>
              <div className="flex flex-col">
                <label className="text-gray-500 text-sm">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName} 
                  onChange={handleChange} 
                  className="border-b border-black p-2 outline-none w-full text-gray-700"
                />
              </div>
            </div>

            {/* Email & Phone Number */}
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div className="flex flex-col">
                <label className="text-gray-500 text-sm">Email</label>
                <input
                  type="email"
                  name="email"
                  className="border-b border-black p-2 outline-none w-full"
                  onChange={handleChange}
                  value={formData.email} 

                  required
                />
              </div>
              <div className="flex flex-col">
                <label className="text-gray-500 text-sm">Phone Number</label>
                <input
                  type="tel"
                  name="phoneNo"
                  value={formData.phoneNo}
                  onChange={handleChange}
                  className="border-b border-black p-2 outline-none w-full text-gray-700"
                />
              </div>
            </div>

            {/* Select Subject */}
            <div className="mt-4">
              <label className="block mb-2 font-semibold">
                Select Subject?
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="subject"
                  value={1} 
                  checked={formData.subject === 1}
                  onChange={handleChange}
                  className="mr-2"
                />
                General Inquiry
              </label>
              <label className="inline-flex items-center ml-4">
                <input
                  type="radio"
                  name="subject"
                  value={2} 
                  checked={formData.subject === 2}
                  onChange={handleChange}
                  className="mr-2"
                />
                Booking Status
              </label>
            </div>

            {/* Message Input */}
            <div className="mt-6">
              <label className="text-gray-500 text-sm">Message</label>
              <textarea
                name="message"
                placeholder="Write your message.."
                className="border-b border-black p-2 outline-none w-full"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-black text-white p-3 rounded-lg w-full mt-6 hover:bg-gray-800 cursor-pointer"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
