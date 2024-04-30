"use client";
import { useState, useEffect } from "react";
import { ChevronRightIcon, HomeIcon, InfoIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import { TypeOptionController, TypeOptions } from "./typeOptionController";
import {
  FilterOptionController,
  FilterOptions,
} from "./filterOptionController";

interface AsideProps {
  selectedType?: TypeOptions;
  setSelectedType?: React.Dispatch<React.SetStateAction<TypeOptions>>;
  selectedFilter?: FilterOptions;
  setSelectedFilter?: React.Dispatch<React.SetStateAction<FilterOptions>>;
}

const Aside: React.FC<AsideProps> = ({
  selectedType,
  setSelectedType,
  selectedFilter,
  setSelectedFilter,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [windowWidth, setWindowWidth] = useState<number>(1920);
  const pathname = usePathname();

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const isActive = (linkPath: string) => pathname === linkPath;

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Set initial width
    handleResize();

    // Add event listener for resize
    window.addEventListener("resize", handleResize);

    // Clean up function to remove event listener
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <aside
      className={`fixed right-0 top-0 w-2/5 md:w-1/4 h-full z-50 ${
        isVisible ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-300 ease-in-out`}
    >
      <button
        className="min-w-max absolute bottom-4 right-full flex flex-row items-center p-4 rounded-tl-full rounded-bl-full text-white bg-blue-500 ring-1 ring-white z-50 "
        onClick={toggleVisibility}
      >
        <h2 className="text-sm">
          Navigation {windowWidth < 792 ? "+ Controllers" : ""}
        </h2>
        <ChevronRightIcon
          className={`size-4 transition-all duration-500 ease-in-out ${
            isVisible ? "rotate-0" : "rotate-180"
          }`}
        />
      </button>
      <div className="w-full h-full bg-white border-2 p-4 space-y-8 overflow-auto">
        {/* Navigation */}
        <nav className="text-lg font-semibold text-left">
          <p className=" font-light">Navigation:</p>
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
                <p className="text-xl md:text-3xl">Home</p>
                <HomeIcon className="size-6 md:size-8 ml-2" />
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
                <p className="text-xl md:text-3xl">About</p>
                <InfoIcon className="size-6 md:size-8 ml-2" />
              </a>
            </li>
          </ul>
        </nav>
        {pathname === "/" && (
          <div className="flex flex-col md:hidden w-full space-y-4">
            <div className="w-full h-1 bg-gray-500/50" />
            {/* Controllers */}
            <div className="text-lg font-semibold text-left">
              <p className="font-light">Controllers:</p>
              <ul className="space-y-4">
                <li
                  className={`flex flex-col lg:flex-row items-start justify-center lg:justify-between rounded`}
                >
                  <h2 className="text-xl lg:text-3xl">Type:</h2>
                  <TypeOptionController
                    selectedValue={selectedType}
                    onSelectChange={setSelectedType}
                  />
                </li>
                <li
                  className={`flex flex-col lg:flex-row items-start justify-center lg:justify-between rounded`}
                >
                  <h2 className="text-xl lg:text-3xl">Filter:</h2>
                  <FilterOptionController
                    selectedValue={selectedFilter}
                    onSelectChange={setSelectedFilter}
                  />
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </aside>
  );
};

export default Aside;
