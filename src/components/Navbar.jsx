export default function Navbar() {
  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 pt-13 pb-13 w-full bg-black z-50">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex text-2xl">
            <ul className="flex space-x-20">
              {" "}
              {/* Shift links slightly left */}
              <li>
                <a
                  href="#cover"
                  className="text-white hover:text-gray-400 transition luamRegular"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-white hover:text-gray-400 transition  luamRegular"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-white hover:text-gray-400 transition luamRegular"
                >
                  Services
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
