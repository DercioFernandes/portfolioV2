import Map from "./Map";

export default function About() {
  return (
    <div className="w-full bg-gray-50 relative">
      {/* About Content */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center gap-8 py-20 px-8">
        <div className="md:w-1/3">
          <h2 className="text-5xl font-extrabold text-gray-800 uppercase tracking-wider">
            ABOUT
          </h2>
          <div className="w-16 h-1 bg-blue-600 mt-4 rounded-full"></div>
        </div>

        <div className="md:w-2/3 text-gray-700 text-lg leading-relaxed">
          <p className="mb-4">
            Hi! I’m Dércio Fernandes, a passionate software engineer with
            experience in building web applications and creating user-friendly
            experiences. I love solving problems and bringing ideas to life
            through code.
          </p>
          <p>
            I specialize in modern frontend and backend technologies, and I’m
            always eager to learn and explore new tools and frameworks. In my
            free time, I enjoy experimenting with design, fitness, and Japanese
            culture. With extra knowledge on the many areas of XR, Game
            Development, Machine Learning and Deep Learning, I am a dynamic
            coding octopus.
          </p>
        </div>
      </div>
      <Map />
    </div>
  );
}
