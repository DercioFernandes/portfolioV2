import { useWindowWidth } from "../hooks/useWindowWidth";
import NewCover from "./NewCover";

export default function CoverDecider() {
  const width = useWindowWidth();
  const isMobile = width <= 768;
  return isMobile ? "" : <NewCover />;
}
