import React from "react";

function Footer() {
  return (
    <>
      <div>
        <div className="flex items-center pl-10 gap-4">
          {/* Logo */}
          <img
            src="/src/assets/botImage.png"
            alt="logo"
            className="w-16 h-24 object-contain"
          />

          {/* Text Stack */}
          <div className="flex flex-col justify-center">
            <span className="text-3xl font-bold text-[#DFD0B8]">NEX.AI</span>
            <span className="text-xl text-[#DFD0B8] mt-1">
              Smarter hiring with AI.
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
