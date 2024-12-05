import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

export const SocialLinks = () => {
  return (
    <div className="flex space-x-4">
      <a
        href="https://www.instagram.com/becci.ale/"
        className="text-white hover:text-red-200 transition-colors duration-300"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram className="w-6 h-6" />
      </a>
      <a
        href="https://www.linkedin.com/in/alex-becci-gatica-82551a22b/"
        className="text-white hover:text-red-200 transition-colors duration-300"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin className="w-6 h-6" />
      </a>
      <a
        href="https://github.com/AlexBecci"
        className="text-white hover:text-red-200 transition-colors duration-300"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub className="w-6 h-6" />
      </a>
    </div>
  );
};