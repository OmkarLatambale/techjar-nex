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
    <div className="bg-[#222831] text-white  mx-auto flex flex-col md:flex-row items-start justify-between  w-full border pt-55">
      <h5 className="relative -top-30 left-20 border  rounded-3xl border-[#948979] back text-[#948979] w-30 px-4 py-0.5 text-xs ml-2">
        Contact Us
      </h5>
      {/* Left Section */}
      <div className="w-1/2  border p-5 h-120 pt-10">
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

      {/* Right Section */}
      <div className="w-full md:w-1/2 mt-10  pl-0 md:pl-8 flex flex-col items-start justify-center gap-4 border justify-center h-120">
        <p className="text-[#948979] text-2xl font-bold">example@email.com</p>
        <p className="text-[#948979] text-2xl font-bold">+91 9876543210</p>
      </div>
    </div>
  );
}

export default Contact;
