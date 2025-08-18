export default function Cover() {
  return (
    <>
      <div className="flex w-full h-screen">
        <div className="w-1/3 relative">
          <img
            src="PortfolioCoverImg.jpeg"
            alt="Image"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/40 to-black"></div>
        </div>

        <div className="w-2/3 relative bg-black flex flex-col items-center justify-center space-y-4 overflow-hidden">
          <img
            src="azulejos.png"
            alt="Background"
            className="absolute inset-0 w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-black via-transparent to-black opacity-60"></div>

          <h1 className="text-9xl font-bold text-white text-center gradient-text relative z-10">
            生き甲斐
          </h1>
          <h3 className="text-4xl text-white font-bold -mt-11 relative z-10">
            SOFTWARE ENGINEER
          </h3>
          <hr className="w-1/2 border-t border-gray-500 my-2 relative z-10" />
          <p className="text-white text-xl relative z-10">Dércio Fernandes</p>
        </div>
      </div>
    </>
  );
}
