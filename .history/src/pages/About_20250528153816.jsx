import React from "react";

function About() {
  return (
    <section className="bg-[#222831] text-white py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Text Section */}
        <div className="md:w-1/2 space-y-10">
          <div>
            <h5 className="border rounded-3xl border-[#948979] text-[#948979] w-fit px-4 py-0.5 text-xs sm:text-sm ml-2">
              About us
            </h5>
            <p className="text-lg sm:text-xl md:text-2xl text-[#dfd0b8] mt-2">
              NEX.AI uses{" "}
              <span className="text-3xl sm:text-4xl md:text-5xl text-[#948979]">
                AI
              </span>{" "}
              to make hiring easier for companies, vendors, and job candidates.
              It streamlines the hiring process by screening resumes and
              conducting interviews.
            </p>
          </div>
          <div>
            <h5 className="border rounded-3xl border-[#948979] text-[#948979] w-fit px-4 py-0.5 text-xs sm:text-sm ml-2">
              Our Mission
            </h5>
            <p className="text-lg sm:text-xl md:text-2xl text-[#dfd0b8] mt-2">
              Our goal is to speed up hiring by using{" "}
              <span className="text-3xl sm:text-4xl md:text-5xl text-[#948979]">
                AI
              </span>{" "}
              to screen resumes, create custom interview questions, and improve
              communication between companies and vendors.
            </p>
          </div>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center items-center">
          <img
            src="/assets/3.png"
            alt="About NEX.AI"
            className="w-3/4 md:w-full h-auto max-w-xs sm:max-w-md md:max-w-lg lg:-mr-60"
          />
        </div>
      </div>
    </section>
  );
}

export default About;
