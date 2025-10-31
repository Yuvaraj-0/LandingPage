"use client";
import React, { useRef, useState } from "react";
import { useMotionValueEvent, useScroll, motion } from "motion/react";
import { cn } from "@/app/lib/utils";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode | any;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = useState(0);
  const ref = useRef<any>(null);

  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });

  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce((acc, breakpoint, index) => {
      const distance = Math.abs(latest - breakpoint);
      return distance < Math.abs(latest - cardsBreakpoints[acc]) ? index : acc;
    }, 0);
    setActiveCard(closestBreakpointIndex);
  });

  const backgroundColor = "#000000";

  return (
    <div className="w-full p-[10rem]">  
    <motion.div
      ref={ref}
      className="relative flex  justify-center items-center space-x-14 rounded-2xl overflow-y-auto h-screen  scroll-smooth "
    >
      
      {/* Add top, bottom, left & right padding for scroll spacing */}
      <div className="flex flex-col justify-center items-start w-1/2 px-10 py-[90vh]">
      
        {content.map((item, index) => (
          <div
            key={item.title + index}
            className="min-h-screen flex flex-col justify-center"
          >
            <motion.h2
              animate={{ opacity: activeCard === index ? 1 : 0.3 }}
              className="text-6xl font-extrabold text-black tracking-tight"
            >
              {item.title}
            </motion.h2>
            <motion.p
              animate={{ opacity: activeCard === index ? 1 : 0.3 }}
              className="mt-8 text-xl text-black max-w-2xl leading-relaxed"
            >
              {item.description}
            </motion.p>
          </div>
        ))}
      </div>

      {/* Right sticky content */}
      <div
        style={{ backgroundColor }}
        className={cn(
          "sticky top-24 hidden h-[500px]  w-[500px] rounded-2xl border border-gray-700 shadow-2xl lg:block",
          contentClassName
        )}
      >
        {content[activeCard].content ?? null}
      </div>
      
    </motion.div>
    </div>
  );
};
