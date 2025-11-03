import React from "react";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from "react-router";

const Register = () => {
  return (
    <div className="justify-center items-center min-h-screen bg-sky-50  flex">
      <div className="w-full max-w-md p-8 bg-white  border-gray-300  border  items-center space-y-3 rounded-lg  text-black mx-auto">
        <h2 className="text-2xl font-bold text-center">Login Please</h2>
        {/* registration form  */}
        <form className="space-y-4">
          <div>
            <label className="font-semibold text-lg mb-2 block">Email:</label>
            <input
              type="text"
              className="w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-blue-400 focus:ring-1"
              placeholder="Enter Your Email"
            />
          </div>
          <div>
            <label className="font-semibold text-lg block">Password:</label>
            <input
              type="text"
              className="w-full px-4 py-2 border my-2 border-gray-300 rounded-md focus:outline-blue-400 focus:ring-1"
              placeholder="Enter Your Password"
            />
          </div>
          <button
            className="w-full py-2 text-white rounded-md hover:bg-blue-700 cursor-pointer bg-blue-500"
            type="submit"
          >
            Sign Up
          </button>
          {/* social login */}
          <div className="text-center space-y-3.5">
            <h2 className="text-gray-600 ">Or Sign Up With</h2>
            <div className="flex flex-row space-x-3 justify-center my-5">
              <div className="flex justify-center gap-4">
                <button className="flex px-5 items-center bg-red-500 justify-center gap-2 py-2 rounded-md transition duration-300 hover:bg-red-600 cursor-pointer text-white">
                  <FaGoogle />
                  <span>Google</span>
                </button>
              </div>
              <div className="flex justify-center gap-4">
                <button className="flex px-5 items-center bg-black justify-center gap-2 py-2 rounded-md transition duration-300 cursor-pointer text-white">
                  <FaGithub />
                  <span>GitHub</span>
                </button>
              </div>
              <div className="flex justify-center gap-4">
                <button className="flex px-5 items-center bg-blue-600 justify-center gap-2 py-2 rounded-md transition duration-300 hover:bg-blue-700 cursor-pointer text-white">
                  <FaFacebook />
                  <span>Facebook</span>
                </button>
              </div>
            </div>
            <div>
              <h3 className="text-gray-600 font-semibold">
                Already Have An Account? Please{" "}
                <Link to="/login" className="text-blue-500 hover:underline ">
                  Sign In
                </Link>
              </h3>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
