import React from "react";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

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

          <div className="flex flex-col items-start gap-4 ml-20 mt-6">
            {/* Arrow and Get Started Button in same row */}
            <div className="flex items-center gap-4 text-[#DFD0B8]">
              {/* Dashed line with arrow */}
              <div className="flex items-center gap-2">
                <div className="border-t-2 border-dashed border-[#DFD0B8] w-24"></div>
                <ArrowRight className="w-5 h-5 -ml-2 text-[#DFD0B8]" />
              </div>

              {/* Get Started Button */}
              <button className="px-4 py-1 border border-[#DFD0B8] text-[#DFD0B8] rounded-md text-sm hover:bg-[#DFD0B8] hover:text-[#1a1d23] transition">
                Get Started
              </button>
            </div>

            {/* Vendor Dashboard Button (below Get Started) */}
            <button
              className="px-4 py-1 border border-[#DFD0B8] text-[#DFD0B8] rounded-md text-sm hover:bg-[#DFD0B8] hover:text-[#1a1d23] transition"
              onClick={() => navigate("/vendor-dashboard")}
            >
              Vendor Dashboard
            </button>
          </div>
        </div>

        {/* Illustration */}
        <div className="-mt-12">
          <img
            src="/src/assets/2.png"
            alt="Hiring Visual"
            className="w-[840px] h-[570px] mr-0"
          />
        </div>
      </section>
    </div>
  );
};

export default Home;
