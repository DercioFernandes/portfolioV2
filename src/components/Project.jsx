export default function Project({ link, src }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative w-1/6 h-140 overflow-hidden"
    >
      <img
        src={src}
        alt="Project Image"
        className="w-full h-full object-cover transition-transform duration-300 filter grayscale group-hover:grayscale-0 group-hover:scale-110"
      />
    </a>
  );
}
