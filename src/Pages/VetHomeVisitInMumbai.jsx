import dog from "../assets/dog.svg";
import group2 from "../assets/Group 8732.svg";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
const VetHomeVisitInMumbai = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is a vet home visit?",
      answer:
        "A vet home visit is when a licensed veterinarian comes to your home to examine and treat your pet, offering services like health check-ups, vaccinations, minor treatments, and diagnostics—right at your doorstep.",
    },
    {
      question: "Is a home visit safe and hygienic for my pet?",
      answer:
        "Yes, it’s completely safe. Vets carry sanitized tools and follow strict hygiene protocols. It also minimizes your pet’s exposure to other animals and clinic stress.",
    },
    {
      question: "Can the vet diagnose and treat my pet at home?",
      answer:
        "Yes, vets can treat most non-emergency conditions at home. For complex cases, they may recommend diagnostic tests or refer you to a clinic for further treatment.",
    },
    {
      question: "Is the service available for both dogs and cats?",
      answer:
        "Absolutely. Vet home visits are available for dogs, cats, and in many cases, small pets like rabbits, hamsters, and birds.",
    },
    {
      question: "What if my pet becomes aggressive during the visit?",
      answer:
        "Trained vets know how to handle nervous or aggressive pets gently. You can also inform the service in advance so the vet can come prepared.",
    },
    {
      question: "Do you offer emergency vet home visits?",
      answer:
        "Some services offer urgent or same-day appointments, but true medical emergencies like severe injuries, poisoning, or seizures still require immediate clinic or hospital care.",
    },
  ];

  return (
    <div>
      <div className="bg-[#8E99F4] p-6 rounded-3xl w-[95%] md:w-[75%] mx-auto relative shadow-lg flex flex-col md:flex-row items-center gap-6 md:p-10 my-10">
        {/* Text Section */}
        <div className="w-full md:w-[50%]">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Online Vet Consultation
          </h2>
          <p className="mt-2 text-sm md:text-base text-white">
            Get the expert vet consultation near you{" "}
            <strong className="text-black">INR 199</strong>.
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

      <div className="py-10 px-4 md:px-20 md:w-[80%] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          <div className="flex flex-col items-center border rounded-xl p-5">
            <MoreHorizIcon className="text-5xl mb-2" />
            <h2 className="font-bold">Home Service</h2>
            <p className="text-sm mt-2">
              Our home veterinary services are tailored according to your pet’s
              age, lifestyle, and medical history.
            </p>
          </div>

          <div className="flex flex-col items-center border rounded-xl p-5">
            <LaptopMacIcon className="text-5xl mb-2" />
            <h2 className="font-bold">Online consultant</h2>
            <p className="text-sm mt-2">
              Consult qualified and registered doctors
            </p>
          </div>

          <div className="flex flex-col items-center border rounded-xl p-5">
            <InfoOutlinedIcon className="text-5xl mb-2" />
            <h2 className="font-bold">About Pet vaccination</h2>
            <p className="text-sm mt-2">
              At MumVets, our in-home veterinary care staff makes sure that your
              pet gets vaccinated on time and offers customized tips on how to
              make your pet healthy for a lifetime.
            </p>
          </div>
        </div>

        <div className="mt-15 mx-auto text-gray-800 text-base leading-relaxed">
          <p>
            At MumVets, we think your pet's well-being shouldn't be accompanied
            by stress or long commutes. That's why we bring professional vet
            services at home—where your beloved pet feels most comfortable.{" "}
            <br />
            We provide Dog Vaccination at Home, cat vaccinations, regular vet
            home visits, and full home veterinary services throughout Mumbai,
            provided by caring, licensed veterinary doctors. With MumVets, your
            pet receives the same high-quality care as a clinic visit—without
            ever having to leave your home.
          </p>
        </div>
      </div>

      <div className="relative  py-10 px-4 md:px-20 md:w-[90%] md:mx-auto overflow-hidden">
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Side Images */}
          <div className="flex flex-col items-center gap-6">
            <div className="w-48 md:w-100 overflow-hidden">
              <img
                src={group2} // <-- change this
                alt="Family with Dog"
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          {/* Right Side Content */}
          <div className="flex flex-col gap-8">
            <div className="bg-blue-100 p-6 rounded-xl shadow-md">
              <h3 className="font-semibold mb-2">
                Experienced Veterinary Doctor in Mumbai
              </h3>
              <p className="text-sm">
                Our staff consists of some of the finest veterinary doctors in
                Mumbai, professionally trained to diagnose and treat a variety
                of conditions with compassion and professionalism.
              </p>
            </div>

            <div className="bg-blue-100 p-6 rounded-xl shadow-md">
              <h3 className="font-semibold mb-2">
                Vet Care in Mumbai – At Your Door
              </h3>
              <p className="text-sm">
                We provide professional vet home visit Mumbai services to major
                areas of the city. From Churchgate to Mira Road, irrespective of
                whether you are in Bandra, Andheri, or Borivali—we've got you
                covered.
              </p>
            </div>

            <div className="bg-blue-100 p-6 rounded-xl shadow-md">
              <h3 className="font-semibold mb-2">
                Comfort of Home, Quality of Clinic
              </h3>
              <p className="text-sm">
                Pets are more calm at home, which allows our pet doctor home
                visit team to provide effective care without extra stress.
              </p>
            </div>
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

export default VetHomeVisitInMumbai;
