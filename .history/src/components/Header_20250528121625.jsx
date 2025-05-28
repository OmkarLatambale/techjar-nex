import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLoginClick = () => navigate("/login");
  const handleJobpostClick = () => navigate("/jobpost");

  return (
    <header className="bg-[#222831] text-[#DFD0B8] px-6 py-4">
      <nav className="max-w-[1200px] mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src="/assets/botImage.png"
            alt="logo"
            className="w-12 h-12 object-contain"
          />
          <span className="text-2xl sm:text-3xl font-bold">NEX.AI</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
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
          <div className="hidden md:flex gap-4">
            <button
              onClick={handleJobpostClick}
              className="border border-[#948979] px-4 py-2 rounded-md hover:bg-[#948979] hover:text-[#393e46] transition"
            >
              Post a Job
            </button>
            <button
              onClick={handleLoginClick}
              className="border border-[#948979] px-4 py-2 rounded-md hover:bg-[#948979] hover:text-[#393e46] transition"
            >
              Login
            </button>
          </div>
        )}

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-[#DFD0B8] focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu Content */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 space-y-4 text-center text-sm">
          <a href="#home" className="block hover:text-[#948979]">
            Home
          </a>
          <a href="#about" className="block hover:text-[#948979]">
            About us
          </a>
          <a href="#contact" className="block hover:text-[#948979]">
            Contact us
          </a>

          {currentPath !== "/jobpost" && (
            <div className="flex flex-col gap-2 items-center mt-4">
              <button
                onClick={handleJobpostClick}
                className="w-3/4 border border-[#948979] px-4 py-2 rounded-md hover:bg-[#948979] hover:text-[#393e46]"
              >
                Post a Job
              </button>
              <button
                onClick={handleLoginClick}
                className="w-3/4 border border-[#948979] px-4 py-2 rounded-md hover:bg-[#948979] hover:text-[#393e46]"
              >
                Login
              </button>
            </div>
          )}
        </div>
      )}
    </header>
  );
}

export default Header;
