import React, { useState, useEffect } from "react";
import statuspic from "../assets/status.svg";
import { collection, query, onSnapshot } from "firebase/firestore";
import { db } from "../Utils/firebase";
import { useSelector } from "react-redux";
import axios from "axios";
import { BASE_URL } from "../Utils/urlconfig";

const BookingStatus = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [statusData, setStatusData] = useState([]);
  const [userData, setUserData] = useState(null);
  const token =
    useSelector((state) => state.auth.token) || localStorage.getItem("token");

  useEffect(() => {
    fetchUserData();
  }, [token]);

  // Fetch User Data (Meetings)
  const fetchUserData = async () => {
    try {
      console.log("Fetching user data...");
      const response = await axios.get(`${BASE_URL}/api/getUser`, {
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
        },
      });
      console.log("User Data Fetched:", response.data.userData);
      setUserData(response.data.userData);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  // Fetch Firebase Status Data
  useEffect(() => {
    console.log("Fetching Firebase booking status...");
    const q = query(collection(db, "update_booking_status"));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const newData = snapshot.docs.map((doc) => doc.data());
      console.log("Firebase Data Fetched:", newData);
      setStatusData(newData);
    });

    return () => unsubscribe();
  }, []);

  // Map user meetings with Firebase status
  const bookings = (userData?.meetingId || []).map((meeting) => {
    console.log("Processing Meeting:", meeting);

    const firebaseData = statusData.find(
      (status) => status.status_history?.[0]?.email === meeting.email
    );

    console.log("Matching Firebase Data for Meeting:", firebaseData);

    return {
      name: firebaseData?.status_history?.[0]?.ownerName || meeting.ownerName,
      email: firebaseData?.status_history?.[0]?.email || meeting.email,
      phone: firebaseData?.status_history?.[0]?.phone || meeting.phoneNumber,
      request: firebaseData?.status_history?.[0]?.request || "Unknown Request",
      status: (firebaseData?.status_history || []).map((stat) => {
        let label;
        switch (stat.status) {
          case 0:
            label = "Pending";
            break;
          case 2:
            label = "Completed";
            break;
          case -1:
            label = "Canceled";
            break;
          default:
            label = "Unknown Status";
        }
        const date = new Date(stat.updated_at).toLocaleDateString();
        console.log(`Status - Label: ${label}, Date: ${date}`);
        return { label, date };
      }),
    };
  });

  // Expand/collapse status details
  const handleExpand = (index) => setExpandedIndex(index);
  const handleBack = () => setExpandedIndex(null);

  return (
    <div className="bg-gray-100 p-6 rounded-xl shadow-lg w-[90%] md:w-[80%] mx-auto my-10">
      <h2 className="text-center text-lg font-semibold mb-4">
        Current Booking Status
      </h2>
      <div className="space-y-4">
        {bookings.length > 0 ? (
          bookings.map((booking, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-lg">
              <div className="flex md:flex-row flex-col items-center space-x-4">
                <img src={statuspic} alt="Booking Icon" className="w-22" />
                <div className="md:ml-2 mt-5 md:mt-0">
                  <p className="text-md font-semibold">Name: {booking.name}</p>
                  <p className="text-md">Email: {booking.email}</p>
                  <p className="text-md">Phone: {booking.phone}</p>
                  <p className="text-md">Request: {booking.request}</p>
                </div>
                {expandedIndex !== index && (
                  <div className="flex justify-between items-center md:ml-auto mt-5">
                    <button
                      className="bg-black text-white px-4 py-2 rounded-full"
                      onClick={() => handleExpand(index)}
                    >
                      Track Now
                    </button>
                  </div>
                )}
              </div>

              {expandedIndex === index && (
                <div className="mt-4 md:p-10 p-5 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2">Track Now</h3>
                  <div className="flex mt-5">
                    <div
                      className={`relative h-24 w-1 ${
                        booking.status.some((stat) => stat.label === "Pending")
                          ? "bg-green-500"
                          : booking.status.some(
                              (stat) => stat.label === "Canceled"
                            )
                          ? "bg-red-500"
                          : "bg-gray-500"
                      } rounded-full`}
                    >
                      {booking.status.map((stat, i) => (
                        <div
                          key={i}
                          className={`absolute left-1/2 -translate-x-1/2 w-5 h-5 p-1 rounded-full flex items-center justify-center ${
                            stat.label === "Pending"
                              ? "bg-green-500 text-white"
                              : stat.label === "Canceled"
                              ? "bg-red-500 text-white"
                              : stat.label === "Completed"
                              ? "bg-green-500 text-white"
                              : "bg-gray-500 text-black"
                          }`}
                          style={{
                            top: `${(i / (booking.status.length - 1)) * 100}%`,
                          }}
                        >
                          {stat.label !== "Pending" ? "✔" : "!"}
                        </div>
                      ))}
                    </div>
                    <div className="flex flex-col text-xs ml-4">
                      {booking.status.map((stat, i) => (
                        <div
                          key={i}
                          className="flex items-center mb-15 md:mb-15"
                        >
                          <span
                            className={`text-lg ${
                              stat.label === "Pending"
                                ? "text-green-600"
                                : stat.label === "Canceled"
                                ? "text-red-500"
                                : "text-green-600"
                            }`}
                          >
                            {stat.label} - {stat.date}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <button
                      className="bg-gray-600 text-white px-6 py-2 rounded-full"
                      onClick={handleBack}
                    >
                      Back
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No bookings available</p>
        )}
      </div>
    </div>
  );
};

export default BookingStatus;
