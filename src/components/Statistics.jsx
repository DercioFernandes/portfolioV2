export default function Statistics() {
  return (
    <>
      <div class="w-full h-80 flex justify-center items-center stats-bar md:pl-45">
        <div class="w-1/2 h-32 flex justify-between items-center px-4">
          <div class="w-55 h-55 bg-white rounded-full flex flex-col items-center justify-center shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-6xl font-extrabold text-blue-600 mb-2 gradient-text">
              6+
            </h3>
            <p className="text-lg font-medium text-gray-600 uppercase tracking-wide">
              Projects
            </p>
          </div>
          <div class="w-55 h-55 bg-white rounded-full flex flex-col items-center justify-center shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-6xl font-extrabold text-blue-600 mb-2 gradient-text">
              10+
            </h3>
            <p className="text-lg font-medium text-gray-600 uppercase tracking-wide">
              Languages
            </p>
          </div>
          <div class="w-55 h-55 bg-white rounded-full flex flex-col items-center justify-center shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-6xl font-extrabold text-blue-600 mb-2 gradient-text">
              1+
            </h3>
            <p className="text-lg font-medium text-gray-600 uppercase tracking-wide">
              Years of Exp
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
