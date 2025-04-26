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
import Group_pic from "../assets/Group 8732.png"

const services = [
  {
    title: "1. Dog and Cat Vaccination at Home.",
    back: "Protect your pet from preventable diseases. Vaccinations are administered during scheduled vet doctor home visits after a quick health check to ensure your pet is fit and ready.",
  },
  {
    title: "2. General Health Check-ups",
    back: "Regular vet visits are key to long-term pet care in Mumbai. Our home veterinary team conducts thorough health check-ups, monitors weight, screens for common illnesses, and provides parasite control (fleas, ticks, worms).",
  },
  {
    title: "3. Minor Illness and Injury Care",
    back: "For small wounds, skin issues, or minor ailments, our vet on call team is just a message away. No need to leave your house—just book a pet doctor at home and we’ll take care of the rest.",
  },
  {
    title: "4. Senior Pet Support",
    back: "Older pets have unique needs. From arthritis management to diet changes, our home veterinary services are tailored to provide compassionate care for aging pets.",
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
        <h2 className="text-2xl md:text-3xl font-semibold text-white">
          Pet Grooming
        </h2>

        <p className="mt-2 text-sm md:text-base text-white">
          Get Your Pet Groomed in the comfort of your couch
        </p>

        <h3 className="md:ml-8 mt-4 text-lg md:text-xl font-semibold">
          What we provide in pet grooming?
        </h3>

        <ul className="md:ml-8 mt-2 list-disc list-inside space-y-1 text-sm md:text-base text-white">
          <li>expert professional groomer at your doorstep</li>
          <li>include both dog and cat grooming</li>
          <li>groomers will handle your pets with love and care</li>
          <li>we have best and high quality grooming equipment’s</li>
          <li>
            our services include - hair cutting, bathing, dry blow , nail
            trimming, ear cleaning, eye cleaning, anal gland cleaning
          </li>
          <li>pay at home</li>
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

      <div className="py-10 px-4 md:px-20 text-center relative">
  {/* Heading */}
  <h2 className="text-2xl md:text-4xl font-bold mb-6">
    Why Choose MumVets for Vet Services at Home?
  </h2>

  {/* Line with circles */}
  <div className="flex items-center justify-center mb-6 md:w-[80%] mx-auto">
    <div className="w-4 h-4 border-2 border-pink-400 rounded-full"></div>
    <div className="border-t border-dotted border-gray-400 flex-grow mx-2"></div>
    <div className="w-4 h-4 border-2 border-pink-400 rounded-full"></div>
  </div>

  {/* Paragraph */}
  <p className="text-gray-700 max-w-3xl mx-auto mb-10">
    Where convenience and compassion meet, you do not have to worry about
    running to the clinic or dealing with a stressed pet during your trip
    to the clinic. Our home veterinary services at MumVets aim to make pet
    care convenient, accessible, and hassle-free.
  </p>

  {/* Content Section */}
  <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
    {/* Image */}
    <div className="w-full md:w-1/2 flex items-center justify-center">
      <img src={Group_pic} alt="Vet Services at Home" className="w-90 object-cover rounded-lg" />
    </div>

    {/* Accordions */}
    <div className="w-full md:w-1/2 text-left space-y-6 md:pt-15">
      {/* Item 1 */}
      <div onClick={() => toggleOpen(0)} className="cursor-pointer">
        <div className="flex items-center gap-2">
          {openIndex === 0 ? (
            <RemoveIcon className="text-black" />
          ) : (
            <AddIcon className="text-black" />
          )}
          <h3 className="font-semibold">
            Vet Care in Mumbai – At Your Door
          </h3>
        </div>
        {openIndex === 0 && (
          <p className="italic text-pink-500 mt-2">
            We provide professional vet home visit Mumbai services to
            major areas of the city. From Churchgate to Mira Road,
            irrespective of whether you are in Bandra, Andheri, or
            Borivali—we’ve got you covered.
          </p>
        )}
      </div>

      {/* Item 2 */}
      <div onClick={() => toggleOpen(1)} className="cursor-pointer">
        <div className="flex items-center gap-2">
          {openIndex === 1 ? (
            <RemoveIcon className="text-black" />
          ) : (
            <AddIcon className="text-black" />
          )}
          <h3 className="font-semibold">
            Experienced Veterinary Doctor in Mumbai
          </h3>
        </div>
        {openIndex === 1 && (
          <p className="italic text-pink-500 mt-2">
            Our staff consists of some of the finest veterinary doctors in
            Mumbai, professionally trained to diagnose and treat a variety
            of conditions with compassion and professionalism.
          </p>
        )}
      </div>

      {/* Item 3 */}
      <div onClick={() => toggleOpen(2)} className="cursor-pointer">
        <div className="flex items-center gap-2">
          {openIndex === 2 ? (
            <RemoveIcon className="text-black" />
          ) : (
            <AddIcon className="text-black" />
          )}
          <h3 className="font-semibold">
            Comfort of Home, Quality of Clinic
          </h3>
        </div>
        {openIndex === 2 && (
          <p className="italic text-pink-500 mt-2">
            Pets are more calm at home, which allows our pet doctor home
            visit team to provide effective care without extra stress.
          </p>
        )}
      </div>
    </div>
  </div>
</div>


      <div className="py-10 px-5 md:px-20 md:w-[90%] mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-10">
          Our Home Vet Services
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
