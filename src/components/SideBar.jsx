import { useState, useEffect } from "react";

export default function SideBar() {
  const [activeSection, setActiveSection] = useState("cover");

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 } // 60% of section must be visible
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const navItems = [
    "cover",
    "about",
    "education",
    "experience",
    "hobbies",
    "services",
    "projects",
    "contact",
  ];

  return (
    <div className="z-50 fixed left-0 top-0 h-screen w-40 eerieblack flex flex-col items-center justify-between">
      {/* Logo on top */}
      <div className="flex flex-col items-center">
        <img src="/dfLogoWhite.png" alt="Logo" className="w-auto h-30" />
      </div>

      {/* Circle navigation in the center */}
      <div className="flex flex-col space-y-6">
        {navItems.map((id) => (
          <a
            key={id}
            href={`#${id}`}
            className={`w-2 h-2 rounded-full transition ${
              activeSection === id ? "bg-white scale-125" : "bg-gray-500"
            }`}
          ></a>
        ))}
      </div>

      {/* Scroll indicator at bottom */}
      <div className="flex flex-col items-center space-y-2 pb-5">
        <p className="text-gray-400 text-xl [writing-mode:vertical-rl] rotate-180 tracking-widest">
          Scroll
        </p>
        <span className="text-gray-400 text-xl animate-bounce pt-2"> ↓</span>
      </div>
    </div>
  );
}
