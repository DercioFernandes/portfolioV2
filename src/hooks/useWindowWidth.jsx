import { useState, useEffect } from "react";

export function useWindowWidth() {
  const [width, setWidth] = useState(null);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    handleResize(); // set initial width
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return width;
}
