export default function SideBar() {
  return (
    <>
      {/* Sidebar */}
      <div className="z-50 fixed left-0 top-0 h-screen w-40 eerieblack flex flex-col items-center justify-between ">
        {/* Logo on top */}
        <div className="flex flex-col items-center">
          <img src="/dfLogoWhite.png" alt="Logo" className="w-auto h-30" />
        </div>

        {/* Circle navigation in the center */}
        <div className="flex flex-col space-y-6">
          <a
            href="#section1"
            className="w-4 h-4 rounded-full bg-gray-500 hover:bg-white transition"
          ></a>
          <a
            href="#section2"
            className="w-4 h-4 rounded-full bg-gray-500 hover:bg-white transition"
          ></a>
          <a
            href="#section3"
            className="w-4 h-4 rounded-full bg-gray-500 hover:bg-white transition"
          ></a>
          <a
            href="#section4"
            className="w-4 h-4 rounded-full bg-gray-500 hover:bg-white transition"
          ></a>
        </div>

        {/* Scroll indicator at bottom */}
        <div className="flex flex-col items-center space-y-2 pb-5">
          <p className="text-gray-400 text-xl [writing-mode:vertical-rl] rotate-180 tracking-widest">
            Scroll
          </p>
          <span className="text-gray-400 text-xl animate-bounce pt-2"> ↓</span>
        </div>
      </div>
    </>
  );
}
