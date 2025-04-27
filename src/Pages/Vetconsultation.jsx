import dog from "../assets/dog.svg";
import group1 from "../assets/Group 8732.svg";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Helmet } from "react-helmet";

const Vetconsultation = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is an online vet consultation?",
      answer:
        "An online vet consultation allows you to speak with a licensed veterinarian via video call, phone, or chat to get professional advice on your pet’s health without visiting a clinic.",
    },
    {
      question: "Can online vets prescribe medicine?",
      answer:
        "Yes, most online vets can prescribe medicines and will send you the prescription digitally via email or WhatsApp. You can then purchase the medicines at a nearby pharmacy or online.",
    },
    {
      question: "Can I get grooming or hygiene advice from an online vet?",
      answer:
        "Absolutely. Vets can advise on shampoos, ear cleaning, dental care, nail trimming, and general hygiene routines based on your pet’s breed and needs.",
    },
    {
      question: "How do I care for my pet post-surgery?",
      answer:
        "Post-surgery, we provide complete care instructions including medication, feeding tips, rest requirements, and follow-up schedules.",
    },
    {
      question: "What surgeries are available at MumVets?",
      answer:
        "We perform soft tissue surgeries (like spaying/neutering), mass removals, wound repairs, dental procedures, and more — all with proper post-op care.",
    },
  ];

  return (
    <div>
      <div className="bg-[#8E99F4] p-6 rounded-3xl w-[95%] md:w-[75%] mx-auto relative shadow-lg flex flex-col md:flex-row items-center gap-6 md:p-10 my-10">
        {/* Text Section */}
        <div className="w-full md:w-[50%]">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Why Choose Online Vet Consultation with MumVets?
          </h2>
          {/* New Content Section */}
          <div className="md:ml-8 mt-6">
            <p className="text-sm md:text-base text-white mt-2">
              With a quick video call, our experienced and trained veterinarians
              can examine your pet’s condition, address your questions, and
              advise on treatment or follow-up—all without, you have to leave
              your home.
            </p>
            <ul className="mt-2 list-disc list-inside space-y-1 text-sm md:text-base text-white">
              <li>General health queries</li>
              <li>Follow-ups after treatment</li>
              <li>Dietary and nutrition advice</li>
              <li>Behavioural issues</li>
              <li>Post-surgical care support</li>
              <li>Skin and coat conditions</li>
              <li>Geriatric pet care</li>
            </ul>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row justify-start items-center gap-4">
            <button
              className="bg-black text-white py-2 px-6 rounded-full text-sm md:text-base"
              onClick={() => (window.location.href = "tel:+919326471539")}
            >
              Call Now
            </button>
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
          Let’s Bring the Clinic to Your Couch
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
              Our home veterinary services include:
            </h3>
            <ul className="text-left mt-6 list-disc list-inside space-y-2 text-sm md:text-base">
              <li>
                Veterinary doctor home visits for medical check-ups and
                diagnosis
              </li>
              <li>
                Pet doctor at home for sick or aging pets who cannot travel
              </li>
              <li>
                Dog vaccination at home and pet vaccination services for regular
                immunization
              </li>
              <li>
                At-home vet services for chronic conditions and pain management
              </li>
              <li>
                Pet grooming at home in Mumbai for a calm, stress-free grooming
                experience
              </li>
              <li>
                All services are delivered with strict hygiene protocols and
                expert care—because your pet deserves nothing but the best.
              </li>
            </ul>
            <button
              className="mt-6 bg-orange-500 text-white px-6 py-2 rounded-md text-lg font-medium hover:bg-orange-600"
              onClick={() => (window.location.href = "tel:+919326471539")}
            >
              Call Now
            </button>
          </div>
        </div>
      </div>
      <section className="px-6 py-12 md:w-[80%] mx-auto">
        <div className=" mx-auto text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">
            Online Vet Consultation with MumVets – Quality Care from the Comfort
            of Your Home
          </h1>
          <p className="text-base text-black mb-6">
            Being a pet parent is perhaps the most rewarding experience in the
            world—but also comes with a fair share of responsibility. At
            MumVets, we get about the everyday grind and emotional strain of
            having an unwell pet. That’s why we’ve brought expert home
            veterinary services in Mumbai within your reach, so your pets get
            the care in a quick, convenient, and accessible way with online vet
            consultations—for the comfort of your home in Mumbai.
          </p>
          <p className="text-base text-black mb-8">
            Whether your pet requires medical consultation, regular check-ups,
            vaccination reminders, or even pet grooming in Mumbai, MumVets is
            there to assist you with care and compassion.
          </p>
        </div>
      </section>

      <div className="py-12 px-4 md:px-20 md:w-[80%] mx-auto text-center">
        {/* Heading */}
        <h2 className="text-xl md:text-2xl font-semibold italic text-gray-800 mb-10">
          When Should You Choose Online Vet Consultation?
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-gray-300 rounded-xl p-6 md:p-10 flex flex-col items-center justify-center text-center shadow-md">
            <h3 className="font-semibold text-lg mb-3">
              Book Online Vet Consultation
            </h3>
            <p className="text-gray-700 text-sm">
              Online vet consultations are perfect for mild issues, second
              opinions, diet advice, post-surgery care, and avoiding
              travel—plus, we offer at-home visits when your pet needs hands-on
              medical attention.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-gray-300 rounded-xl p-6 flex flex-col items-center justify-center text-center shadow-md">
            <h3 className="font-semibold text-lg mb-3">
              More than just medical care
            </h3>
            <p className="text-gray-700 text-sm">
              At MumVets, we offer more than medical care—home grooming,
              emergency vet visits, chronic illness support, and elderly pet
              care—all focused on keeping your furry friend healthy,
              comfortable, and loved.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-gray-300 rounded-xl p-6 flex flex-col items-center justify-center text-center shadow-md">
            <h3 className="font-semibold text-lg mb-3">
              More than just medical care
            </h3>
            <p className="text-gray-700 text-sm">
              Choose online vet consultation for mild health issues, second
              opinions, diet or habit advice, post-surgery care, or to skip
              stressful commutes—with home visits available when hands-on
              treatment is needed.
            </p>
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

export default Vetconsultation;
