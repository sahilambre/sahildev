"use client";
import HeroSection from "@/components/HeroSection";
import ScrollAnimation from "@/components/ScrollAnimation";
import Particles from "@/components/ui/particles";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export default function Home() {
  const { theme } = useTheme();
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setColor(theme === "dark" ? "#ffffff" : "#000000");
  }, [theme]);
  return (
    <>
      <Particles
        className="absolute inset-0"
        quantity={500}
        ease={80}
        color={color}
        refresh
      />
      <HeroSection />
      <ScrollAnimation />
    </>
  );
}
