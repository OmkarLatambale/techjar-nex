import React from "react";

function Footer() {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between items-center bg-[#222831] text-[#DFD0B8] p-6">
        <div className="flex items-center pl-10 gap-4">
          {/* Logo */}
          <img
            src="/assets/botImage.png"
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
        <div>
          <p>✉️ support@NEXAI.com </p>
          <p>📞 +91-XXXXXXXXXX</p>
        </div>
      </div>
    </>
  );
}

export default Footer;
