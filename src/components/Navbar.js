import React, { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-gray-900 p-4 text-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        
        {/* Logo */}
        <div className="flex items-center">
          <img src="/logo.png" alt="AIJokeCoin Logo" className="h-10 mr-2" /> {/* Adjust height as needed */}
          <h1 className="text-3xl font-bold">AIJoke</h1>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none text-white">
            {isOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            )}
          </button>
        </div>

        {/* Navigation Items */}
        <ul className={`hidden md:flex md:space-x-6 items-center`}>
          <li>
            <a href="/" className="hover:text-yellow-400">
              Home
            </a>
          </li>
          <li>
            <a href="/joke-vault" className="hover:text-yellow-400">
              Joke Vault
            </a>
          </li>
          <li>
            <a
              href="/buy"
              className="hover:text-yellow-400 bg-yellow-500 text-gray-900 font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
            >
              Buy
            </a>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="fixed inset-0 bg-black bg-opacity-70 z-40" onClick={closeMenu}></div>
          <div className="fixed top-16 left-0 right-0 bg-gray-800 p-4 rounded-lg shadow-lg z-50">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold">Menu</h2>
              <button onClick={closeMenu} className="text-white focus:outline-none">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>
            <ul className="mt-4 space-y-4">
              <li>
                <a href="/" className="block text-white hover:text-yellow-400" onClick={closeMenu}>
                  Home
                </a>
              </li>
              <li>
                <a href="/joke-vault" className="block text-white hover:text-yellow-400" onClick={closeMenu}>
                  Joke Vault
                </a>
              </li>
              <li>
                <a
                  href="/buy"
                  className="block text-white bg-yellow-500 hover:bg-yellow-400 font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
                  onClick={closeMenu}
                >
                  Buy
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
