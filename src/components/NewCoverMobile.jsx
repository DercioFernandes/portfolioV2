export default function NewCoverMobile() {
  return (
    <section
      id="cover"
      className="relative w-full h-screen bg-cover bg-center flex flex-col items-center justify-end text-center px-6"
      style={{
        backgroundColor: "#000000ff",
        backgroundImage: `
          radial-gradient(circle, rgba(4, 4, 4, 0.02) 1px, transparent 1px),
          radial-gradient(circle, rgba(0, 0, 0, 0.02) 1px, transparent 1px),
          url('/me3.png')
        `,
        backgroundPosition: "0 0, 10px 10px, center",
        backgroundSize: "20px 20px, 20px 20px, cover",
      }}
    >
      {/* Overlay gradient for readability */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.9) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 mb-10 flex flex-col items-center">
        {/* Job Title */}
        <p className="text-gray-500 text-2xl luamLight mb-2">
          Software Engineer
        </p>

        {/* Name */}
        <h1 className="text-6xl md:text-8xl font-bold uppercase text-white work-sans mb-4">
          Dércio <br /> Fernandes
        </h1>

        {/* Quote */}
        <p className="text-3xl md:text-5xl text-gray-300 italic">
          <span className="text-2xl">“ </span>
          Building ideas into reality.
          <span className="text-2xl"> „</span>
        </p>
      </div>

      {/* Blurred bottom div */}
      <div className="absolute bottom-0 left-0 w-full h-32 md:h-55 backdrop-blur-xl"></div>
    </section>
  );
}
