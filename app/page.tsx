"use client";
import HeroSection from "@/components/HeroSection";
import ScrollAnimation from "@/components/ScrollAnimation";
import Particles from "@/components/ui/particles";
import Preloader from "@/components/PreLoader"; // Import your Preloader component
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import About from "@/components/About";
export default function Home() {
  const { theme } = useTheme();
  const [color, setColor] = useState("#ffffff");
  const [isLoaded, setIsLoaded] = useState(false); // State to control loading

  useEffect(() => {
    setColor(theme === "dark" ? "#ffffff" : "#000000");
  }, [theme]);

  const handleLoaded = () => {
    setTimeout(() => {
      setIsLoaded(true); // Delay setting `isLoaded` to match animation duration
    }, 1000); // Adjust this to match the duration of the exit animation in Preloader
  };

  return (
    <>
      {!isLoaded && <Preloader onLoaded={handleLoaded} />}{" "}
      {/* Preloader component */}
      <div
        className={`transition-opacity duration-1000 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* Particles and main content are only visible after loading */}
        <Particles
          className="absolute inset-0"
          quantity={500}
          ease={80}
          color={color}
          refresh
        />
        <HeroSection />
        <ScrollAnimation />
        <br />
        <br />
        <br />
        <br />
        {/* <About /> */}
      </div>
    </>
  );
}
