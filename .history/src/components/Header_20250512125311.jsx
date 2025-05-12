import React from "react";

function Header() {
  return (
    <>
      <div className="bg-[#222831] border rounded-2xl border-[#DFD0B8]">
        <nav className="flex justify-between items-center px-12 py-6">
          <div className="flex items-center gap-2">
            <img
              src="/src/assets/botImage.png"
              alt="logo"
              className="w-10 h-10"
            />
            <span className="text-2xl font-bold text-[#DFD0B8]">NEX.AI</span>
          </div>
          <ul className="flex items-center gap-10 text-[#DFD0B8] text-sm font-medium">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a href="#">Contact us</a>
            </li>
          </ul>
          <div className="flex gap-4">
            <button className="border border-[#948979] px-4 py-1 rounded-md">
              Post a Job
            </button>
            <button className="border border-white px-4 py-1 rounded-md">
              Login
            </button>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Header;
