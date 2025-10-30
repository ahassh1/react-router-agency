import React from "react";
import bannerImg from "../../assets/banner.png";

const HeroSection = () => {
  return (
    <div className="max-w-screen-2xl mx-auto container flex flex-col lg:flex-row items-center justify-between px-4 py-14 bg-sky-50 ">
      {/* first section */}
      <div>
        <h1 className="font-bold text-4xl">Creative Web Design For Business</h1>
        <p className="text-gray-500  my-4 md:my-5 md:w-3/4 lg:w-2/3">
          Join thousands of business already growing with our solutions. Let's
          help you take your business to the next level
        </p>
        <div className="my-5 md:my-0 ">
          <button className="bg-blue-500 cursor-pointer px-4 py-2 transition-all duration-300 border border-blue-400 text-white rounded mr-4 hover:bg-blue-700">
            Get Started
          </button>
          <button className="bg-white px-4 py-2 transition border border-blue-500 hover:bg-blue-500 hover:text-white rounded cursor-pointer">
            Contact Us
          </button>
        </div>
      </div>
      {/* second section */}
      <div>
        <img src={bannerImg} alt="" />
      </div>
    </div>
  );
};

export default HeroSection;
