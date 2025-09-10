import { useWindowWidth } from "../hooks/useWindowWidth";

export default function Experience() {
  const width = useWindowWidth();
  const isMobile = width <= 768;
  return (
    <>
      {/* Experience Section */}
      <section
        id="experience"
        className="w-full bg-gradient-to-b from-black to-gray-900 text-white pt-45 md:pl-45"
      >
        <h2 className="text-5xl font-extrabold text-center mb-5 luamRegular">
          Experience
        </h2>
        <hr className="w-32 border-t-4 mx-auto mb-20" />

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          {[
            {
              yearLabel: "2025",
              date: "Oct - ",
              company: "COMING SOON",
              description: ["More information coming soon"],
            },
            {
              yearLabel: "2025",
              date: "Jul - Sep",
              company: "Freelance",
              description: [
                "Development of Personal Website for a client",
                "Mobile-friendly website made with React, Vite and Tailwind",
                "Design of the entire website UI/UX",
              ],
            },
            {
              yearLabel: "2024",
              date: "Jan - Dec",
              company: "AI Developer (University Work)",
              description: [
                "Built Deep Learning Model capable of generating form data from a Title",
                "Collaborated with other AI Developers",
                "Worked on organizing Data",
                "Developed simple Frontend and Backend to showcase Form Creation",
              ],
            },
            {
              yearLabel: "2023",
              date: "Jul - Dec",
              company: "Connecting Software",
              description: [
                "Migrated Integration Tests using C#",
                "Development of Chatbot using OpenAI API and Machine Learning techniques",
                "Data Management of Documentation data in order to feed the Chatbot",
              ],
            },
            {
              yearLabel: "2021",
              date: "May - Jul",
              company: "Freelance (School Work)",
              description: [
                "Developed Website for Media",
                "Used PHP and CodeIgniter",
                "Created Image and Video Reproduction Systems",
              ],
            },
            {
              yearLabel: "2021",
              date: "Jan - May",
              company: "Press Power",
              description: [
                "Developed a dynamic PHP Website",
                "Followed MVC and used CodeIgniter Framework",
                "Worked hand to hand with Team Leader",
              ],
            },
            // Add more items here
          ].map((item, index) => (
            <div
              key={index}
              className={`flex ${
                isMobile ? "flex-col" : "flex-row"
              } items-center mb-12`}
            >
              {/* Year div */}
              <div className="relative flex justify-center items-center text-center w-1/4">
                {/* Big Year */}
                <span className="text-7xl font-extrabold gradient-text z-0 ">
                  {item.yearLabel}
                </span>

                {/* Date overlay */}
                <span className="font-extrabold absolute top-13 left-0 z-10 text-xl md:text-2xl text-white">
                  {item.date}
                </span>
              </div>

              {/* Company box */}
              <div className="flex-1 bg-gray-800/30 backdrop-blur-lg p-6 rounded-xl shadow-lg mt-3 md:mt-0 md:ml-8 w-full md:w-auto">
                <h3 className="luamBold text-3xl font-bold mb-2">
                  {item.company}
                </h3>
                <ul className="list-disc list-inside text-gray-300 text-xl space-y-1 luamRegular">
                  {item.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
