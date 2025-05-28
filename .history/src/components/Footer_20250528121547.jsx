import React from "react";

function Footer() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center bg-[#222831] text-[#DFD0B8] px-4 sm:px-8 py-6 gap-6 sm:gap-0">
      {/* Left Section: Logo and Title */}
      <div className="flex items-center gap-4">
        <img
          src="/assets/botImage.png"
          alt="logo"
          className="w-14 sm:w-16 h-20 sm:h-24 object-contain"
        />

        <div className="flex flex-col">
          <span className="text-2xl sm:text-3xl font-bold">NEX.AI</span>
          <span className="text-base sm:text-lg mt-1">
            Smarter hiring with AI.
          </span>
        </div>
      </div>

      {/* Right Section: Contact */}
      <div className="text-center md:text-right text-sm sm:text-base">
        <p>✉️ support@NEXAI.com</p>
        <p>📞 +91-XXXXXXXXXX</p>
      </div>
    </div>
  );
}

export default Footer;
