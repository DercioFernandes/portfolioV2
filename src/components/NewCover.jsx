export default function NewCover() {
  return (
    <section
      id="cover"
      className="pl-40 relative w-full h-screen bg-cover bg-center grid grid-cols-2 items-center"
      style={{
        backgroundColor: "#000000ff",
        backgroundImage: `
      radial-gradient(circle, rgba(4, 4, 4, 0.02) 1px, transparent 1px),
      radial-gradient(circle, rgba(0, 0, 0, 0.02) 1px, transparent 1px)
    `,
        backgroundPosition: "0 0, 10px 10px",
        backgroundSize: "20px 20px",
      }}
    >
      {/* Left Column Title */}
      <div className="flex flex-col pl-40 relative">
        {/* Job Title */}
        <p className="text-gray-500 text-3xl luamLight">Software Engineer</p>

        {/* Name */}
        <h1 className="text-9xl font-bold uppercase text-white relative left-[1px] work-sans">
          Dércio
          <br /> Fernandes
        </h1>

        {/* Quote */}
        <p className="text-6xl text-gray-600 mt-6 ml-12 italic luamLight">
          <span className="text-5xl">“ </span>
          Building ideas into reality.
          <span className="text-5xl"> „</span>
        </p>
      </div>

      {/* Right Column */}
      <div className="flex flex-col items-center">
        <img
          src="/me3.png"
          alt="Description"
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0) 70%, rgba(0,0,0,1) 100%)",
          }}
        />
      </div>

      {/* Blurred div at bottom */}
      <div className="absolute bottom-0 left-0 w-full h-55 backdrop-blur-xl"></div>
    </section>
  );
}
