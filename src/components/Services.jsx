import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRobot,
  faBrain,
  faLaptopCode,
  faCode,
  faVrCardboard,
} from "@fortawesome/free-solid-svg-icons";
import { faAndroid } from "@fortawesome/free-brands-svg-icons";

const services = [
  {
    icon: faRobot,
    color: "text-blue-700",
    title: "Machine Learning Models",
    desc: "Custom ML solutions tailored to business needs, from data preprocessing to deployment.",
  },
  {
    icon: faBrain,
    color: "text-blue-700",
    title: "Deep Learning Models",
    desc: "Cutting-edge DL architectures for image, text, and complex problem domains.",
  },
  {
    icon: faLaptopCode,
    color: "text-blue-700",
    title: "Modern Website Development",
    desc: "Responsive, performant websites with modern stacks (full stack if required).",
  },
  {
    icon: faCode,
    color: "text-blue-700",
    title: "Software Development",
    desc: "Robust software applications built to scale and adapt to evolving requirements.",
  },
  {
    icon: faAndroid,
    color: "text-blue-700",
    title: "Android App Development",
    desc: "Native and cross-platform Android apps designed for usability and performance.",
  },
  {
    icon: faVrCardboard,
    color: "text-blue-700",
    title: "XR/Game Development",
    desc: "Immersive XR experiences and engaging games using modern engines and tools.",
  },
];

export default function Services() {
  return (
    <section className=" bg-gradient-to-b from-black to-gray-900 text-white luamRegular pt-45 pl-45">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-5xl font-extrabold text-center mb-5 luamRegular">
          Services & Skills
        </h2>
        <hr className="w-32 border-t-4 mx-auto mb-20" />

        {/* Grid */}
        <div className="grid gap-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-center pb-20">
          {services.map((service, index) => (
            <div key={index}>
              <FontAwesomeIcon
                icon={service.icon}
                className={`text-5xl ${service.color} mb-4`}
              />
              <h3 className=" font-semibold mb-2 text-3xl">{service.title}</h3>
              <p className="text-gray-600  text-xl">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
