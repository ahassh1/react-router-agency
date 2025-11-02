import React from "react";
import HeadingSection from "../../components/HeadingSection";
import {
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa";
import { Link } from "react-router";

const teamMembers = [
  {
    id: 1,
    image: "/images/members/person1.png",
    name: "John Doe",
    role: "CEO",
    linkedIn: "https://linkedin.com/in/johndoe",
    twitter: "https://twitter.com/johndoe",
    instagram: "https://instagram.com/johndoe",
    facebook: "https://facebook.com/johndoe",
  },
  {
    id: 2,
    image: "/images/members/person2.png",
    name: "Jane Smith",
    role: "CTO",
    linkedIn: "https://linkedin.com/in/janesmith",
    twitter: "https://twitter.com/janesmith",
    instagram: "https://instagram.com/janesmith",
    facebook: "https://facebook.com/janesmith",
  },
  {
    id: 3,
    image: "/images/members/person3.png",
    name: "Mark Johnson",
    role: "Designer",
    linkedIn: "https://linkedin.com/in/markjohnson",
    twitter: "https://twitter.com/markjohnson",
    instagram: "https://instagram.com/markjohnson",
    facebook: "https://facebook.com/markjohnson",
  },
  {
    id: 4,
    image: "/images/members/person4.png",
    name: "Emily Carter",
    role: "Developer",
    linkedIn: "https://linkedin.com/in/emilycarter",
    twitter: "https://twitter.com/emilycarter",
    instagram: "https://instagram.com/emilycarter",
    facebook: "https://facebook.com/emilycarter",
  },
];

const TeamSection = () => {
  return (
    <div className="max-w-screen-2xl container mx-auto py-20 px-5">
      <HeadingSection heading="Meet The Experts" subheading="Our Team" />
      {/* team section  */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-10">
        {teamMembers.map((member, i) => (
          <div
            key={i}
            className="bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer"
          >
            <img
              src={member.image}
              alt=""
              className="w-full h-48 object-cover hover:scale-105 transition transform"
            />
            {/* content  */}
            <div className="px-5">
              <h1 className="text-xl font-semibold text-gray-700 mb-2">
                {member.name}
              </h1>
              <h5 className="text-sm text-gray-500 mb-4">{member.role}</h5>
            </div>
            {/* social icons  */}
            <div className="flex space-x-3 px-5 text-center items-center ">
              <Link to={member.linkedIn}>
                <FaLinkedinIn className="text-blue-600 hover:text-blue-800" />
              </Link>
              <Link to={member.twitter}>
                <FaTwitter className="text-blue-600 hover:text-blue-800" />
              </Link>
              <Link to={member.instagram}>
                <FaInstagram className="text-blue-600 hover:text-blue-800" />
              </Link>
              <Link to={member.facebook}>
                <FaFacebookF className="text-blue-600 hover:text-blue-800" />
              </Link>
            </div>
            {/* contact button  */}
            <button className="bg-blue-500 text-white rounded-full  hover:bg-blue-700 px-5 py-2 transition duration-300 my-5">
              Contact {member.name.split(" ")[0]}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamSection;
