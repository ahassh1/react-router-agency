import React from "react";
import errorImage from "../assets/rocket-icon.png";
import { Link } from "react-router";
const ErrorPage = ({ message = "Page not found", code = "404" }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-5 text-center">
      <img src={errorImage} alt="rocker image" />
      <h1 className="text-4xl font-bold to-gray-700">
        {code} {message}
      </h1>
      <p className="text-gray-500 md:w-2/5 w-full my-4 mx-auto">
        Rhoncus morbi et augue nec, in id ullamcorper at sit. Condimentum sit
        nunc in eros scelerisque sed. Commodo in viverra nunc, ullamcorper ut.
        Non, amet, aliquet scelerisque nullam sagittis, pulvinar. Fermentum
        scelerisque sit consectetur hac mi. Mollis leo eleifend ultricies purus
        iaculis.
      </p>
      <Link
        to="/"
        className="bg-green-400 hover:bg-green-500 cursor-pointer px-6 py-3 text-white rounded-md shadow-md transition duration-300 transform hover:scale-105"
      >
        Go to Home page
      </Link>
    </div>
  );
};

export default ErrorPage;
