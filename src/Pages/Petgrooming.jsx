import group1 from "../assets/Group 8732.svg";
import group2 from "../assets/Group 8733.svg";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
const Petgrooming = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is at-home pet grooming?",
      answer:
        "At-home pet grooming is a professional grooming service provided at your doorstep. Instead of taking your pet to a salon, a trained groomer visits your home with all necessary tools to pamper your pet in a familiar, stress-free environment.",
    },
    {
      question: "What safety measures are followed during home visits?",
      answer:
        "Groomers follow strict hygiene protocols, including sanitizing tools before and after use, wearing masks (if required), and ensuring a clean grooming environment.",
    },
    {
      question: "Is at-home grooming safe for pets?",
      answer:
        "Yes, it is completely safe when done by trained professionals. Your pet is groomed in a familiar environment, which often reduces anxiety and improves the overall experience.",
    },
    {
      question: "Do you offer grooming services or only medical care?",
      answer:
        "Our focus is on medical care. However, we can guide you to trusted pet grooming partners if needed.",
    },
    {
      question: "Do you provide pet dental checkups and cleanings?",
      answer:
        "Yes, we perform oral exams, and cleanings under anesthesia, and offer dental hygiene advice to keep your pet’s teeth and gums healthy.",
    },
  ];

  return (
    <div>
      <div className="bg-[#8E99F4] p-5 md:p-12 rounded-3xl w-[95%] md:w-[70%] mx-auto relative shadow-lg my-10">
        <h2 className="text-2xl md:text-3xl font-semibold text-white">
          Pet Grooming
        </h2>
        <p className="mt-2 text-sm md:text-base text-white">
          Get Your Pet Groomed in the comfort of your couch
        </p>

        <h3 className="md:ml-8 mt-4 text-lg md:text-xl">
          What we provide in pet grooming?
        </h3>
        <ul className="md:ml-8 mt-2 list-disc list-inside space-y-1 text-sm md:text-base text-white">
          <li>Expert professional groomer at your doorstep</li>
          <li>Includes both dog and cat grooming</li>
          <li>Groomers will handle your pets with love and care</li>
          <li>We have best and high-quality grooming equipment's</li>
          <li>
            Our services include - hair cutting, bathing, dry blow, nail
            trimming, ear cleaning, eye cleaning, anal gland cleaning
          </li>
          <li>Pay at home</li>
        </ul>

        <div className="mt-4 flex flex-col sm:flex-row justify-between items-center">
          <button
            className="bg-black text-white py-2 px-6 rounded-full text-sm md:text-base w-full sm:w-auto"
            onClick={() => (window.location.href = "tel:+919326471539")}
          >
            Call Now
          </button>
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

      <div className="flex items-center justify-center p-6 w-[90%] md:w-[70%] mx-auto">
        <div className=" text-center">
          <h1 className="text-3xl font-bold  mb-6">
            Pet Grooming at Home in Mumbai
          </h1>
          <p className="text-gray-700 mb-8">
            Pets also deserve to feel fresh, clean, and fabulous, they also
            deserve stress-free and convenient grooming. As they are not just
            pets, they also deserve proper care, and grooming. At MumVets,
            professional pet grooming at home is available in Mumbai, so your
            pet can have a spa day, or a relaxing day without ever having to
            leave their home.
          </p>

          <h2 className="text-xl font-bold mb-4">
            Pet Grooming for Dogs and Cats
          </h2>
          <p className="text-gray-700 mb-8">
            From playful puppies to pampered kitties, grooming is a must for
            pets of every type. Regular grooming prevents matting, minimizes
            shedding, and enhances your pet’s cleanliness and comfort. <br />
            <br />
            Need a dog vaccination at home or a vet doctor home visit with
            grooming? Just let us know—our staff will combine services to save
            time and keep your pet happy and healthy.
          </p>
        </div>
      </div>
      <div className="md:w-[70%] mx-auto w-[90%]">
        <h2 className="text-xl font-bold  mb-4">
          Booking Grooming Services with MumVets
        </h2>
        <p className="italic mb-4">
          Scheduling pet grooming at home Mumbai is simple:
        </p>
        <ul className="list-disc list-inside text-gray-700 text-left inline-block">
          <li>
            Go to{" "}
            <a
              href="https://mumvets.com/"
              className="text-blue-600 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://mumvets.com/
            </a>
          </li>
          <li>Choose “Pet Grooming” from our services</li>
          <li>Select your location and time</li>
        </ul>
      </div>

      <div className="py-10 px-4 text-center relative my-10 ">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 border-b-2 inline-block">
          OUR SERVICES
        </h2>

        <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:w-[70%] mx-auto">
          {/* Left Side Images */}
          <div className="absolute left-30  hidden lg:block">
            <img
              src={group1}
              alt="Family with dog"
              className="w-24 md:w-[250px]"
            />
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
            <button
              className="mt-4 bg-orange-500 text-white py-2 px-6 rounded-full"
              onClick={() => (window.location.href = "tel:+919326471539")}
            >
              Call Now
            </button>
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
            <button
              className="mt-4 bg-orange-500 text-white py-2 px-6 rounded-full"
              onClick={() => (window.location.href = "tel:+919326471539")}
            >
              Call Now
            </button>
          </div>

          <div className="absolute right-30 hidden lg:block">
            <img
              src={group2}
              alt="Family with dog"
              className="w-24 md:w-[250px]"
            />
            {/* <img src="/images/cat.jpg" alt="Cat" className="w-20 h-20 rounded-full border-4 border-white shadow-lg mt-2" /> */}
          </div>
        </div>
      </div>

      <section className="bg-[#EEEEFF] text-black py-10 px-6 md:px-24 md:w-[75%] mx-auto rounded-2xl mb-10 shadow-xl">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold mb-12 text-center"
          >
            Frequently Asked Questions
          </motion.h2>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-5 rounded-xl shadow-lg"
              >
                <div
                  onClick={() => toggleFAQ(index)}
                  className="flex justify-between items-center cursor-pointer"
                >
                  <h3 className="text-lg font-semibold">{faq.question}</h3>
                  <div className="text-black">
                    {openIndex === index ? (
                      <KeyboardArrowDownIcon size={18} />
                    ) : (
                      <KeyboardArrowUpIcon size={18} />
                    )}
                  </div>
                </div>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-gray-800 mt-3"
                    >
                      {faq.answer}
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Petgrooming;
