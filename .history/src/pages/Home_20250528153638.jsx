import React from "react";
import { ArrowRight } from "lucide-react";

const Home = () => {
  return (
    <div className="w-full min-h-screen bg-[#222831] text-[#DFD0B8] flex flex-col">
      {/* Hero Section */}
      <section className="flex flex-1 flex-col-reverse lg:flex-row items-center justify-between py-12 px-4 sm:px-8 lg:px-20 gap-10">
        {/* Text Content */}
        <div className="text-left max-w-xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-[#f3ead9]">
            Your Hiring
            <br />
            <span className="text-[#d6c3a1]">Pipeline.</span>
            <br />
            Streamlined.
          </h1>
        </div>

        {/* Illustration */}
        <div className="w-full flex justify-center">
          <img
            src="/assets/2.png"
            alt="Hiring Visual"
            className="w-full max-w-[600px] h-auto -mr-80 "
          />
        </div>
      </section>
    </div>
  );
};

export default Home;
