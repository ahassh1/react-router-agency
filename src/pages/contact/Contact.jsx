import React, { useState } from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for contacting us! We'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="bg-sky-50 min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-blue-600 uppercase font-semibold tracking-wide">
          Contact Us
        </h2>
        <h1 className="text-4xl font-bold text-gray-800 mt-2">
          Get in Touch With Us
        </h1>
        <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
          Have a question, feedback, or business inquiry? We’d love to hear from
          you! Fill out the form below or reach us through our contact info.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16 max-w-6xl mx-auto">
        {/* Contact Info */}
        <div className="space-y-6">
          <div className="flex items-start bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
            <FaEnvelope className="text-blue-600 text-3xl mt-1 mr-4" />
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                Email Address
              </h3>
              <p className="text-gray-600">support@polash.com</p>
            </div>
          </div>

          <div className="flex items-start bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
            <FaPhoneAlt className="text-blue-600 text-3xl mt-1 mr-4" />
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                Phone Number
              </h3>
              <p className="text-gray-600">+880-1810-909675</p>
            </div>
          </div>

          <div className="flex items-start bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
            <FaMapMarkerAlt className="text-blue-600 text-3xl mt-1 mr-4" />
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                Office Location
              </h3>
              <p className="text-gray-600">
                SkillerZone LLC, Mohakhali DOHS, Dhaka
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Input */}
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border-b-2 border-gray-300 focus:border-blue-500 outline-none p-2"
                placeholder="Your Name"
                required
              />
            </div>

            {/* Email Input */}
            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border-b-2 border-gray-300 focus:border-blue-500 outline-none p-2"
                placeholder="Your Email"
                required
              />
            </div>

            {/* Message Box */}
            <div className="relative">
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                className="w-full border-b-2 border-gray-300 focus:border-blue-500 outline-none p-2 resize-none"
                placeholder="Your Message"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-full transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Google Map (SkillerZone LLC, Mohakhali DOHS) */}
      <div className="mt-20 rounded-2xl overflow-hidden shadow-md max-w-6xl mx-auto">
        <iframe
          title="SkillerZone LLC Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.8999879328714!2d90.40556487507304!3d23.75063227867985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7a9b9dbf36d%3A0x4dbbc94f6ff5a58a!2sMohakhali%20DOHS%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1700000000000!5m2!1sen!2sbd"
          width="100%"
          height="350"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
};

export default Contact;
