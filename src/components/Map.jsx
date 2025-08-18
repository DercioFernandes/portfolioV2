export default function Map() {
  return (
    <div className="relative h-200 overflow-hidden mt-12">
      {/* Gradient overlay at the top */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-gray-50/0 to-transparent z-10"></div>

      {/* Map image */}
      <img
        src="Map.jpg"
        alt="Location Map"
        className="w-full h-full object-cover absolute"
      />
    </div>
  );
}
