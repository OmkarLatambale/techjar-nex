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
    // Handle form submission (e.g., send data to API)
    console.log("Form Submitted:", formData);
  };

  return (
    <div className="bg-[#222831] text-white p-10 rounded-lg max-w-3xl mx-auto">
      <div>
        {" "}
        <h2 className="text-center mb-6 text-2xl">Contact Us</h2>
        <form onSubmit={handleSubmit} className="flex flex-col">
          <div className="mb-4">
            <label htmlFor="name" className="text-lg mb-2">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
              className="w-full p-3 text-lg rounded-md border-none bg-[#333] text-white"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="text-lg mb-2">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
              className="w-full p-3 text-lg rounded-md border-none bg-[#333] text-white"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="text-lg mb-2">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Enter your message"
              required
              className="w-full p-3 text-lg rounded-md border-none bg-[#333] text-white h-36 resize-none"
            ></textarea>
          </div>
          <button
            type="submit"
            className="py-3 px-6 bg-[#007bff] text-white rounded-md cursor-pointer transition-all duration-300 hover:bg-[#0056b3]"
          >
            Submit
          </button>
        </form>
      </div>
      <div>
        <h3 className="text-center mt-6 text-lg">Contact Information</h3>
      </div>
    </div>
  );
}

export default Contact;
