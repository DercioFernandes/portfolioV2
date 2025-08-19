import { useEffect, useRef, useState } from "react";

export default function Map() {
  const imgRef = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // toggle visibility based on intersection
          setVisible(entry.isIntersecting);
        });
      },
      { threshold: 0.1 }
    );

    if (imgRef.current) observer.observe(imgRef.current);

    return () => {
      if (imgRef.current) observer.unobserve(imgRef.current);
    };
  }, []);

  return (
    <div className="relative h-200 overflow-hidden mt-12 section">
      {/* Gradient overlay at the top */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-gray-50/0 to-transparent z-10"></div>

      {/* Map image */}
      <img
        ref={imgRef}
        src="Map.jpg"
        alt="Location Map"
        className={`w-full h-full object-cover absolute parallax-img ${
          visible ? "visible" : ""
        }`}
      />
    </div>
  );
}
