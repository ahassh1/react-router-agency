import React from "react";

const HeadingSection = ({ subheading, heading, description }) => {
  return (
    <div>
      {/* heading seciton  */}
      <div className="text-center space-y-2">
        <p className="font-semibold uppercase text-blue-500 text-[15px] md:text[18px]">
          {subheading}
        </p>
        <h1 className="font-bold text-3xl lg:text-4xl text-gray-800">
          {heading}
        </h1>
        {description && <p className="text-gray-400 mt-4">{description}</p>}
      </div>
    </div>
  );
};

export default HeadingSection;
