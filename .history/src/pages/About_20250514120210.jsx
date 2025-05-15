import React from "react";

function About() {
  return (
    <>
      <section className="bg-[#222831] text-white py-2">
        <div className="max-w-[73rem] mx-auto px-6 flex flex-col md:flex-row items-center justify-between space-y-10 md:space-y-0">
          <div className="md:w-[60%] space-y-4 -mt-30">
            <div>
              <h5 className="border  rounded-3xl border-[#948979] back text-[#948979] w-fit px-4 py-0.5 text-xs ml-2">
                About us
              </h5>
              <p className="text-2xl text-[#dfd0b8] ">
                NEX.AI uses <span className="text-5xl text-[#948979]">AI</span>{" "}
                to make hiring easier for companies, vendors, and job
                candidates. It streamlines the hiring process by screening
                resumes and conducting interviews.
              </p>
            </div>
            <div>
              <h5 className="border  rounded-3xl border-[#948979] back text-[#948979] w-fit px-4 py-0.5 text-xs ml-2">
                About us
              </h5>
              <p className="text-2xl text-[#dfd0b8] ">
                NEX.AI uses <span className="text-5xl text-[#948979]">AI</span>{" "}
                to make hiring easier for companies, vendors, and job
                candidates. It streamlines the hiring process by screening
                resumes and conducting interviews.
              </p>
            </div>
          </div>
          <div className=" flex justify-center -mr-25">
            <img
              src="/src/assets/3.png"
              alt="About NEX.AI"
              className="w-120 h-auto"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
