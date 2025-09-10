import Map from "./Map";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function About() {
  return (
    <>
      {/* About Me Section */}
      <section
        id="about"
        className="w-full min-h-screen bg-gradient-to-b from-black to-gray-900 flex flex-col md:flex-row items-center justify-center px-6 md:px-20 gap-12 md:pl-100"
      >
        {/* Left side image */}
        <div className="flex-1 relative">
          <img
            src="/aboutme2.png"
            alt="Profile"
            className="w-full md:w-[80%] h-auto object-cover shadow-2xl rounded-xl md:-translate-x-10"
          />
        </div>

        {/* Right side content */}
        <div className="flex-1 flex flex-col justify-between text-center md:text-left pt-30">
          {/* Top line */}
          <div className="w-16 h-1 bg-white mb-4"></div>

          {/* Title and subtitle */}
          <div>
            <h2 className="text-5xl font-extrabold text-white mb-2 luamRegular">
              About Me
            </h2>
            <p className="text-gray-400 text-2xl mb-6 luamLight">
              Software Engineer
            </p>

            {/* Description */}
            <p className="text-xl text-gray-300 leading-relaxed mb-6 luamRegular md:mr-30">
              Hi! I’m Dércio Fernandes, a passionate software engineer with
              experience in building web applications and creating user-friendly
              experiences. I love solving problems and bringing ideas to life
              through code.
              <br />I specialize in modern frontend and backend technologies,
              and I’m always eager to learn and explore new tools and
              frameworks. In my free time, I enjoy experimenting with design,
              fitness, and Japanese culture. With extra knowledge on the many
              areas of XR, Game Development, Machine Learning and Deep Learning,
              I am a dynamic coding octopus.
            </p>
          </div>

          {/* Bottom image */}
          <div className="">
            <img
              src="/dfLogoWhite.png"
              alt="Profile Bottom"
              className="w-128 h-auto object-cover"
            />
          </div>

          {/* Social icons */}
          <div className="flex space-x-6">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faInstagram}
                className="text-2xl  text-gray-300 hover:text-white transition-transform hover:scale-110"
              />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faGithub}
                className="text-2xl  text-gray-300 hover:text-white transition-transform hover:scale-110"
              />
            </a>
            <a href="mailto:yourmail@gmail.com">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="text-2xl text-gray-300 hover:text-white transition-transform hover:scale-110"
              />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
