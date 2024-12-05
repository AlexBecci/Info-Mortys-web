import React from "react";

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-red-700 to-red-800 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <h1 className="text-2xl font-bold text-white">Info Mortys</h1>
          <a
            href="/"
            className="px-4 py-2 bg-red-900/50 text-white rounded-lg hover:bg-red-900 transition-colors duration-300"
          >
            Home
          </a>
        </div>
      </div>
    </nav>
  )
}
