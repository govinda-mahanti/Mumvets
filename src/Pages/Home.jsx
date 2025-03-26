import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import dog from "../assets/home/dog 1.svg";
import Avatarss from "../assets/home/Avatarss 1.svg";
import pawss1 from "../assets/home/pawss 3.png";
import pawss2 from "../assets/home/pawss 4.png";
import clinic from "../assets/home/clinic 1.svg";
import nn from "../assets/home/99.svg";
import CheckIcon from "@mui/icons-material/Check";
import AddIcon from "@mui/icons-material/Add";
import { useSelector } from "react-redux";
import right from "../assets/home/right.svg";
import add from "../assets/home/add.svg";

const Home = () => {
  const navigate = useNavigate();
  const testimonials = [
    // {
    //   text: "Aaryaman is a good team leader, and works on the given task with almost priority. His team has good social media management skills and his SEO team has room to grow. Overall, I recommend him and his team, they are good 👍",
    //   name: "Shalini Batakala",
    // },
    {
      text: "Loved their home vet visit service. It made the whole process easy and stress-free for my pet. Highly recommended! 🏡",
      name: "Pooja Reddy",
    },
    {
      text: "Excellent service and very professional team. Highly recommended for any kind of pet care needs. They take great care of the animals! 🐶",
      name: "Rahul Verma",
    },
    {
      text: "I am very satisfied with the services provided. The team is responsive, and they truly care about the well-being of the pets. 🌟",
      name: "Sneha Kapoor",
    },
    {
      text: "Their online consultation was a lifesaver! Quick responses and expert advice. Will definitely use their service again. 🐾",
      name: "Amit Sharma",
    },
    {
      text: "Loved their home vet visit service. It made the whole process easy and stress-free for my pet. Highly recommended! 🏡",
      name: "Pooja Reddy",
    },
  ];

  const [slidesPerView, setSlidesPerView] = useState(1);
  const sliderRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft = current * sliderRef.current.offsetWidth;
    }
  }, [current]);

  useEffect(() => {
    const updateSlidesPerView = () => {
      if (window.innerWidth < 640) {
        setSlidesPerView(1);
      } else if (window.innerWidth < 1024) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(3);
      }
    };

    updateSlidesPerView();
    window.addEventListener("resize", updateSlidesPerView);
    return () => window.removeEventListener("resize", updateSlidesPerView);
  }, []);

  const totalSlides = Math.ceil(testimonials.length / slidesPerView);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleDotClick = (index) => {
    setCurrent(index);
  };

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
      <div className="w-full relative rounded-lg md:max-w-[95%] p-10 md:p-0 h-full mt-10 mx-auto flex flex-col md:flex-row items-center">
        <div className="w-full md:w-[40%] flex items-end justify-items-end h-full">
          <img src={dog} alt="Dog" className="rounded-lg  h-auto md:ml-15" />
        </div>

        {/* Text Content */}
        <div className="w-full md:pr-[100px] md:w-[60%] md:pl-6 mt-6 md:mt-0 flex items-end flex-col md:text-left">
          <h1 className="text-[29px] md:text-[64px] font-bold text-gray-800 leading-snug text-right">
            Veterinary Company <br /> in Mumbai
          </h1>
          <p className="text-gray-600 mt-2 text-right text-sm md:text-xl">
            As Mumbai’s leading animal health company, Munvets is driven by a
            singular purpose: to nurture Mumbai and humankind by advancing care
            for animals.
          </p>

          {/* Reviews Section */}
          <div className="mt-4 bg-orange-300 px-4 py-2 rounded-lg flex flex-col items-center justify-center md:justify-start w-max mx-auto md:mx-0">
            <div className="flex -space-x-2">
              {/* Replace with actual avatars */}
              <img className="w-[200px] " src={Avatarss} alt="User 1" />
            </div>
            <div className="ml-3 text-gray-800 text-2xl">100+ Reviews</div>
          </div>
        </div>
      </div>

      <div className="bg-orange-300 p-6 md:p-[40px] rounded-xl w-[90%] md:w-[83%] mx-auto">
        {/* Header Section */}
        <div className="flex md:flex-row flex-col justify-between items-center mb-5">
          <h2 className="text-3xl font-bold text-gray-800 mb-10 md:mb-0">
            Welcome to Mumvets
          </h2>
          <div className="flex items-center space-x-2  px-4 py-2 rounded-lg ml-auto md:ml">
            <img src={pawss1} alt="" className="w-[30px]" />
            <span className="text-gray-800 font-medium">View More</span>
            <img src={pawss2} alt="" className="w-[30px]" />
          </div>
        </div>

        <div className="grid md:grid-cols-3 grid-rows-7 gap-6 md:gap-[30px]">
          <div className="bg-white p-6 rounded-3xl shadow-lg flex flex-col row-span-7">
            <img src={clinic} alt="" className="rounded-lg w-full" />
            <h3 className="text-xl md:text-2xl font-semibold mt-3">
              Home Vet Visit
            </h3>
            <p className="text-gray-600  text-sm sm:text-base mt-1 mb-5">
              We bring the clinic to you! Our home vet visits offer
              personalized, compassionate care for your pets without the hassle
              of travel. (Pay at Home)
            </p>
            <button
              className="mt-auto bg-black text-white px-4 py-2 rounded-2xl w-2/3 mx-auto hover:bg-gray-800"
              onClick={handleBooking}
            >
              Book Now
            </button>
          </div>

          <div className="bg-white p-4 md:p-8 rounded-3xl shadow-lg flex flex-col justify-between row-span-4 relative">
            <div className="absolute top-4 right-4 ">
              <img src={right} alt="" className="w-[50px]" />
            </div>
            <h3 className="text-xl md:text-2xl font-semibold">
              Online Vet <br className="md:hidden"/> Consultation
            </h3>
            <p className="text-gray-600  text-sm sm:text-base  mt-1">
              Get the expert vet consultation near you INR 199.
            </p>
            <button
              className="mt-auto bg-black text-white px-4 py-2 rounded-2xl w-2/3 mx-auto hover:bg-gray-800"
              onClick={handleBooking}
            >
              Book Now
            </button>
          </div>

          <div className="bg-white p-4 md:p-8 rounded-3xl shadow-lg flex flex-col justify-between row-span-4 relative">
            <div className="absolute top-4 right-4 ">
              <img src={add} alt="" className="w-[50px]" />
            </div>
            <h3 className="text-xl md:text-2xl font-semibold">
              Spay & Neuter <br className="md:hidden"/> Surgery
            </h3>
            <p className="text-gray-600  text-sm sm:text-base mt-1">
              We provide compassionate spay and neuter services to help your pet
              live a longer, healthier, and happier life.
            </p>
            <button
              className="mt-2 md:mt-auto bg-black text-white px-4 py-2 rounded-2xl w-2/3 mx-auto hover:bg-gray-800"
              onClick={handleBooking}
            >
              Book Now
            </button>
          </div>

          <div className="bg-white p-6 rounded-3xl shadow-lg flex flex-col md:flex-col items-center justify-between row-span-3 md:col-span-2">
            <button
              className="bg-black text-white ml-auto px-3 py-1 rounded-lg text-sm mb-3"
              onClick={() => window.open("https://g.co/kgs/fXccRSb", "_blank")}
            >
              Write a Review ✍️
            </button>

            <p className="text-gray-700 sm:text-base text-sm">
              <strong>Aaryaman</strong> is a good team leader and works on the
              given task with almost priority. His team has good social media
              management skills and his SEO team has room to grow. Overall, I
              recommend him and his team, they are good. 👍
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto text-center mt-12 mb-16 px-4">
        <h2 className="text-3xl font-bold mb-6">Testimonials</h2>

        <div className="bg-pink-100 p-6 sm:p-8 rounded-xl shadow-lg relative overflow-hidden">
          <div className="relative w-full overflow-hidden">
            <div
              ref={sliderRef}
              className="flex overflow-hidden cursor-grab"
              onMouseDown={handleMouseDown}
              onMouseLeave={handleMouseUp}
              onMouseUp={handleMouseUp}
              onMouseMove={handleMouseMove}
              style={{ scrollBehavior: "smooth" }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="w-full sm:w-1/2 md:w-1/3 px-2 flex-shrink-0"
                >
                  <div className="bg-white p-6 m-4 sm:m-6 rounded-xl shadow-lg h-[300px] flex flex-col items-center">
                    <img
                      src={nn}
                      alt=""
                      className="w-12 h-12 rounded-full mb-2"
                    />
                    <p className="text-sm sm:text-base">{testimonial.text}</p>
                    <h4 className="font-semibold mt-auto">
                      {testimonial.name}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center mt-4 space-x-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                className={`h-3 w-3 rounded-full transition-colors ${
                  index === current ? "bg-gray-800" : "bg-gray-400"
                }`}
                onClick={() => handleDotClick(index)}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
