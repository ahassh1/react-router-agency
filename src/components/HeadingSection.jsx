import React from "react";

const HeadingSection = ({ subheading, heading, description }) => {
  return (
    <div>
      {/* heading seciton  */}
      <div className="text-center space-y-2">
        <p className="font-semibold uppercase text-blue-500 text-[15px] md:text[18px]">
          {subheading}
        </p>
        <h1 className="font-bold text-3xl lg:text-4xl text-gray-800 md:w-3/4 mx-auto">
          {heading}
        </h1>
        {description && (
          <p className="text-gray-400 mt-4 md:w-1/2 mx-auto ">{description}</p>
        )}
      </div>
    </div>
  );
};

export default HeadingSection;
