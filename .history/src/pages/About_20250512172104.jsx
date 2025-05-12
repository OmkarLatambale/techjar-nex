import React from "react";

function About() {
  return (
    <>
      <div>
        <section className="bg-[#222831] text-white py-16">
          <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between space-y-10 md:space-y-0">
            <div className="md:w-1/2 space-y-6">
              <h2 className="text-3xl font-bold">About NEX.AI</h2>
              <p className="text-lg">
                NEX.AI uses AI to make hiring easier for companies, vendors, and
                job candidates. It streamlines the hiring process by screening
                resumes and conducting interviews.
              </p>
              <p className="text-yellow-400 font-medium">
                Our tool is created to help hiring managers save time and focus
                on what matters — finding the right talent.
              </p>
            </div>

            <div className=" flex justify-center">
              <img
                src="/src/assets/3.png"
                alt="About NEX.AI"
                className="w-80 h-auto"
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default About;
