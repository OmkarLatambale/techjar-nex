import React from "react";
import { ArrowRight } from "lucide-react";
// import { useNavigate } from "react-router-dom";

const Home = () => {
  // const navigate = useNavigate();

  return (
    <div className="w-full min-h-screen bg-[#222831] text-[#DFD0B8] flex flex-col">
      {/* Hero Section */}
      <section className="flex flex-1 flex-col-reverse lg:flex-row items-center justify-between py-12">
        {/* Text Content */}
        <div className="text-left">
          <h1 className="text-[80px] font-bold leading-none -mt-22 ml-20 text-[#f3ead9]">
            Your Hiring
            <br />
            <span className="text-[#d6c3a1]">Pipeline.</span>
            <br />
            Streamlined.
          </h1>
        </div>

        {/* Illustration */}
        <div className="-mt-12">
          <img
            src="/assets/2.png"
            alt="Hiring Visual"
            className="w-[840px] h-[570px] mr-0"
          />
        </div>
      </section>
    </div>
  );
};

export default Home;
