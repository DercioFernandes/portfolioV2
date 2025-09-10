import { FaInstagram, FaGithub, FaFacebook, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-15  pl-45">
      <div className="text-center">
        <p className="text-lg mb-4">© 2025 Dércio Fernandes</p>
        <div className="flex justify-center space-x-6 text-3xl">
          <a
            href="https://www.instagram.com/dercio_fernandes/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-pink-400"
          >
            <FaInstagram />
          </a>
          <a
            href="mailto:dercioarmandocc@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-red-400"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://github.com/DercioFernandes"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-gray-400"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.facebook.com/dercio.fernandes.96/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-400"
          >
            <FaFacebook />
          </a>
        </div>
      </div>
    </footer>
  );
}
