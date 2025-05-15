import React from "react";
import { Link } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;
  const handleLoginClick = () => {
    navigate("/login");
  };
  const handleJobpostClick = () => {
    navigate("/jobpost");
  };
  return (
    <>
      <div className="bg-[#222831]  px-6 py-4">
        <nav className="flex justify-between items-center">
          {/* Logo Section */}
          <div className="flex items-center gap-3">
            <img
              src="/src/assets/botImage.png"
              alt="logo"
              className="w-12 h-12 object-contain"
            />
            <span className="text-3xl font-bold text-[#DFD0B8]">NEX.AI</span>
          </div>

          {/* Navigation Links */}
          <ul className="flex items-center gap-8 text-[#DFD0B8] text-sm font-medium">
            <li>
              <a href="#home" className="hover:text-[#948979] transition">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-[#948979] transition">
                About us
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-[#948979] transition">
                Contact us
              </a>
            </li>
          </ul>

          {/* Buttons */}
          {currentPath !== "/jobpost" && (
            <div className="flex gap-4">
              <button
                onClick={handleJobpostClick}
                className="border border-[#948979] px-4 py-2 rounded-md text-[#DFD0B8] hover:bg-[#948979] hover:text-[#393e46] transition cursor-pointer"
              >
                Post a Job
              </button>
              <button
                onClick={handleLoginClick}
                className="border border-[#948979] px-4 py-2 rounded-md text-[#DFD0B8] hover:bg-[#948979] hover:text-[#393e46] transition cursor-pointer"
              >
                Login
              </button>
            </div>
          )}
        </nav>
      </div>
    </>
  );
}

export default Header;
