import React, { useState } from "react";
import bannerImg from "../../assets/banner.png";
import { FaRegCirclePlay } from "react-icons/fa6";

const HeroSection = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <div className="max-w-screen-2xl mx-auto container flex flex-col md:flex-row items-center justify-between px-4 py-14 bg-sky-50">
      {/* Left Section */}
      <div>
        <h1 className="font-bold text-4xl">Creative Web Design For Business</h1>
        <p className="text-gray-500 my-4 md:my-5 md:w-3/4 lg:w-2/3">
          Join thousands of businesses already growing with our solutions. Let’s
          help you take your business to the next level.
        </p>

        <div className="gap-3 flex flex-col md:flex-row">
          <button
            className="bg-blue-500 cursor-pointer px-4 py-2 transition-all duration-300 border border-blue-400 text-white rounded
            hover:bg-blue-700"
          >
            Get Started
          </button>
          <button
            className="bg-white px-4 py-2 transition border
            border-blue-500 hover:bg-blue-500 hover:text-white
            rounded cursor-pointer"
          >
            Contact Us
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div className="relative lg:w-1/2 flex justify-end mt-10 md:mt-0">
        <img src={bannerImg} alt="banner" className="rounded-lg shadow-md" />
        <button
          onClick={openModal}
          className="absolute inset-0 flex justify-center items-center cursor-pointer"
        >
          <FaRegCirclePlay className="text-white text-5xl hover:text-red-600 transition-colors" />
        </button>
      </div>

      {/* Modal Section */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/25 z-50 backdrop-blur-sm">
          <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg max-w-xl w-full relative">
            <button
              onClick={closeModal}
              className="absolute top-3 text-lg right-3 px-2 hover:text-red-600 bg-black text-white rounded-full"
            >
              &times;
            </button>
            <div className="aspect-video">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeroSection;
