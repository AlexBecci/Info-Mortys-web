import React from "react";
import { SocialLinks } from "./SocialLinks";

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-red-600 to-red-700 text-white">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col sm:flex-row items-center justify-between">
          <div className="flex items-center mb-4 sm:mb-0">
            <span className="text-xl font-bold bg-red-900 px-4 py-2 rounded-lg shadow-md hover:bg-red-800 transition-colors duration-300">
              Info Mortys
            </span>
          </div>
          <div className="flex flex-col sm:flex-row items-center">
            <p className="text-sm mb-2 sm:mb-0 sm:mr-4">
              © 2023 Info Mortys —
              <a
                href="https://www.instagram.com/becci.ale/"
                rel="noopener noreferrer"
                className="ml-1 hover:text-red-200 transition-colors duration-300"
                target="_blank"
              >
                @Becci.ale
              </a>
            </p>
            <SocialLinks/>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;