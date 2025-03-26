import React from "react";
import cart from "../assets/serviece/cart 1.svg";
import cons from "../assets/serviece/cons 1.svg";
import groomi from "../assets/serviece/groomi 1.svg";
import peti from "../assets/serviece/img1.jpeg";
import sur from "../assets/serviece/img2.jpeg";
import vet from "../assets/serviece/vet 1.svg";
import cat from "../assets/serviece/istockphoto-513595916-1024x1024.svg";
import logo from "../assets/logo.svg";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";


import sarger from "../assets/serviece/sarger 1.svg";
import terapy from "../assets/serviece/terapy 1.svg";
import ser from "../assets/serviece/ser 1.svg";
import arrow from "../assets/serviece/Arrow_right_long.svg";

import pawss1 from "../assets/home/pawss 3.png";
import pawss2 from "../assets/home/pawss 4.png";
import pawss from "../assets/pawss 7.svg"

const Service = () => {
  const navigate = useNavigate();

  const token =
  useSelector((state) => state.auth.token) || localStorage.getItem("token");
const handleBooking = () => {
  if (token) {
    navigate("/booking");
  } else {
    navigate("/login");
  }
};
  return (


    <div>
      {/* <div className="grid grid-cols-5 grid-rows-4 gap-4">
    <div className="col-span-5">1</div>
    <div className="col-span-3 row-start-2">2</div>
    <div className="col-start-4 row-start-2">3</div>
    <div className="row-span-2 col-start-5 row-start-2">4</div>
    <div className="col-span-3 row-start-3">5</div>
    <div className="col-start-4 row-start-3">6</div>
    <div className="col-span-5 row-start-4">7</div>
</div> */}

      <div className="grid grid-cols-1 md:grid-cols-5 md:grid-rows-14 gap-8 p-6 md:w-[85%] mx-auto">
        <div className="relative row-span-4 col-span-1 md:col-span-5 bg-[#6A7AFF] text-white rounded-4xl p-6 flex flex-col md:flex-row items-center justify-around">
          <div className="flex items-center justify-center mb-5 md:flex-col">
            <img
              src={logo}
              alt="Mumvets Logo"
              className="h-10 w-auto md:h-[150px] md:mb-5 z-1"
            />
            <img src={ pawss} alt="" className="absolute top-5 right-1.5"/>
            <img src={ pawss} alt="" className="absolute top-20 right-5"/>
            <img src={ pawss} alt="" className="absolute left-6"/>

            <button
              className="z-1 bg-white text-black px-3 py-2 md:px-6 md:py-2 rounded-full shadow-md cursor-pointer text-md md:text-2xl flex items-center justify-center gap-1"
              onClick={handleBooking}
            >
              Home Vet Service
              <img
                src={arrow}
                alt="arrow"
                className="w-6 h-6"
              />
            </button>
          </div>
          <img src={cat} alt="Mumvets Logo" className="h-full" />
        </div>

        <div className="row-span-3 bg-[#6A7AFF] text-white p-6 rounded-[2rem] md:col-span-3 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold">Home Vet Visit</h2>
            <p className="mt-2 text-lg font-semibold">
              Exact diagnosis of animal diseases:
            </p>
            <ul className="mt-2 text-lg list-disc pl-6">
              <li>Health checks;</li>
              <li>Complete analysis of blood test;</li>
              <li>Proper Treatment;</li>
              <li>Pay At Home</li>
            </ul>
          </div>

          <div className="flex items-center justify-around gap-15 flex-col md:flex-row h-full">
            <img
              src={cart}
              alt="Vet with Dog"
              className="h-32 md:h-full rounded-[1.5rem] shadow-lg"
            />
            <button className=" mt-5 w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-lg border border-[#6A7AFF] cursor-pointer"
              onClick={handleBooking}>
              <img
                src={arrow}
                alt="arrow"
                className="w-6 h-6"
              />
            </button>
          </div>
        </div>

        {/* Vet Image */}
        <div className=" row-span-3 relative bg-white rounded-[2rem] flex items-center justify-center overflow-hidden">
          <img
            src={peti}
            alt="Vet"
            className="h-full w-full object-cover rounded-[2rem]"
          />
          <button className="w-12 h-12 flex items-center justify-center absolute top-3 right-2 rounded-full bg-white shadow-lg border border-[#6A7AFF] cursor-pointer"
            onClick={handleBooking}
          >
            <img src={arrow} alt="arrow" className="w-6 h-6" />
          </button>
        </div>

        {/* Online Consultation */}
        <div className="md:row-span-6 bg-[#6A7AFF] text-white p-6 rounded-[2rem] flex md:flex-col items-start justify-between  relative">
          {/* Text Section */}
          <h2 className="text-xl font-bold">
            Online <br /> Consultation →
          </h2>

          {/* Image Section */}
          <img
            src={cons}
            alt="Vet Consultation"
            className="h-24 md:h-full rounded-lg bottom-6 right-6"
          />
          <button className="w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-lg border cursor-pointer"
          onClick={() => navigate("/vetconsultation")}
          >
            <img src={arrow} alt="arrow" className="w-6 h-6" />
          </button>
        </div>

        {/* Pet Grooming */}
        <div className="row-span-3 bg-[#6A7AFF] text-white p-6 rounded-[2rem] md:col-span-3 flex items-center justify-between">
          {/* Text Section */}
          <div>
            <h2 className="text-2xl font-bold">Pet Grooming</h2>
            <p className="mt-2 text-lg font-semibold">Animal care services:</p>
            <ul className="mt-2 text-lg list-disc pl-6">
              <li>Includes Bathing</li>
              <li>Hair Cutting</li>
              <li>Ear Cleaning</li>
              <li>Eye Cleaning</li>
              <li>Anal Gland Cleaning</li>
              <li>Nail Trimming</li>
            </ul>
          </div>

          <div className="h-full flex items-center justify-around gap-15 flex-col md:flex-row">
            <img
              src={vet}
              alt="Vet with Dog"
              className="h-32 md:h-full rounded-[1.5rem] shadow-lg"
            />
            <button className="mt-5 w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-lg border border-[#6A7AFF] cursor-pointer"
                onClick={() => navigate("/petgrooming")}
            >
              <img src={arrow} alt="arrow" className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="row-span-3 relative bg-[#6A7AFF] rounded-4xl flex items-center justify-center overflow-hidden">
          <img
            src={sur}
            alt="Vet"
            className="w-full h-full object-cover rounded-lg"
          />
          <button className=" absolute top-3 right-3 w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-lg border border-[#6A7AFF] cursor-pointer"
            onClick={handleBooking}
          >
            <img src={arrow} alt="arrow" className="w-6 h-6" />
          </button>
          <p className="absolute">Spay & Neuter surgery</p>
        </div>

        {/* Pet Boarding */}
        <div className="relative row-span-4 bg-[#6A7AFF] text-white p-6 rounded-[2rem] md:col-span-5 flex md:flex-row flex-col items-center justify-between">
          {/* Text Section */}
          <div>
            <h2 className="text-2xl font-bold">Pet Boarding</h2>
            <p className="mt-2 text-lg font-semibold">Services we offer:</p>
            <ul className="mt-2 text-lg list-disc pl-6 md:w-2/3">
              <li>We offer best quality pet boarding facility</li>
              <li>Our staff is expert in handling pets with love and care</li>
              <li>We also offer high-quality pet food for your pets</li>
              <li>
                Area will be well cleaned and ventilated to avoid stress to pets
              </li>
              <li>
                We are dedicated to provide second homes for your pets while
                your absence because for us, your pet comes first
              </li>
            </ul>
          </div>
          {/* Image Section */}
          <img
            src={groomi}
            alt="Pet Boarding"
            className="h-32 md:h-[320px] rounded-[1.5rem] shadow-lg"
          />
          <button className="md:ml-5 mt-5 min-w-12 min-h-12 flex items-center justify-center rounded-full bg-white shadow-lg border border-[#6A7AFF] cursor-pointer"
            onClick={handleBooking}
          >
            <img src={arrow} alt="arrow" className="w-6 h-6" />
          </button>
          <img src={ pawss} alt="" className="absolute top-2 left-[200px]"/>

        </div>
      </div>

      <div className="flex justify-between items-center md:mb-5 md:w-[80%] md:flex-row flex-col mx-auto">
        <h2 className="text-3xl font-bold text-gray-800">
          Our Company Services
        </h2>
        <div className="flex items-center space-x-2  px-4 py-2 rounded-lg">
          <img src={pawss1} alt="" className="w-[30px]" />
          <span className="text-gray-800 font-medium">View More</span>
          <img src={pawss2} alt="" className="w-[30px]" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-6 grid gap-4 mb-10">
        {/* Row 1 - Two Big Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Spay & Neuter */}
          <div className="bg-[#6A7AFF] text-white p-6 rounded-xl shadow-lg relative">
            <h2 className="text-2xl font-semibold">Spay & Neuter</h2>
            <p className="mt-2">
              We offer spay and neuter surgery from highly experienced vet
              surgeons at your doorstep.
            </p>
            <button className="cursor-pointer mt-4 bg-white text-[#6A7AFF] px-4 py-2 rounded-lg font-semibold"
              onClick={handleBooking}
            >
              Book Now
            </button>
            <img
              src={sarger}
              alt=""
              className="absolute bottom-2 right-2 w-[70px] md:w-[90px]"
            />
          </div>

          {/* Home Vets Visit */}
          <div className="bg-[#6A7AFF] text-white p-6 rounded-xl shadow-lg relative">
            <h2 className="text-2xl font-semibold">Home Vets Visit</h2>
            <p className="mt-2">
              At Mumvets, we understand that your pets are part of the family,
              and their health and comfort are your top priorities. That’s why
              we offer convenient and stress-free home vet visits, bringing
              professional veterinary care right to your doorstep.
            </p>
            <button
              className="cursor-pointer mt-4 bg-white text-[#6A7AFF] px-4 py-2 rounded-lg font-semibold"
              onClick={handleBooking}
            >
              Book Now
            </button>
            <img
              src={terapy}
              alt=""
              className="absolute bottom-2 right-2 w-[70px] md:w-[70px]"
            />
          </div>
        </div>

        {/* Row 2 - Three Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
          {/* Grooming */}
          <div className="bg-[#6A7AFF] text-white p-6 rounded-xl shadow-lg relative">
            <h2 className="text-2xl font-semibold">Grooming</h2>
            <p className="mt-2">
              At Mumvets.com, we understand that grooming can be stressful for
              some pets. That’s why we go the extra mile to ensure a positive
              experience for your furry friend.
            </p>
            <button
              className="cursor-pointer mt-4 bg-white text-[#6A7AFF] px-4 py-2 rounded-lg font-semibold"
              onClick={handleBooking}
            >
              Read More
            </button>
            <img
              src={ser}
              alt=""
              className="absolute bottom-2 right-2 w-[70px] md:w-[120px]"
            />
          </div>

          {/* Vaccination */}
          <div className="bg-[#6A7AFF] text-white p-6 rounded-xl shadow-lg">
            <h2 className="text-2xl font-semibold">Vaccination</h2>
            <p className="mt-2">
              We offer all kinds of vaccines for your pets with a proper vaccine
              certificate.
            </p>
            <p className=" mt-1"><span className="text-black font-semibold">Dog vaccine:</span> Antirabies, 9 in 1, corona, kennel cough.</p>
            <p className=" mt-1"><span className="text-black font-semibold">Cat vaccine:</span> Anti rabies, CRP, corona.</p>
            <button
              className="cursor-pointer mt-4 bg-white text-[#6A7AFF] px-4 py-2 rounded-lg font-semibold"
              onClick={handleBooking}
            >
              Book Now
            </button>
          </div>

          {/* Make a Meet */}
          <div className="bg-orange-400 text-black p-6 rounded-xl shadow-lg">
            <h2 className="text-2xl font-semibold">Make a meet</h2>
            <p className="mt-2">
              We bring veterinary care to your fingertips. Online vet
              consultation is a modern, stress-free way to get professional
              advice for your pet’s health without leaving home. Whether you
              have questions about your pet’s diet, behavior, or symptoms, our
              licensed veterinarians are here to help.
            </p>
            <button className="cursor-pointer mt-4 bg-black text-white px-4 py-2 rounded-lg font-semibold"
              onClick={() => window.location.href = "tel:+919326471539"}

            >
              Call Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
