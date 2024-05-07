"use client";
import Aside from "@/components/sections/aside";
import {
  CollapsibleTrigger,
  CollapsibleContent,
  Collapsible,
} from "@/components/ui/collapsible";
import { ChevronRightIcon } from "lucide-react";
import { useState, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

interface CollapsibleComponentProps {
  title: string;
  children: ReactNode; // This type is appropriate for any valid React child, including JSX elements, strings, numbers, and arrays of these types.
}

const CollapsibleComponent: React.FC<CollapsibleComponentProps> = ({
  title,
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  // Define animation variants for Framer Motion
  const variants = {
    open: {
      opacity: 1,
      scaleY: 1,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
    collapsed: {
      opacity: 0,
      scaleY: 0,
      transition: {
        scaleY: { duration: 0.8, ease: "easeInOut" },
        opacity: { delay: 0.7, duration: 0.1 },
      },
    },
  };

  return (
    <Collapsible>
      <CollapsibleTrigger
        className="flex items-center justify-between w-full px-4 py-3 bg-gray-100 rounded-lg cursor-pointer"
        onClick={toggleOpen}
      >
        <h3 className="text-lg font-medium">{title}</h3>
        <ChevronRightIcon
          className={`w-5 h-5 transition-transform duration-300 ${
            isOpen ? "rotate-90" : ""
          }`}
        />
      </CollapsibleTrigger>
      <AnimatePresence initial={false}>
        <motion.div
          initial="collapsed"
          animate={isOpen ? "open" : "collapsed"}
          exit="collapsed"
          variants={variants}
          style={{ overflow: "hidden", transformOrigin: "top" }}
        >
          <CollapsibleContent className="px-4 py-3 text-left">
            {children}
          </CollapsibleContent>
        </motion.div>
      </AnimatePresence>
    </Collapsible>
  );
};

export default function About() {
  return (
    <main className="w-full min-h-screen flex flex-col items-center justify-center space-y-0 gap-0 p-4">
      <div className="absolute top-4 left-4 flex flex-row items-center justify-center space-x-2 text-blue-500 z-50">
        <Link
          href="/"
          className="size-16"
        >
          <Image
            height={200}
            width={200}
            src="/images/helloWorld.png"
            alt="hello world logo"
            priority={true}
          />
        </Link>
        <span className="text-4xl">/</span>
        <Link
          href="https://caa-v1.vercel.app/"
          target="_blank"
          className="size-16"
        >
          <Image
            height={200}
            width={200}
            src="/images/caa.png"
            alt="personal logo"
            priority={true}
          />
        </Link>
      </div>
      <div className="container px-4 md:px-6 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          About This Project
        </h2>
        <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400 mt-4">
          I created this &quot;Hello World&quot; website just for fun to test
          state management with React and work with videos and images
          interchangeably.
        </p>
        <div className="mt-8 space-y-4">
          <CollapsibleComponent title="Project Goals">
            <p>The main goals of this project were to:</p>
            <ul className="list-disc pl-6 mt-2">
              <li>Explore state management with React</li>
              <li>Experiment with interchangeable video and image content</li>
              <li>Create a clean and responsive user interface</li>
              <li>Showcase my skills in front-end development</li>
              <li>Have fun and learn something new!</li>
            </ul>
          </CollapsibleComponent>
          <CollapsibleComponent title="Technologies Used">
            <p>This project was built using the following technologies:</p>
            <ul className="list-disc pl-6 mt-2">
              <li>Next.js for setup</li>
              <li>React.js for the front-end framework</li>
              <li>Tailwind CSS for styling and responsive design</li>
              <li>Vercel for hosting and deployment</li>
              <li>Shadcn/ui for the UI components</li>
              <li>Framer Motion for animations</li>
              <li>Lucide for icons</li>
              <li className="font-bold">
                <Link
                  href="https://spacetypegenerator.com/"
                  target="_blank"
                  className="text-blue-500 underline hover:text-blue-700"
                >
                  Space Type Generator
                </Link>
                &nbsp;by&nbsp;
                <Link
                  href="https://www.kielm.com/"
                  target="_blank"
                  className="text-blue-500 underline hover:text-blue-700"
                >
                  Kielm
                </Link>
                &nbsp;for videos and gifs
              </li>
            </ul>
          </CollapsibleComponent>
          <CollapsibleComponent title="Key Features">
            <p>Some of the key features of this project include:</p>
            <ul className="list-disc pl-6 mt-2">
              <li>Responsive and mobile-friendly design</li>
              <li>Smooth transitions and animations</li>
              <li>Ability to switch between video and image(gifs) content</li>
              <li>Collapsible sections for easy navigation</li>
              <li>Clean and organized layout for a pleasant user experience</li>
            </ul>
          </CollapsibleComponent>
          <CollapsibleComponent title="Future Improvements">
            <p>Some potential future improvements for this project include:</p>
            <ul className="list-disc pl-6 mt-2">
              <li>Implement a more robust state management solution</li>
              <li>Add more interactive features and user engagement</li>
              <li>Improve accessibility and compliance with web standards</li>
              <li>Expand the content and functionality of the website</li>
              <li>
                Optimize performance and load times (more than already is :P)
              </li>
            </ul>
          </CollapsibleComponent>
          <CollapsibleComponent title="About the developer">
            <p>
              I am a passionate front-end developer with a strong interest in
              React, Tailwind CSS, and creating beautiful user interfaces. This
              project is a reflection of my skills and a testament to my
              dedication to continuous learning and improvement.
            </p>
            <p className="mt-2">
              Feel free to explore the rest of the website and let me know if
              you have any feedback or suggestions. I&apos;m always eager to
              learn and grow as a developer.&nbsp;
              <Link
                className="mt-2 text-blue-500 underline hover:text-blue-700"
                href="https://caa-v1.vercel.app/"
              >
                Go to my website.
              </Link>
            </p>
          </CollapsibleComponent>
        </div>
      </div>
      <Aside />
    </main>
  );
}
