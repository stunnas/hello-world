"use client";
import { useState } from "react";
import { ChevronRightIcon, HomeIcon, InfoIcon } from "lucide-react";
import { usePathname } from "next/navigation";

const Aside = () => {
  const [isVisible, setIsVisible] = useState(false);
  const pathname = usePathname();

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const isActive = (linkPath: string) => pathname === linkPath;

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
            <li
              className={`rounded border transition-all duration-200 hover:text-blue-500 hover:scale-110 hover:bg-gray-500/10 ${
                isActive("/") ? "text-blue-500" : ""
              }`}
            >
              <a
                href="/"
                className={`w-full h-full flex flex-row justify-between items-center p-4`}
              >
                <p className="text-3xl">Home</p>
                <HomeIcon className="size-8 ml-2" />
              </a>
            </li>
            <li
              className={`rounded border transition-all duration-200 hover:text-blue-500 hover:scale-110 hover:bg-gray-500/10 ${
                isActive("/about") ? "text-blue-500" : ""
              }`}
            >
              <a
                href="/about"
                className={`w-full h-full flex flex-row justify-between items-center p-4`}
              >
                <p className="text-3xl">About</p>
                <InfoIcon className="size-8 ml-2" />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Aside;
