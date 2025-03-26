import React from 'react'
import group1 from "../assets/Group 8732.svg"
import group2 from "../assets/Group 8733.svg"

const Petgrooming = () => {
  return (
    <div>
      <div className="bg-[#8E99F4] p-5 md:p-12 rounded-3xl w-[95%] md:w-[70%] mx-auto relative shadow-lg my-10">
      <h2 className="text-2xl md:text-3xl font-semibold text-white">Pet Grooming</h2>
      <p className="mt-2 text-sm md:text-base text-white">Get Your Pet Groomed in the comfort of your couch</p>
      
      <h3 className="md:ml-8 mt-4 text-lg md:text-xl">What we provide in pet grooming?</h3>
      <ul className="md:ml-8 mt-2 list-disc list-inside space-y-1 text-sm md:text-base text-white">
        <li>Expert professional groomer at your doorstep</li>
        <li>Includes both dog and cat grooming</li>
        <li>Groomers will handle your pets with love and care</li>
        <li>We have best and high-quality grooming equipment's</li>
        <li>
          Our services include - hair cutting, bathing, dry blow, nail trimming,
          ear cleaning, eye cleaning, anal gland cleaning
        </li>
        <li>Pay at home</li>
      </ul>
      
      <div className="mt-4 flex flex-col sm:flex-row justify-between items-center">
        <button className="bg-black text-white py-2 px-6 rounded-full text-sm md:text-base w-full sm:w-auto">Call Now</button>
        {/* <div className="flex space-x-2 mt-4 sm:mt-0">
          <button className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">⬅️</button>
          <button className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">➡️</button>
        </div> */}
      </div>
      <div className="absolute top-10 right-4 flex space-x-2 text-xl md:text-6xl rotate-30">
        <span>🐾</span>
        <span>🐾</span>
      </div>
    </div>

    <div className="py-10 px-4 text-center relative my-10 ">
      <h2 className="text-2xl md:text-3xl font-semibold mb-6 border-b-2 inline-block">OUR SERVICES</h2>
      
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:w-[70%] mx-auto">
        {/* Left Side Images */}
        <div className="absolute left-30  hidden lg:block">
          <img src={group1} alt="Family with dog" className="w-24 md:w-[250px]" />
        </div>

        {/* Dog Grooming Card */}
        <div className="bg-pink-100 p-6 rounded-2xl shadow-md w-full md:w-1/3 border border-pink-300">
          <h3 className="text-xl font-semibold mb-4">Dog Grooming</h3>
          <ul className="text-left text-green-600 space-y-2">
            <li>✔️ Includes bathing</li>
            <li>✔️ Hair Cutting</li>
            <li>✔️ Ear Cleaning</li>
            <li>✔️ Eye Cleaning</li>
            <li>✔️ Anal Gland Cleaning</li>
            <li>✔️ Nail Trimming</li>
            <li>✔️ Blow Dry</li>
          </ul>
          <p className="mt-4 font-bold text-lg">₹999-2999</p>
          <button className="mt-4 bg-orange-500 text-white py-2 px-6 rounded-full"
            onClick={() => window.location.href = "tel:+919326471539"}

          >Call Now</button>
        </div>

        {/* Cat Grooming Card */}
        <div className="bg-pink-100 p-6 rounded-2xl shadow-md w-full md:w-1/3 border border-pink-300">
          <h3 className="text-xl font-semibold mb-4">Cat Grooming</h3>
          <ul className="text-left text-green-600 space-y-2">
            <li>✔️ Includes bathing</li>
            <li>✔️ Hair Cutting</li>
            <li>✔️ Ear Cleaning</li>
            <li>✔️ Eye Cleaning</li>
            <li>✔️ Anal Gland Cleaning</li>
            <li>✔️ Nail Trimming</li>
            <li>✔️ Blow Dry</li>
          </ul>
          <p className="mt-4 font-bold text-lg">₹999-1599</p>
          <button className="mt-4 bg-orange-500 text-white py-2 px-6 rounded-full"
            onClick={() => window.location.href = "tel:+919326471539"}

          >Call Now</button>
        </div>

        <div className="absolute right-30 hidden lg:block">
        <img src={group2} alt="Family with dog" className="w-24 md:w-[250px]" />
        {/* <img src="/images/cat.jpg" alt="Cat" className="w-20 h-20 rounded-full border-4 border-white shadow-lg mt-2" /> */}
        </div>
      </div>
    </div>
    </div>
  )
}

export default Petgrooming
