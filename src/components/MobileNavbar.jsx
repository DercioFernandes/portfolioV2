import { useState } from "react";

export default function MobileNavbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      {/* Top bar */}
      <div
        className={`flex justify-end items-center px-6 py-8 text-white shadow-md transition-all duration-300 bg-black bg-opacity-90`}
      >
        {/* Only show logo when menu is open */}
        {open && (
          <div className="flex items-center mr-auto">
            <img src="/dfLogoWhite.png" alt="Logo" className="h-10 w-auto" />
          </div>
        )}

        {/* Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="flex flex-col justify-between w-8 h-6 focus:outline-none z-50 relative"
        >
          <span
            className={`block h-1 w-full rounded transition-transform duration-300 bg-gradient-to-r from-blue-500 to-indigo-500 ${
              open ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block h-1 w-full rounded transition-opacity duration-300 bg-gradient-to-r from-blue-500 to-indigo-500 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-1 w-full rounded transition-transform duration-300 bg-gradient-to-r from-blue-500 to-indigo-500 ${
              open ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Fullscreen Mobile Menu */}
      <div
        className={`fixed inset-0 bg-gradient-to-r from-black via-gray-900 to-black clip-path-curvy bg-opacity-95 flex flex-col justify-center items-center space-y-8 transform transition-transform duration-500 ${
          open ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <a
          href="#cover"
          className="text-white text-3xl font-semibold hover:text-gray-300 transition"
        >
          Home
        </a>
        <a
          href="#services"
          className="text-white text-3xl font-semibold hover:text-gray-300 transition"
        >
          Services
        </a>
        <a
          href="#contact"
          className="text-white text-3xl font-semibold hover:text-gray-300 transition"
        >
          Contact
        </a>
      </div>
    </nav>
  );
}
