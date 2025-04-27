import dog from "../assets/dog.svg";
import group2 from "../assets/Group 8732.svg";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { Helmet } from "react-helmet";
import vet_home from "../assets/vet_home.jpg";
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
  
      <div className="bg-[#8E99F4] p-6 rounded-3xl w-[95%] md:w-[75%] mx-auto relative shadow-lg items-center gap-6 md:p-10 my-10">
        {/* Text Section */}
        <h2 className="text-2xl md:text-3xl font-semibold">
          Vet Home Visit in Mumbai – Expert Care from MumVets
        </h2>
        <p className="md:ml-8 mt-4 text-sm md:text-base text-white mb-5 w-[90%]">
          Your pets are not only animals, but they are members of your family.
          And like any family member, they ought to be treated with maximum
          comfort, quality treatment, and copious amounts of love. And that's
          precisely why we at MumVets, we offer home visit vet services in
          Mumbai—because great pet care shouldn't involve stressful drives or
          long wait times at clinics.
          <br />
        </p>
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-[50%] flex flex-col justify-center">
            {/* <p className="mt-2 text-sm md:text-base text-white">
            Get the expert vet consultation near you{" "}
            <strong className="text-black">INR 199</strong>.
          </p> */}

            <p className="md:ml-8 text-sm md:text-base text-white">
              Our staff of seasoned veterinary practitioners delivers
              professional home veterinary care directly to your home. From dog
              home vaccination to check-ups for wellness and low-level
              treatments, we make sure that your pet is given one-on-one care in
              the safety of their own environment.
            </p>

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
              src={vet_home}
              alt="Vet Consultation"
              className="rounded-lg shadow-lg w-[400px]"
            />
          </div>
        </div>
        {/* Decorative Elements */}
        <div className="absolute top-10 right-4 flex space-x-2 text-xl md:text-6xl rotate-30">
          <span>🐾</span>
          <span>🐾</span>
        </div>
      </div>

      <div className="py-10 px-4 md:px-20 md:w-[80%] mx-auto">
        <h2 className=" text-2xl font-bold mx-auto text-center mb-8">
          Why Choose MumVets for Vet Services at Home?
        </h2>
        <p className=" text-base mb-15">
          Where convenience and compassion meet, you do not have to worry about
          running to the clinic or dealing with a stressed pet during your trip
          to the clinic. Our home veterinary services at MumVets aim to make pet
          care convenient, accessible, and hassle-free.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          <div className="flex flex-col items-center border rounded-xl p-5">
            <MoreHorizIcon className="text-5xl mb-2" />
            <h2 className="font-bold"> Vet Care in Mumbai – At Your Door</h2>
            <p className="text-sm mt-2">
              We provide professional vet home visit Mumbai services to major
              areas of the city. From Churchgate to Mira Road, irrespective of
              whether you are in Bandra, Andheri, or Borivali—we&#39;ve got you
              covered.
            </p>
          </div>

          <div className="flex flex-col items-center border rounded-xl p-5">
            <LaptopMacIcon className="text-5xl mb-2" />
            <h2 className="font-bold">
              Experienced Veterinary Doctor in Mumbai
            </h2>
            <p className="text-sm mt-2">
              Our staff consists of some of the finest veterinary doctors in
              Mumbai, professionally trained to diagnose and treat a variety of
              conditions with compassion and professionalism.
            </p>
          </div>

          <div className="flex flex-col items-center border rounded-xl p-5">
            <InfoOutlinedIcon className="text-5xl mb-2" />
            <h2 className="font-bold">Comfort of Home, Quality of Clinic</h2>
            <p className="text-sm mt-2">
              Pets are more calm at home, which allows our pet doctor home visit
              team to provide effective care without extra stress.
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
        <h2 className=" text-2xl font-bold mx-auto text-center mb-8">
          What’s Included in Our Home Veterinary Services?
        </h2>
        <p className=" text-base mb-15 text-center">
          We offer a wide range of at home vet services that focus on
          prevention, early detection, and comfort.
        </p>
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
                1. Dog and Cat Vaccination at Home
              </h3>
              <p className="text-sm">
                Protect your pet from preventable diseases. Our pet vaccination
                services include: <br />
                ● 7-in-1 Vaccine for Dogs <br />
                ● Anti-Rabies Vaccine <br />
                ● Tricat Vaccine for Cats <br />● Vaccinations are administered
                during scheduled vet doctor home visits after a quick health
                check to ensure your pet is fit and ready.
              </p>
            </div>

            <div className="bg-blue-100 p-6 rounded-xl shadow-md">
              <h3 className="font-semibold mb-2">
                2. General Health Check-ups
              </h3>
              <p className="text-sm">
                Regular vet visits are key to long-term pet care in Mumbai. Our
                home veterinary team conducts thorough health check-ups,
                monitors weight, screens for common illnesses, and provides
                parasite control (fleas, ticks, worms).
              </p>
            </div>

            <div className="bg-blue-100 p-6 rounded-xl shadow-md">
              <h3 className="font-semibold mb-2">
                3. Minor Illness and Injury Care
              </h3>
              <p className="text-sm">
                For small wounds, skin issues, or minor ailments, our vet on
                call team is just a message away. No need to leave your
                house—just book a pet doctor at home and we’ll take care of the
                rest.
              </p>
            </div>

            <div className="bg-blue-100 p-6 rounded-xl shadow-md">
              <h3 className="font-semibold mb-2">4. Senior Pet Support</h3>
              <p className="text-sm">
                Older pets have unique needs. From arthritis management to diet
                changes, our home veterinary services are tailored to provide
                compassionate care for aging pets.
              </p>
            </div>
          </div>
        </div>
      </div>




      <div class="p-6 rounded-lg md:w-[80%] mx-auto my-10">
  <h2 class="text-2xl font-bold mb-4">Bonus: Pet Grooming at Home in Mumbai</h2>

  <p class="text-gray-700 mb-6">
    MumVets also offers <span class="font-semibold">pet grooming at home Mumbai</span> services. Keep your
    pet clean, stylish, and happy with expert grooming—no travel required.
    It’s pet pampering made simple.
  </p>

  <h3 class="text-xl font-semibold mb-2">How to Book a Vet Home Visit</h3>

  <p class="text-gray-700 mb-4">
    Getting started is easy:
  </p>

  <ol class="list-decimal list-inside text-gray-700 mb-6 space-y-1">
    <li>Visit <a href="https://mumvets.com/" target="_blank" class="text-blue-500 underline">https://mumvets.com/</a></li>
    <li>Choose your service</li>
    <li>Select a time that suits you</li>
    <li>Our veterinary doctor home visit team arrives with everything needed</li>
  </ol>

  <p class="text-gray-700 mb-6">
    Whether it’s a vaccination, a quick check-up, or grooming, we bring vet services at home you can trust.
  </p>

  <h3 class="text-xl font-semibold mb-2">MumVets – Where Care Comes Home</h3>

  <p class="text-gray-700">
    Because your pets deserve expert treatment in the place they love most—home.
  </p>
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
