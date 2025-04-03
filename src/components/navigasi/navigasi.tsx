"use client";
import { useState } from "react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle menu for mobile view
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-gray-900 border-gray-200 dark:bg-gray-900 fixed top-0 left-0 w-full z-10">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
        <Link
          href="/home"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <Avatar>
            <AvatarImage src="/images/bot.png" alt="BotKom Logo" />
            <AvatarFallback>BotKom</AvatarFallback>
          </Avatar>
          <span className="text-2xl font-semibold text-white">BotKom</span>
        </Link>

        {/* Mobile menu toggle button */}
        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-menu"
          aria-expanded={isOpen ? "true" : "false"}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        {/* Desktop navigation */}
        <div className="hidden md:flex md:space-x-8">
          <Link href="/home">
            <span className="text-gray-300 hover:text-blue-500 dark:text-white dark:hover:text-blue-500 py-2 px-3">
              Home
            </span>
          </Link>
          <Link href="/materi">
            <span className="text-gray-300 hover:text-blue-500 dark:text-white dark:hover:text-blue-500 py-2 px-3">
              Materi
            </span>
          </Link>
          <Link href="/tentang">
            <span className="text-gray-300 hover:text-blue-500 dark:text-white dark:hover:text-blue-500 py-2 px-3">
              About
            </span>
          </Link>
          <Link href="/petunjuk">
            <span className="text-gray-300 hover:text-blue-500 dark:text-white dark:hover:text-blue-500 py-2 px-3">
              Petunjuk
            </span>
          </Link>
          
          <Link href="/chat-bot">
            <span className="text-gray-300 hover:text-blue-500 dark:text-white dark:hover:text-blue-500 py-2 px-3">
              ChatBot
            </span>
          </Link>
          
        </div>
      </div>

      {/* Mobile off-canvas menu */}
      <div
        className={`md:hidden fixed inset-0 bg-gray-900 bg-opacity-50 transition-opacity ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleMenu}
      ></div>

      <div
        className={`md:hidden fixed top-0 left-0 w-64 bg-gray-800 h-full z-30 transform transition-transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button onClick={toggleMenu} className="text-white text-xl">
            <span className="sr-only">Close menu</span>
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <ul className="font-medium text-white flex flex-col items-center">
          <li>
            <Link href="/home">
              <span className="block py-2 px-3 text-gray-300 rounded hover:bg-gray-700">
                Home
              </span>
            </Link>
          </li>
          <li>
            <Link href="/materi">
              <span className="block py-2 px-3 text-gray-300 rounded hover:bg-gray-700">
                Materi
              </span>
            </Link>
          </li>
          <li>
            <Link href="/tentang">
              <span className="block py-2 px-3 text-gray-300 rounded hover:bg-gray-700">
                About
              </span>
            </Link>
          </li>
          <li>
            <Link href="/petunjuk">
              <span className="block py-2 px-3 text-gray-300 rounded hover:bg-gray-700">
                Petunjuk
              </span>
            </Link>
          </li>
          <li>
            <Link href="/chat-bot">
              <span className="block py-2 px-3 text-gray-300 rounded hover:bg-gray-700">
                ChatBot
              </span>
            </Link>
          </li>
        
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
