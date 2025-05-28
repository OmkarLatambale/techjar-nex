import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    ogName: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  return (
    <div className="relative bg-[#222831] flex flex-col md:flex-row items-center justify-center w-full px-4 sm:px-8 md:px-16 py-16 gap-10 ">
      {/* Contact Us Label */}
      <h5 className="absolute top-4 left-4 sm:top-8 sm:left-12 border border-[#948979] rounded-3xl text-[#948979] px-4 py-1 text-xs sm:text-sm lg:ml-20">
        Contact Us
      </h5>

      {/* Left Section */}
      <div className="w-full md:w-1/2 p-4 sm:p-6 border-b md:border-b-0 md:border-r border-[#948979]">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Fullname"
            required
            className="w-full h-12 p-3 text-base sm:text-lg rounded-md bg-[#393e46] text-[#dfd0b8] border border-[#948979] placeholder-[#948979] text-center"
          />
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            required
            className="w-full h-12 p-3 text-base sm:text-lg rounded-md bg-[#393e46] text-[#dfd0b8] border border-[#948979] placeholder-[#948979] text-center"
          />
          <input
            type="text"
            id="organizationName"
            name="ogName"
            value={formData.ogName}
            onChange={handleChange}
            placeholder="Organization Name"
            required
            className="w-full h-12 p-3 text-base sm:text-lg rounded-md bg-[#393e46] text-[#dfd0b8] border border-[#948979] placeholder-[#948979] text-center"
          />
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Enter your message"
            required
            className="w-full p-3 text-base sm:text-lg rounded-md text-[#dfd0b8] border border-[#948979] bg-[#393e46] placeholder-[#948979] h-36 resize-none text-center"
          ></textarea>
          <button
            type="submit"
            className="py-3 px-6 bg-[#393e46] text-[#dfd0b8] rounded-md transition-all duration-300 w-full border border-[#948979]"
          >
            Submit
          </button>
        </form>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 p-4 sm:p-6 flex flex-col items-center justify-center gap-4">
        <p className="text-[#948979] text-lg sm:text-2xl font-bold text-center">
          example@email.com
        </p>
        <div className="w-1/2 h-px bg-[#948979]"></div>
        <p className="text-[#948979] text-lg sm:text-2xl font-bold text-center">
          +91 9876543210
        </p>
      </div>
    </div>
  );
}

export default Contact;
