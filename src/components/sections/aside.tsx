"use client";
import { useState } from "react";

import { ChevronRightIcon, HomeIcon, InfoIcon } from "lucide-react";

const Aside = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <aside
      className={`fixed right-0 top-0 w-2/5 lg:w-2/12 h-full z-50 ${
        isVisible ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-300 ease-in-out`}
    >
      <button
        className="min-w-max absolute bottom-4 right-full flex flex-row items-center p-4 rounded-tl-full rounded-bl-full text-white bg-blue-500 ring-1 ring-white z-50 "
        onClick={toggleVisibility}
      >
        <h2 className="text-sm">Navigation</h2>
        <ChevronRightIcon
          className={`size-4 transition-all duration-500 ease-in-out ${
            isVisible ? "rotate-0" : "rotate-180"
          }`}
        />
      </button>
      <div className="w-full h-full bg-white border-2 p-4 overflow-auto">
        <nav className="mb-8 text-lg font-semibold text-left">
          <ul className="space-y-4">
            <li>
              <a
                href="/"
                className="flex flex-row items-center hover:text-blue-500 transition-colors duration-200"
              >
                <p className="text-xl">Home</p>
                <HomeIcon className="size-6 ml-2" />
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="flex flex-row items-center hover:text-blue-500 transition-colors duration-200"
              >
                <p className="text-xl">About</p>
                <InfoIcon className="size-6 ml-2" />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Aside;
