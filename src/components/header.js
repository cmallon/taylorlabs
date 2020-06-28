import { Link } from "gatsby";
import React from "react";

function Header() {
  return (
    <header className="text-gray-700 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          to="/"
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-10 h-10 text-white p-2 bg-pink-500 rounded-full"
            viewBox="0 0 24 24"
          ></svg>
          <span className="ml-3 text-xl text-gray-700">taylorlabs</span>
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center"></nav>
      </div>
    </header>
  );
}

export default Header;
