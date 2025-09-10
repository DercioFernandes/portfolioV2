import {
  FaPlane,
  FaGamepad,
  FaMusic,
  FaUtensils,
  FaCode,
  FaFistRaised,
  FaPencilAlt,
} from "react-icons/fa";

export default function Hobbies() {
  return (
    <>
      {/* Hobbies Section */}
      <section className="w-full bg-gradient-to-b from-gray-900 to-black text-white pt-45 pl-45">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12">
          {/* Left Column: Hobbies */}
          <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-8">
            {[
              {
                icon: <FaPlane className="w-12 h-12 text-gray-700" />,
                name: "Traveling",
              },
              {
                icon: <FaGamepad className="w-12 h-12 text-gray-700" />,
                name: "Gaming",
              },
              {
                icon: <FaMusic className="w-12 h-12 text-gray-700" />,
                name: "Music",
              },
              {
                icon: <FaUtensils className="w-12 h-12 text-gray-700" />,
                name: "Cooking",
              },
              {
                icon: <FaCode className="w-12 h-12 text-gray-700" />,
                name: "Coding",
              },
              {
                icon: <FaFistRaised className="w-12 h-12 text-gray-700" />,
                name: "Martial Arts",
              },
            ].map((hobby, index) => (
              <div key={index} className="relative flex flex-col items-center">
                {hobby.icon}
                <span className="luamBold text-center absolute top-10 left-1/2 transform -translate-x-1/2 text-gray-500 text-2xl  px-2 rounded mt-2">
                  {hobby.name}
                </span>
              </div>
            ))}
          </div>
          {/* Right Column: Description */}
          <div className="flex-1 flex flex-col justify-center">
            <h2 className="text-5xl font-extrabold text-center mb-5 luamRegular">
              Hobbies
            </h2>
            <hr className="w-32 border-t-4 mx-auto mb-10" />
            <p className="luamRegular text-gray-300 text-2xl">
              I enjoy a variety of hobbies that keep me creative, motivated, and
              active. From traveling to new places and exploring cultures, to
              gaming, music, and coding, I like to challenge myself and stay
              inspired. Martial arts and cooking allow me to relax, improve
              focus, and express myself creatively.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
