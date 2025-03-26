import React, { useState, useEffect } from "react";
import statuspic from "../assets/status.svg";
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { db } from "../Utils/firebase";
import { useSelector } from "react-redux";

const BookingStatus = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const bookings = [
    {
      name: "Aryaman Kumar",
      email: "aryaman889@gmail.com",
      phone: "7050506400",
      request: "Pet Grooming",
      status: [
        { label: "Pending", date: "25th Feb, 2025" },
        { label: "Cancelled", date: "27th Feb, 2025" },
      ],
    },
    {
      name: "Aryaman Kumar",
      email: "aryaman889@gmail.com",
      phone: "7050506400",
      request: "Pet Grooming",
      status: [
        { label: "Pending", date: "25th Feb, 2025" },
        { label: "Cancelled", date: "27th Feb, 2025" },
      ],
    },
  ];

  const handleExpand = (index) => {
    setExpandedIndex(index);
  };

  const handleBack = () => {
    setExpandedIndex(null);
  };

  ///////////////////////firebase////////////////////////
  const [status, setStatus] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "update_booking_status"));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const newData = snapshot.docs.map((doc) => doc.data());
      console.log("Filtered Data:", newData);
      setStatus(newData);
    });

    return () => unsubscribe();
  }, []);



  ///////////////////////firebase////////////////////////

  return (
    <div className="bg-gray-100 p-6 rounded-xl shadow-lg w-[90%] md:w-[80%] mx-auto my-10">
      <h2 className="text-center text-lg font-semibold mb-4">
        Current Booking Status
      </h2>
      <div className="space-y-4">
        {bookings.map((booking, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-lg">
            <div className="flex md:flex-row flex-col items-center space-x-4">
              <img src={statuspic} alt="Booking Icon" className="w-22 " />
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
                <h3 className="text-lg font-semibold mb-2 ">Track Now</h3>
                <div className="flex mt-5">
                  <div
                    className={`relative h-24 w-1 ${
                      booking.status.some((stat) => stat.label === "Cancelled")
                        ? "bg-red-500"
                        : "bg-green-500"
                    } rounded-full`}
                  >
                    {booking.status.map((stat, i) => (
                      <div
                        key={i}
                        className={`absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full flex items-center justify-center ${
                          stat.label === "Cancelled"
                            ? "bg-red-500 text-white"
                            : "bg-green-500 text-white"
                        }`}
                        style={{
                          top: `${(i / (booking.status.length - 1)) * 100}%`,
                        }}
                      >
                        &#10003;
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-col text-xs ml-4">
                    {booking.status.map((stat, i) => (
                      <div key={i} className="flex items-center mb-8 md:mb-15">
                        <span
                          className={
                            stat.label === "Cancelled"
                              ? "text-red-500 text-lg"
                              : "text-green-600 text-lg"
                          }
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
        ))}
      </div>
    </div>
  );
};

export default BookingStatus;
