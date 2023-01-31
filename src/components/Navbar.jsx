import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="text-zinc-50 body-font bg-red-600">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-zinc-50 mb-4 md:mb-0">
          <span className="ml-3 text-xl">Info Mortys</span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link to="/">
          <a className="mr-5 hover:text-zinc-50 bg-red-900 px-5 rounded-sm">Home</a>
            </Link>
        </nav>
      </div>
    </header>
  );
}
