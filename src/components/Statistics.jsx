export default function Statistics() {
  return (
    <>
      <div className="w-full h-auto flex justify-center items-center py-12 stats-bar-mobile md:stats-bar px-6 md:px-20">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 w-full max-w-4xl">
          {/* Circle 1 */}
          <div className="w-40 h-40 md:w-55 md:h-55 bg-white rounded-full flex flex-col items-center justify-center shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-5xl md:text-6xl font-extrabold text-blue-600 mb-2 gradient-text">
              6+
            </h3>
            <p className="text-lg font-medium text-gray-600 uppercase tracking-wide text-center">
              Projects
            </p>
          </div>

          {/* Circle 2 */}
          <div className="w-40 h-40 md:w-55 md:h-55 bg-white rounded-full flex flex-col items-center justify-center shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-5xl md:text-6xl font-extrabold text-blue-600 mb-2 gradient-text">
              10+
            </h3>
            <p className="text-lg font-medium text-gray-600 uppercase tracking-wide text-center">
              Languages
            </p>
          </div>

          {/* Circle 3 */}
          <div className="w-40 h-40 md:w-55 md:h-55 bg-white rounded-full flex flex-col items-center justify-center shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-5xl md:text-6xl font-extrabold text-blue-600 mb-2 gradient-text">
              1+
            </h3>
            <p className="text-lg font-medium text-gray-600 uppercase tracking-wide text-center">
              Years of Exp
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
