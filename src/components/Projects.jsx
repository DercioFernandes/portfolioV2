import React from "react";

const projects = [
  {
    title: "",
    link: "https://github.com/XRD-Group-11/VR-CS-1.6",
    src: "csvr2WT.png",
  },
  {
    title: "",
    link: "https://github.com/DercioFernandes/Kiseki-Fighters",
    src: "frierenUWT.png",
  },
  {
    title: "",
    link: "https://github.com/DercioFernandes/AnimeUltimaPAP",
    src: "aniultWT.png",
  },
  {
    title: "",
    link: "https://github.com/DercioFernandes/Njord-Presentation",
    src: "njordWT.png",
  },
  {
    title: "",
    link: "https://github.com/DercioFernandes/VIA-Marketplace",
    src: "viamarketWT.png",
  },
  {
    title: "More",
    link: "https://github.com/DercioFernandes/",
    src: "azulejos.png",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className=" bg-gradient-to-b from-gray-900 to-black text-white luamRegular pt-45 pl-45 pb-45"
    >
      <div className="max-w-6xl mx-auto px-4">
        {/* Title */}
        <h2 className="text-5xl font-extrabold text-center mb-5 luamRegular">
          Projects
        </h2>
        <hr className="w-32 border-t-4 mx-auto mb-20" />

        {/* Grid */}
        <div className="grid max-w-4xl mx-auto gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group aspect-square overflow-hidden rounded-xl"
            >
              {/* Background Image */}
              <img
                src={project.src}
                alt={project.title}
                className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition duration-500"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600/60 to-transparent opacity-0 group-hover:opacity-100 translate-y-full group-hover:translate-y-0 transition duration-500"></div>

              {/* Title */}
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-white text-6xl font-semibold text-center drop-shadow-md">
                  {project.title}
                </h3>
              </div>

              {/* Scale Effect */}
              <div className="absolute inset-0 group-hover:scale-105 transition duration-500 ease-out"></div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
