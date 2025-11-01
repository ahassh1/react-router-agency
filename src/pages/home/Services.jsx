import React from "react";
import HeadingSection from "../../components/HeadingSection";
import { FiActivity, FiCompass, FiTruck, FiCalendar } from "react-icons/fi";

const services = [
  {
    icon: FiCalendar,
    title: "Customizable Settings",
    description:
      "Nibh nullam vitae semper pharetra sit enim id. Ut eu non massa nec. Proin eget semper orci suspendisse in ornare adipiscing phasellus mauris. Velit faucibus at habitasse tempor sit odio ac commodo dui. ",
  },
  {
    icon: FiCompass,
    title: "Developer-Friendly",
    description:
      "Sed et pulvinar donec sed et, nisl dolor amet. Mollis aliquet volutpat ullamcorper ac sed lectus iaculis. Fringilla sed placerat commodo bibendum integer. Diam ut magna eleifend consectetur. ",
  },
  {
    icon: FiActivity,
    title: "Responsive Design",
    description:
      "Nunc amet, tempor morbi ligula ut faucibus gravida. Accumsan, suspendisse mus quisque pellentesque id vulputate hendrerit. Donec ipsum nibh elementum platea proin egestas gravida consectetur sit.",
  },
  {
    icon: FiTruck,
    title: "Cloud Integration",
    description:
      "Pellentesque auctor adipiscing lacus viverra. Neque, nulla in amet eget. Arcu, nibh purus urna amet sagittis quis tellus etiam eget. Ultrices egestas a tristique aliquet odio varius. ",
  },
];
const Services = () => {
  return (
    <div className="max-w-screen-2xl bg-white container mx-auto py-20 px-5">
      <HeadingSection
        subheading="Our Services"
        heading="Explore Our Range Of Professional Services Tailored To Meet Your Business Needs"
        description="Discover a variety of services designed to help your business thrive in today's competitive market. From consulting to implementation, we have you covered.
"
      />
      {/* services container  */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 my-14 mx-auto md:w-4/5">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex items-center p-6 hover:shadow-xl flex-col space-y-4  rounded-lg cursor-pointer transition-shadow border border-gray-100"
          >
            <service.icon className="text-3xl sm:text-4xl text-blue-400 " />
            <p className="text-gray-600 my-2">{service.description}</p>
          </div>
        ))}
      </div>

      {/* button */}
      <div className="text-center">
        <button className="bg-blue-600 text-white px-7 py-2.5 rounded-md  hover:bg-blue-700 transition cursor-pointer">
          Explore More
        </button>
      </div>
    </div>
  );
};

export default Services;
