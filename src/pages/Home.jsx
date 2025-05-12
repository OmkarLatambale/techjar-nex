import React from "react";
import { ArrowRight } from "lucide-react";

const Home = () => {
  return (
    <div className="w-full min-h-screen bg-[#222831] text-[#DFD0B8] flex flex-col">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-12 py-6">
        <div className="flex items-center gap-2">
          <img
            src="/src/assets/botImage.png"
            alt="logo"
            className="w-10 h-10"
          />
          <span className="text-2xl font-bold text-[#DFD0B8]">NEX.AI</span>
        </div>
        <ul className="flex items-center gap-10 text-[#DFD0B8] text-sm font-medium">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About us</a>
          </li>
          <li>
            <a href="#">Contact us</a>
          </li>
        </ul>
        <div className="flex gap-4">
          <button className="border border-white px-4 py-1 rounded-md">
            Post a Job
          </button>
          <button className="border border-white px-4 py-1 rounded-md">
            Login
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-1 flex-col-reverse lg:flex-row items-center justify-between px-12 py-12">
        {/* Text Content */}
        <div className="text-left max-w-xl">
          <h1 className="text-5xl font-bold leading-tight text-[#f3ead9]">
            Your Hiring
            <br />
            <span className="text-[#d6c3a1]">Pipeline.</span>
            <br />
            Streamlined.
          </h1>
        </div>

        {/* Illustration */}
        <div className="max-w-xl">
          <img
            src="/src/assets/2.png"
            alt="Hiring Visual"
            className="w-full h-auto"
          />
        </div>
      </section>
    </div>
  );
};

export default Home;
