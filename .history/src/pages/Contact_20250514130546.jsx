import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
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
    <div className="relative bg-[#222831] text-white mx-auto flex flex-col md:flex-row items-center justify-center w-full py-30 px-20 md:gap-12 border">
      {/* Contact Us Label (Top Left) */}
      <h5 className="absolute top-8 left-22 border border-[#948979] rounded-3xl text-[#948979] px-4 py-1 text-sm">
        Contact Us
      </h5>

      {/* Left Section */}
      <div className="w-full md:w-1/2 p-6 border rounded-lg">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
            className="w-full h-12 p-3 text-lg rounded-md border-none bg-[#393e46] text-white placeholder-[#948979] text-center"
          />
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
            className="w-full h-12 p-3 text-lg rounded-md border-none bg-[#393e46] text-white placeholder-[#948979] text-center"
          />
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Enter your message"
            required
            className="w-full p-3 text-lg rounded-md border-none bg-[#393e46] text-white placeholder-[#948979] h-36 resize-none text-center"
          ></textarea>
          <button
            type="submit"
            className="py-3 px-6 bg-[#007bff] text-white rounded-md transition-all duration-300 hover:bg-[#0056b3] w-fit self-center"
          >
            Submit
          </button>
        </form>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 p-6 border rounded-lg flex flex-col items-center justify-center gap-6">
        <p className="text-[#948979] text-2xl font-bold">example@email.com</p>
        <div className="w-1/2 h-px bg-[#948979]"></div>
        <p className="text-[#948979] text-2xl font-bold">+91 9876543210</p>
      </div>
    </div>
  );
}

export default Contact;
