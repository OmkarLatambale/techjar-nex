import React from "react";
import { ArrowRight } from "lucide-react";

const Home = () => {
  return (
    <div className="w-full min-h-screen bg-[#222831] text-[#DFD0B8] flex flex-col ">
      {/* Hero Section */}
      <section className="flex flex-1 flex-col-reverse lg:flex-row items-center justify-between  py-12">
        {/* Text Content */}
        <div className="text-left max-w-xl">
          <h1 className="text-[90px] font-bold leading-tight -mt-22 ml-20  text-[#f3ead9]">
            Your Hiring
            <br />
            <span className="text-[#d6c3a1]">Pipeline.</span>
            <br />
            Streamlined.
          </h1>
        </div>

        {/* Illustration */}
        <div className="max-w-xl -mt-12 -mr-5">
          <img
            src="/src/assets/2.png"
            alt="Hiring Visual"
            className="w-full h-auto  mr-0"
          />
        </div>
      </section>
    </div>
  );
};

export default Home;
