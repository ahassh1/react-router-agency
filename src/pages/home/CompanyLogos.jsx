import React from "react";
import HeadingSection from "../../components/HeadingSection";
import {
  FaApple,
  FaGoogle,
  FaAmazon,
  FaMicrosoft,
  FaFacebook,
} from "react-icons/fa";
const CompanyLogos = () => {
  const logos = [
    { icon: FaApple, name: "Apple" },
    { icon: FaGoogle, name: "Google" },
    { icon: FaAmazon, name: "Amazon" },
    { icon: FaMicrosoft, name: "Microsoft" },
    { icon: FaFacebook, name: "Facebook" },
  ];
  return (
    <div className="bg-sky-50 max-w-screen-2xl container mx-auto py-20 px-5">
      <HeadingSection
        subheading="Our trusted partners"
        heading="Companies we have worked with"
        description="We have paetnered with some of the most inovative and leading companies to bring the best solutions to you"
      />
      {/* Logo container */}
      <div className="relative overflow-hidden p-8">
        <div className="flex justify-around md:space-x-14 space-x-8 items-center animate-scroll">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="flex justify-center items-center bg-white rounded-full p-6 w-24 h-24 hover:scale-110 transition transform border border-blue-300 shadow-md"
            >
              <logo.icon className="text-blue-500 text-4xl" title={logo.name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompanyLogos;
