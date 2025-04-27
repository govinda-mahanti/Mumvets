import group1 from "../assets/Group 8732.svg";
import group2 from "../assets/Group 8733.svg";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import Group_pic from "../assets/Group 8732.png";
import { Helmet } from "react-helmet";

const services = [
  {
    title: "1. Convenient Vet Home Visits",
    back: "No more travel stress or waiting rooms. Our at-home vet services are designed to make life easier for both pets and pet parents.",
  },
  {
    title: "2. Experienced Veterinary Doctors in Mumbai",
    back: "Our team includes some of the best veterinary doctors in Mumbai, fully qualified and deeply passionate about animal care.",
  },
  {
    title: "3. Safe and Stress-Free",
    back: "Your pet stays in their comfort zone while getting high-quality care through our home veterinary services.",
  },
  {
    title: "4. Reliable Vet on Call",
    back: "Whether it’s a scheduled vaccination or you need a pet doctor at home for a health concern, we’re just a call away.",
  },
];

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

const accordionData = [
  {
    title: "For Dogs: Puppy DP Vaccines",
    content:
      "Starting at 6–8 weeks, your puppy will need multiple rounds of vaccines to guard against parvovirus and distemper.",
  },
  {
    title: "For Dogs: 7-in-1 Vaccine",
    content:
      "A combination vaccine that protects against seven common diseases in dogs, including leptospirosis and hepatitis.",
  },
  {
    title: "For Dogs: Anti-Rabies and Kennel Cough Vaccines",
    content:
      "Anti-Rabies Vaccine is essential for every dog in Mumbai. Kennel Cough Vaccine is great for dogs who socialize frequently or visit boarding services.",
  },
  {
    title: "For Cats: Tricat and Anti-Rabies Vaccines",
    content:
      "Tricat Vaccine protects against feline panleukopenia, herpesvirus, and calicivirus. Anti-Rabies Vaccine is a must-have for all cats, indoor or outdoor.",
  },
];

