"use client";
import React from "react";
import { HoverBorderGradient } from "../components/ui/hover-border-gradient";
import { TypewriterEffect } from "../components/ui/typewriter-effect";
import Navbar from "../components/Navbar";
const Page = () => {
    const words = [
        {
          text: "Build",
        },
        {
          text: "awesome",
        },
        {
          text: "apps",
        },
        {
          text: "with",
        },
        {
          text: "Aceternity.",
          className: "text-blue-500 dark:text-blue-500",
        },
      ];


      const AceternityLogo = () => {
        return (
          <svg
            width="66"
            height="65"
            viewBox="0 0 66 65"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-3 w-3 text-black dark:text-white"
          >
            <path
              d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
              stroke="currentColor"
              strokeWidth="15"
              strokeMiterlimit="3.86874"
              strokeLinecap="round"
            />
          </svg>
        );
      };
  return (
    <>
    {/* <Navbar /> */}
    <div className="min-h-screen w-full ">
       
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
     
      </div>
     
      
      {/* Optional gradient overlay */}


      
      {/* <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/70 to-transparent"></div> */}

      <div className="flex flex-col items-center justify-center h-[40rem] ">
      <p className="text-neutral-900 dark:text-neutral-200 text-base  mb-10">
        The road to freedom starts from here
      </p>
      <TypewriterEffect words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 mt-10">
       
      </div>
    </div>
    <div className="m-40 flex justify-center text-center">
  <HoverBorderGradient
    containerClassName="rounded-full"
    as="button"
    className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-4 px-8 py-4 text-xl font-semibold"
  >
    <AceternityLogo className="w-8 h-8" />
    <span>Take you move</span>
  </HoverBorderGradient>
</div>

    </div>
    </>
  );
};

export default Page;
