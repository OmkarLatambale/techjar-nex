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
    <div className="bg-[#222831] text-white p-10 rounded-lg mx-auto flex flex-col md:flex-row items-start justify-between mt-10 md:mt-20 max-w-5xl border">
      {/* Left Section */}
      <div className="w-full md:w-1/2 pr-0 md:pr-8 border">
        <h5 className="text-[#948979] text-sm font-semibold mb-6 border border-[#948979] rounded-3xl px-5 py-1 w-fit">
          Contact Us
        </h5>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
            className="w-full h-10 p-3 text-lg rounded-md border-none bg-[#393e46] text-white placeholder-[#948979] text-center"
          />
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
            className="w-full h-10 p-3 text-lg rounded-md border-none bg-[#393e46] text-white placeholder-[#948979] text-center"
          />
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Enter your message"
            required
            className="w-full  p-3 text-lg rounded-md border-none bg-[#393e46] text-white placeholder-[#948979] h-36 resize-none text-center"
          ></textarea>
          <button
            type="submit"
            className="py-3 px-6 bg-[#007bff] text-white rounded-md transition-all duration-300 hover:bg-[#0056b3] w-fit self-center"
          >
            Submit
          </button>
        </form>
      </div>

      {/* Vertical Divider */}
      <div className="hidden md:block w-px bg-[#948979] mx-8"></div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 mt-10 md:mt-0 pl-0 md:pl-8 flex flex-col items-start justify-center gap-4">
        <h3 className="text-xl font-semibold">Email</h3>
        <p className="text-[#948979] text-lg">example@email.com</p>
        <h3 className="text-xl font-semibold mt-6">Contact Number</h3>
        <p className="text-[#948979] text-lg">+91 9876543210</p>
      </div>
    </div>
  );
}

export default Contact;
