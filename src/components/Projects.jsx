import Project from "./Project";

const projects = [
  { link: "https://github.com/XRD-Group-11/VR-CS-1.6", src: "csvr2WT.png" },
  {
    link: "https://github.com/DercioFernandes/Kiseki-Fighters",
    src: "frierenUWT.png",
  },
  {
    link: "https://github.com/DercioFernandes/AnimeUltimaPAP",
    src: "aniultWT.png",
  },
  {
    link: "https://github.com/DercioFernandes/Njord-Presentation",
    src: "njordWT.png",
  },
  {
    link: "https://github.com/DercioFernandes/VIA-Marketplace",
    src: "viamarketWT.png",
  },
  {
    link: "https://github.com/DercioFernandes/portfolioV2",
    src: "portWT.png",
  },
];

export default function Projects() {
  console.log(projects);
  return (
    <div className="w-full">
      <div className="relative flex flex-wrap w-full">
        {projects.map((proj) => {
          return <Project link={proj.link} src={proj.src} />;
        })}
      </div>

      <div className="w-full">
        <a
          href="https://github.com/DercioFernandes"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold shadow-lg text-center hover:scale-99 transform transition-transform duration-300"
        >
          See More on GitHub
        </a>
      </div>
    </div>
  );
}
