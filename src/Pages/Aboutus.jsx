import React, { useState } from "react";
import img1 from "../assets/about/img1.png";
import img2 from "../assets/about/img2.png";
import img3 from "../assets/about/img3.png";
import img4 from "../assets/about/img4.png";
import vetu from "../assets/about/vetu 1.png";
import group from "../assets/about/Group 8728.png";
import axios from "axios"
import { Helmet } from "react-helmet";

import { useSelector } from "react-redux";
import { BASE_URL } from "../Utils/urlconfig";
const Aboutus = () => {
  const doctors = [
    {
      name: "Dr. Mounish Sharma",
      degree: "BVSc. & AH",
      image: img1, // Update image paths
    },
    {
      name: "Dr. Prajwal Bharti",
      degree: "BVSc. & AH",
      image: img2,
    },
    {
      name: "Er. Deepak Gupta",
      degree: "MTech (Data Science)",
      image: img3,
    },
    {
      name: "Dr. Sarika Bhardwaj",
      degree: "BVSc. & AH",
      image: img4,
    },
  ];

  const token =
  useSelector((state) => state.auth.token) || localStorage.getItem("token");

  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    comments: ""
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(`${BASE_URL}/api/joinTeam`, formData, {
        headers: {
          Authorization: `${token}`,
          "Content-Type": "application/json"
        }
      });

      if (response.status === 200) {
        alert("Form submitted successfully!");
        setFormData({ name: "", mobile: "", comments: "" });
      } else {
        alert("Failed to submit form. Please try again.");
      }
    } catch (error) {
      console.log(error);
      alert("Error submitting form. Please try again later.")
    }
    setLoading(false);
  };
  return (
    <div>


      <div className="py-12 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 flex flex-col justify-center items-center md:mt-5 mb-6 md:mb-0 relative">
            <img
              src={vetu}
              alt="Dr. Dhiraj Gupta - Founder"
              className="w-110 object-cover rounded-xl shadow-lg"
            />
            {/* Name and Degree Overlay */}
            <div className="  text-black text-center px-4 py-2 rounded-lg">
              <p className="font-semibold text-lg">
                Dr. Dhiraj Gupta (Founder)
              </p>
              <p className="text-sm">BVSc. & AH, NAVLE</p>
            </div>
          </div>

          {/* Story Content */}
          <div className="md:w-1/2 text-center flex flex-col md:items-end justify-end">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
              <span className="mr-2">🐾</span> Our Story
            </h2>
            <p className="text-gray-700 mt-4 leading-relaxed w-[400px] md:text-end md:text-[20px]  mx-1">
              Mumvets is a team of highly qualified professionals veterinary
              doctors who is determined to provide high quality veterinary
              healthcare services at your doorstep for our furry friends in
              their comfort zone. Our mission is to provide top notch pet
              healthcare services in India because your pet health
              is our priority
            </p>
          </div>
        </div>
      </div>




      <div className="bg-[#F19A56] py-8 px-2 md:px-12 lg:px-20 text-center w-[90%] md:w-[80%] rounded-4xl mx-auto">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
          Join the SmartCare Family...
        </h2>
        <p className="text-gray-700 mt-2 text-lg">
          (More than <span className="font-semibold">100+ doctors</span>)
        </p>

        {/* Doctor Profiles */}
        <div className="flex flex-wrap justify-center mt-8 gap-9">
          {doctors.map((doctor, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden shadow-lg border-2 border-white">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="mt-3 font-semibold text-lg text-gray-900">
                {doctor.name}
              </p>
              <p className="text-sm text-gray-700">{doctor.degree}</p>
            </div>
          ))}
        </div>
      </div>




      <div className="py-12 px-6 md:w-[80%] mx-auto text-center">
      {/* Title */}
      <div className="flex flex-col items-center mb-6">
        <div className="flex items-center gap-2">
          <span className="text-2xl">🐾</span>
          <h2 className="text-3xl md:text-4xl font-semibold">About Us</h2>
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-700 text-sm md:text-lg mx-auto leading-relaxed">
        Established by a group of dedicated veterinary experts, MumVets combines years of clinical 
        practice, medical knowledge, and a love for animals. We recognize the special needs of city 
        pet parenting, particularly in a fast-paced city like Mumbai. That’s why we’ve designed our model 
        on at-home vet services—to make pet care easier, safer, and much more convenient. <br /><br />
        Our veterinarians are not just medically qualified but also gentle handling trained, 
        fear-free pet handling experts, and home diagnosticians. From home pet vaccination services 
        to diagnostics, to pet grooming at home in Mumbai, MumVets is your home veterinary care stop.
      </p>
    </div>





      <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mt-10 w-[80%] mx-auto">
        Join Our <span className="text-orange-600">Team</span>
      </h2>
      <p className="text-gray-700 mt-3 text-lg md:text-xl w-[80%] mx-auto">
        Join us to make more tails wag and give our pets{" "}
        <br className="hidden md:flex" /> the healthy and happy life they
        deserve.
      </p>
      <div className="flex flex-col gap-3 md:flex-row items-center justify-between px-6 py-12 md:px-16 lg:px-24 md:w-[90%] mx-auto">
        {/* Left Section (Text & Form) */}
        <div className="md:w-1/2 w-full">
        <form className="mt-6 space-y-4 flex flex-col items-center md:w-[400px]" onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        className="w-full p-3 rounded-md bg-pink-100 border border-gray-300 focus:ring-2 focus:ring-orange-400"
        required
      />
      <input
        type="tel"
        name="mobile"
        placeholder="Mobile No"
        value={formData.mobile}
        onChange={handleChange}
        className="w-full p-3 rounded-md bg-pink-100 border border-gray-300 focus:ring-2 focus:ring-orange-400"
        required
      />
      <textarea
        name="comments"
        placeholder="Comments"
        value={formData.comments}
        onChange={handleChange}
        rows="3"
        className="w-full p-3 rounded-md bg-pink-100 border border-gray-300 focus:ring-2 focus:ring-orange-400"
      ></textarea>

      <button
        type="submit"
        className="bg-orange-500 text-white font-semibold px-6 py-3 rounded-3xl hover:bg-orange-600 transition"
        disabled={loading}
      >
        {loading ? "Submitting..." : "Submit"}
      </button>
    </form>
        </div>

        {/* Right Section (Images) */}
        <div className="mt-8 md:mt-0 md:w-1/2 flex justify-center">
          <div className="relative">
            <img src={group} alt="Doctor caring for a dog" className="w-100" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
