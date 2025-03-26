import React from "react";
import dog from "../assets/dog.svg";
import group1 from "../assets/Group 8732.svg";

const Vetconsultation = () => {
  return (
    <div>
      <div className="bg-[#8E99F4] p-6 rounded-3xl w-[95%] md:w-[75%] mx-auto relative shadow-lg flex flex-col md:flex-row items-center gap-6 md:p-10 my-10">
        {/* Text Section */}
        <div className="w-full md:w-[50%]">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Online Vet Consultation
          </h2>
          <p className="mt-2 text-sm md:text-base text-white">
            Get the expert vet consultation near you <strong className="text-black">INR 199</strong>.
          </p>

          <p className="md:ml-8 mt-4 text-lg md:text-xl">
            When to take online consultation?
          </p>
          <p className="md:ml-8 text-sm md:text-base text-white">
            When your pet is showing these symptoms like - not eating properly:
          </p>
          <ul className="md:ml-8 mt-2 list-disc list-inside space-y-1 text-sm md:text-md md:text-base text-white">
            <li>Vomiting</li>
            <li>Diarrhea</li>
            <li>Fever</li>
            <li>Skin issues</li>
            <li>Diet & Nutrition plan</li>
            <li>Vaccination schedule</li>
            <li>Spay and neuter surgery guide</li>
            <li>Other health-related queries</li>
          </ul>

          <div className="mt-6 flex flex-col sm:flex-row justify-start items-center gap-4">
            <button className="bg-black text-white py-2 px-6 rounded-full text-sm md:text-base"
              onClick={() => window.location.href = "tel:+919326471539"}

            >
              Call Now
            </button>
            {/* <div className="flex space-x-2">
              <button className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                ⬅️
              </button>
              <button className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                ➡️
              </button>
            </div> */}
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-[50%] flex justify-end items-end md:mt-auto">
          <img
            src={dog}
            alt="Vet Consultation"
            className="rounded-lg shadow-lg w-full"
          />
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-10 right-4 flex space-x-2 text-xl md:text-6xl rotate-30">
          <span>🐾</span>
          <span>🐾</span>
        </div>
      </div>

      <div className=" flex flex-col items-center py-10 px-5 md:px-20 lg:px-32 w-[90%] md:w-[80%] mx-auto my-10">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 border-b-2 inline-block">
          How we work
        </h2>

        <div className="flex flex-col md:flex-row md:items-center w-full mt-10 space-y-6 md:space-y-0 md:space-x-6">
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:w-[45%]">
              <img
                src={group1}
                alt="Family with Dog"
                className="w-full object-cover md:w-full "
              />
        
          </div>
          <div className="md:w-[55%] text-center md:text-left md:ml-10 ">
            <h3 className="text-xl md:text-2xl font-bold">
              Our vet video call service at Mumvets operates seamlessly to
              provide you with accessible pet care.
            </h3>
            <ul className="text-gray-700 text-left mt-6 space-y-4 text-sm md:text-base">
              <li>
                <span className="font-semibold">1.</span> Devote a half-hour to
                a vet video call, enabling you to ask any queries and obtain
                comprehensive responses.
              </li>
              <li>
                <span className="font-semibold">2.</span> Schedule the
                appointment at a time that suits both you and your furry
                companion.
              </li>
              <li>
                <span className="font-semibold">3.</span> Eliminate the
                necessity for journeying to a brick-and-mortar facility.
              </li>
              <li>
                <span className="font-semibold">4.</span> Gain immediate access
                to prescriptions and comprehensive pet health reports through
                our vet.
              </li>
            </ul>
            <button className="mt-6 bg-orange-500 text-white px-6 py-2 rounded-md text-lg font-medium hover:bg-orange-600"
            
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

export default Vetconsultation;