const PetVaccination = () => {
  const [faqopenIndex, setFaqOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setFaqOpenIndex(openIndex === index ? null : index);
  };

  const [openIndex, setOpenIndex] = useState(0);

  const toggleOpen = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const [activeIndex, setActiveIndex] = useState(null);
  const [locked, setLocked] = useState(null);

  const handleHover = (index, value) => {
    if (locked !== index) {
      setActiveIndex(value ? index : null);
    }
  };

  const handleLockToggle = (index) => {
    if (locked === index) {
      setLocked(null);
      setActiveIndex(null);
    } else {
      setLocked(index);
      setActiveIndex(index);
    }
  };

  return (
    <div>
      <div className="bg-[#8E99F4] p-5 md:p-12 rounded-3xl w-[95%] md:w-[70%] mx-auto relative shadow-lg my-10">
        <h2 className="text-2xl md:text-3xl font-semibold">
          Pet Vaccination at Home in Mumbai
        </h2>

        <p className="mt-2 text-sm md:text-base text-white md:w-[90%]">
          At MumVets, we think your pet's well-being shouldn't be accompanied by
          stress or long commutes. That's why we bring professional vet services
          at home– where your beloved pet feels most comfortable. If you've
          recently adopted a puppy and welcomed it into your family or are
          nursing a senior cat, on-time pet vaccination is crucial to save them
          from diseases.
        </p>

        <h3 className="md:ml-8 mt-4 text-lg md:text-xl font-semibold">
          Services we offer
        </h3>

        <ul className="md:ml-8 mt-2 list-disc list-inside space-y-1 text-sm md:text-base text-white">
          <li>Dog Vaccination at Home</li>
          <li>Cat Vaccinations</li>
          <li>Regular Vet Home Visits</li>
          <li>Full Home Veterinary Services throughout Mumbai</li>
          <li>Provided by caring, licensed veterinary doctors</li>
          <li>Clinic-quality care at your home</li>
        </ul>

        <div className="mt-4 flex flex-col sm:flex-row justify-between items-center">
          <button
            className="bg-black text-white py-2 px-6 rounded-full text-sm md:text-base w-full sm:w-auto"
            onClick={() => (window.location.href = "tel:+919326471539")}
          >
            Call Now
          </button>
        </div>

        <div className="absolute top-10 right-4 flex space-x-2 text-xl md:text-6xl rotate-30">
          <span>🐾</span>
          <span>🐾</span>
        </div>
      </div>

      <section className="w-full px-6 py-12">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">
            Why Are Pet Vaccinations Important?
          </h2>

          <p className="text-gray-600 leading-relaxed mb-4">
            Preventive care is an essential component for the overall care of
            your pet's health. Vaccines protect your pets from infectious and
            potentially life-threatening diseases such as rabies, distemper,
            parvovirus, feline panleukopenia, and others.
          </p>

          <p className="text-gray-600 leading-relaxed mb-4">
            At MumVets, our in-home veterinary care staff makes sure that your
            pet gets vaccinated on time and offers customized tips on how to
            make your pet healthy for a lifetime.
          </p>

          <p className="text-gray-600 leading-relaxed">
            Whether your puppy is receiving their first round of shots or your
            adult cat is getting its yearly boosters, we've got you covered with
            convenient vet doctor home visits in Mumbai.
          </p>
        </div>
      </section>
      <div className="py-10 px-4 md:px-20 text-center relative">
        {/* Heading */}
        <h2 className="text-2xl md:text-4xl font-bold mb-6">
          What Vaccinations Does Your Pet Need?
        </h2>

        {/* Line with circles */}
        <div className="flex items-center justify-center mb-6 md:w-[80%] mx-auto">
          <div className="w-4 h-4 border-2 border-pink-400 rounded-full"></div>
          <div className="border-t border-dotted border-gray-400 flex-grow mx-2"></div>
          <div className="w-4 h-4 border-2 border-pink-400 rounded-full"></div>
        </div>

        {/* Paragraph */}
        <p className="text-gray-700 max-w-3xl mx-auto mb-10">
          Our home veterinary services are tailored according to your pet’s age,
          lifestyle, and medical history. Here's what we offer:
        </p>

        {/* Content Section */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          {/* Image */}
          <div className="w-full md:w-1/2 flex items-center justify-center">
            <img
              src={Group_pic}
              alt="Pet Vaccinations"
              className="w-90 object-cover rounded-lg"
            />
          </div>

          {/* Accordions */}
          <div className="w-full md:w-1/2 text-left space-y-6 md:pt-15">
            {accordionData.map((item, index) => (
              <div
                key={index}
                onClick={() => toggleOpen(index)}
                className="cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  {openIndex === index ? (
                    <RemoveIcon className="text-black" />
                  ) : (
                    <AddIcon className="text-black" />
                  )}
                  <h3 className="font-semibold">{item.title}</h3>
                </div>
                {openIndex === index && (
                  <p className="italic text-pink-500 mt-2">{item.content}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      

      <div className="py-10 px-5 md:px-20 md:w-[90%] mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-10">
          Why Choose MumVets for Pet Vaccination at Home?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const isFlipped = activeIndex === index;
            const staggerClass = index >= 2 ? "md:ml-50" : "md:mr-50"; // stagger after 2nd card

            return (
              <div
                key={index}
                className={`relative group cursor-pointer ${staggerClass}`}
                onMouseEnter={() => handleHover(index, true)}
                onMouseLeave={() => handleHover(index, false)}
              >
                <motion.div
                  className="relative w-full h-64 [transform-style:preserve-3d]"
                  animate={{ rotateY: isFlipped ? 180 : 0 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                  {/* Front Side */}
                  <div className="absolute w-full h-full bg-[#9CCDCD] rounded-xl flex flex-col items-center justify-center p-4 text-center [backface-visibility:hidden]">
                    <h3 className="text-lg font-semibold">{service.title}</h3>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleLockToggle(index);
                      }}
                      className="absolute top-3 right-3 text-black"
                    >
                      {locked === index ? (
                        <VisibilityOffIcon />
                      ) : (
                        <VisibilityIcon />
                      )}
                    </button>
                  </div>

                  {/* Back Side */}
                  <div className="absolute w-full h-full bg-white rounded-xl flex flex-col items-center justify-center p-4 text-center transform rotate-y-180 [backface-visibility:hidden]">
                    <p className="text-gray-700 text-sm">{service.back}</p>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleLockToggle(index);
                      }}
                      className="absolute top-3 right-3 text-black"
                    >
                      {locked === index ? (
                        <VisibilityOffIcon />
                      ) : (
                        <VisibilityIcon />
                      )}
                    </button>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
      <section className="px-6 py-12 ">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Pet Care and More – All from Home
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Beyond vaccinations, MumVets offers complete pet care in
            Mumbai—right from your living room. Our services include:
          </p>
          <ul className="text-left list-disc list-inside text-gray-700 space-y-2">
            <li>Routine Check-Ups</li>
            <li>Parasite Prevention (ticks, fleas, worms)</li>
            <li>Home Veterinary Consultations</li>
            <li>Senior Pet Care</li>
          </ul>
        </div>
      </section>

      <section className="px-6 py-12 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Pet Care Section */}

        {/* Pet Grooming Section */}
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Pet Grooming at Home in Mumbai
        </h2>
        <p className="text-lg text-gray-600 mb-8 text-center">
          Whether it's a nail trim or a full grooming appointment, we bring pet grooming at
          home in Mumbai to your door, with your pet looking and feeling their best.
        </p>

        {/* How to Book Section */}
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
          How to Book a Pet Doctor Home Visit
        </h3>
        <p className="text-lg text-gray-600 mb-6">
          Booking with MumVets is super simple:
        </p>
        <ol className="list-decimal list-inside text-gray-700 space-y-2 mb-8">
          <li>Visit our website at <a href="https://mumvets.com/" className="text-blue-500 hover:underline">https://mumvets.com/</a></li>
          <li>Choose your service – vaccination, consultation, or grooming</li>
          <li>Select your preferred time slot</li>
          <li>Our vet doctor home visit team will arrive at your home with everything needed</li>
        </ol>
        <p className="text-lg text-gray-600">
          It’s never been easier to give your pets the care they deserve—without stepping out.
        </p>
      </div>
    </section>

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
                    {faqopenIndex === index ? (
                      <KeyboardArrowDownIcon size={18} />
                    ) : (
                      <KeyboardArrowUpIcon size={18} />
                    )}
                  </div>
                </div>

                <AnimatePresence>
                  {faqopenIndex === index && (
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

export default PetVaccination;
