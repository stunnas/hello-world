"use client";
import AnimatedVideo from "@/components/sections/animatedVideo";
import Aside from "@/components/sections/aside";
import {
  FilterOptionController,
  FilterOptions,
} from "@/components/sections/filterOptionController";
import {
  TypeOptionController,
  TypeOptions,
} from "@/components/sections/typeOptionController";
import Image from "next/image";
import Link from "next/link";
import { useState, useMemo } from "react";

export default function Home() {
  const [selectedType, setSelectedType] = useState<TypeOptions>("flash");
  const [selectedFilter, setSelectedFilter] = useState<FilterOptions>("none");

  const videoSrcMap: Record<TypeOptions, string> = {
    flash: "/videos/flash.mp4",
    snap: "/videos/snap.mp4",
    stripes: "/videos/stripes.gif",
    run: "/videos/run.gif",
    pow: "/videos/pow.mp4",
    morisawa: "/videos/morisawa.gif",
  };

  const currentVideoSrc = useMemo(
    () => videoSrcMap[selectedType],
    [selectedType]
  );
  return (
    <main className="w-full max-h-screen flex flex-col items-center space-y-0 gap-0">
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
      <div className="absolute bottom-4 left-4 hidden md:flex flex-row space-x-4 z-50">
        <div className="flex flex-row items-center space-x-2 ring-1 text-white ring-white bg-blue-500 rounded-xl p-2">
          <h2 className="text-md">Type:</h2>
          <TypeOptionController
            selectedValue={selectedType}
            onSelectChange={setSelectedType}
          />
        </div>
        <div className="flex flex-row items-center space-x-2 ring-1 text-white ring-white bg-blue-500 rounded-xl p-2">
          <h2 className="text-md">Filter:</h2>
          <FilterOptionController
            selectedValue={selectedFilter}
            onSelectChange={setSelectedFilter}
          />
        </div>
      </div>

      <Aside
        selectedType={selectedType}
        setSelectedType={setSelectedType}
        selectedFilter={selectedFilter}
        setSelectedFilter={setSelectedFilter}
      />
      <AnimatedVideo
        src={currentVideoSrc}
        filter={selectedFilter}
      />
    </main>
  );
}
