export default function Education() {
  return (
    <>
      {/* Experience Section */}
      <section
        id="education"
        className="w-full bg-gradient-to-b from-gray-900 to-black text-white  relative pl-45 pt-45"
      >
        {/* Title */}
        <h2 className="text-5xl font-extrabold text-center mb-5 luamRegular">
          Education
        </h2>
        <hr className="w-32 border-t-4 mx-auto mb-20" />

        {/* Timeline container */}
        <div className="relative w-full max-w-4xl mx-auto">
          {/* Blue vertical line */}
          <div className="absolute left-1/2 top-0 transform -translate-x-1/2 h-full w-1 gradient-bg"></div>

          {/* Timeline items */}
          {[
            {
              year: "2025",
              title: "Software Engineer Graduate",
              desc: "Graduate from VIA University - Denmark",
            },
            {
              year: "2024",
              title: "XR Electives",
              desc: "VIA University - Denmark",
            },
            {
              year: "2024",
              title: "Machine Learning and Deep Learning Electives",
              desc: "VIA University - Denmark",
            },
            {
              year: "2021",
              title: "Professional Programmer",
              desc: "EPCC - Specific course for DEV works - Portugal",
            },
          ].map((item, index) => (
            <div
              key={index}
              className={`pb-12 w-full flex flex-col md:flex-row items-center justify-between ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Content box */}
              {/* Timeline Content Box */}
              <div className="relative w-5/12">
                {/* Vertical Year */}
                <p
                  className={` luamBold absolute top-1/2 transform -translate-y-1/2 gradient-text font-bold text-4xl tracking-widest
                    ${
                      index % 2 === 0
                        ? "right-[-40px] [writing-mode:vertical-rl] rotate-180"
                        : "left-[-40px] [writing-mode:vertical-rl]"
                    }`}
                >
                  {item.year}
                </p>

                {/* Box */}
                <div className="bg-black/30 backdrop-blur-xl p-6 rounded-xl shadow-lg text-left">
                  <p className="luamBold text-center font-bold text-white text-3xl">
                    {item.title}
                  </p>
                  <p className="luamRegular text-xl text-center text-gray-300 mt-2">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
