import { FaInstagram, FaGithub, FaFacebook, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-15">
      <div className="text-center">
        <p className="text-lg mb-4">© 2025 Dércio Fernandes</p>
        <div className="flex justify-center space-x-6 text-2xl">
          <a
            href="https://instagram.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-500 hover:text-pink-400"
          >
            <FaInstagram />
          </a>
          <a
            href="mailto:dercioarmandocc@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-600 hover:text-red-400"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-100 hover:text-gray-400"
          >
            <FaGithub />
          </a>
          <a
            href="https://facebook.com/yourusername"
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
