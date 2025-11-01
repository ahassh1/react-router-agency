import React from "react";
import { FiSettings, FiCode, FiSmartphone, FiCloud } from "react-icons/fi";
const tools = [
  {
    icon: FiSettings,
    title: "Customizable Settings",
    description:
      "Easily adjust preferences to tailor the application to your needs.",
  },
  {
    icon: FiCode,
    title: "Developer Friendly",
    description:
      "Built with developers in mind, offering robust APIs and documentation.",
  },
  {
    icon: FiSmartphone,
    title: "Mobile Responsive",
    description:
      "Optimized for all devices, ensuring a seamless experience on the go.",
  },
  {
    icon: FiCloud,
    title: "Cloud Integration",
    description:
      "Seamlessly connect with popular cloud services for enhanced functionality.",
  },
];

const ToolsSection = () => {
  return (
    <div className="max-w-screen-2xl container mx-auto py-20 px-5">
      {/* heading seciton  */}
      <div className="text-center space-y-2">
        <p className="font-semibold uppercase text-blue-500 text-[15px] md:text[18px]">
          The tools you need
        </p>
        <h1 className="font-bold text-3xl lg:text-4xl text-gray-800">
          All-in-one Solution for Your Projects
        </h1>
      </div>

      {/* render tools here */}
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 text-center mt-12">
        {tools.map((tool, index) => (
          <div
            key={index}
            className="p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
          >
            <tool.icon className="text-blue-500 text-5xl mb-4 mx-auto" />
            <h3 className="font-semibold text-lg mb-2">{tool.title}</h3>
            <p className="text-gray-600 text-sm">{tool.description}</p>
          </div>
        ))}
      </div>
      {/* button section */}
      <div className="text-center mt-10">
        <button
          className="bg-blue-500 cursor-pointer px-4 py-2 transition-all duration-300 border border-blue-400 text-white rounded-sm
            hover:bg-blue-700"
        >
          Explore More
        </button>
      </div>
    </div>
  );
};

export default ToolsSection;
