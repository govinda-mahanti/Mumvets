import React, { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { BASE_URL } from "../Utils/urlconfig";
const Booking = () => {
  const [formData, setFormData] = useState({
    ownerName: "",
    phoneNo: "",
    meetDate: "",
    email: "",
    address: "",
    symptoms: "",
    agreeToPolicy: false,
  });

  const [loading, setLoading] = useState(false);
  const token =
    useSelector((state) => state.auth.token) || localStorage.getItem("token");
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.agreeToPolicy) {
      alert("You must agree to the Privacy Policy.");
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post(`${BASE_URL}/api/book-meet`, formData, {
        headers: {
          Authorization: `${token}`,
          "Content-Type": "application/json",
        },
      });
      alert("Appointment booked successfully!");
      setFormData({
        ownerName: "",
        phoneNo: "",
        meetDate: "",
        email: "",
        address: "",
        symptoms: "",
        agreeToPolicy: false,
      });

      console.log(response.data);
    } catch (error) {
      console.error(
        "Error booking appointment:",
        error.response?.data || error.message
      );
      alert("Failed to book appointment. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center my-10 mx-2">
      <div className="w-full max-w-4xl bg-orange-300 p-8 rounded-lg shadow-lg relative">
        <h2 className="text-center text-2xl font-semibold mb-6">Make a meet</h2>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          <div>
            <label className="block text-sm font-medium border-none mb-1">Owner Name:</label>
            <input
              type="text"
              name="ownerName"
              value={formData.ownerName}
              onChange={handleChange}
              className="w-full p-2 border-none rounded bg-gray-100"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Phone No:</label>
            <input
              type="text"
              name="phoneNo"
              value={formData.phoneNo}
              onChange={handleChange}
              className="w-full p-2 border-none rounded bg-gray-100"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Meet Date:</label>
            <input
              type="date"
              name="meetDate"
              value={formData.meetDate}
              onChange={handleChange}
              className="w-full p-2 border-none rounded bg-gray-100"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Email Address:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border-none rounded bg-gray-100"
              required
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium mb-1">Address:</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full p-2 border-none rounded bg-gray-100"
              required
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium mb-1">
              Symptoms and notes:
            </label>
            <textarea
              name="symptoms"
              value={formData.symptoms}
              onChange={handleChange}
              className="w-full p-2 border-none rounded h-24 bg-gray-100"
              required
            ></textarea>
          </div>

          <div className="flex items-center space-x-2 md:col-span-2">
            <input
              type="checkbox"
              name="agreeToPolicy"
              checked={formData.agreeToPolicy}
              onChange={handleChange}
              className="w-4 h-4 bg-gray-100"
            />
            <span className="text-sm">
              I have read and agree to the{" "}
              <a href="#" className="text-blue-600">
                Privacy Policy
              </a>
            </span>
          </div>

          <div className="md:col-span-2 flex justify-center">
            <button
              type="submit"
              className="bg-black text-white px-6 py-2 rounded border-none"
              disabled={loading}
            >
              {loading ? "Booking..." : "Book Now"}
            </button>
          </div>
        </form>

        {/* <div className="absolute top-10 right-4 flex space-x-2 text-xl md:text-6xl rotate-30">
          <span>🐾</span>
        </div> */}
      </div>
    </div>
  );
};

export default Booking;
