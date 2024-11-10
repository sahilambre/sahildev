import React from "react";
import { VelocityScroll } from "./ui/scroll-based-velocity";

const TechStack = () => {
  return (
    <div>
      <VelocityScroll
        text="I write code."
        default_velocity={3}
        className="font-display text-center text-3xl font-bold tracking-[-0.02em] text-black drop-shadow-sm dark:text-white md:text-7xl md:leading-[5rem]"
      />
    </div>
  );
};

export default TechStack;
