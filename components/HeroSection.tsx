"use client";
import React from "react";
import HyperText from "./ui/hyper-text";
import { RainbowButton } from "./ui/rainbow-button";
import Image from "next/image";
import HeroImage from "@/public/HeroImg.jpeg";
import confetti from "canvas-confetti";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa"; // Social Media Icons
import { LuArrowDownToLine } from "react-icons/lu"; // Arrow Down Icon
import { PiMouseSimple } from "react-icons/pi";

const HeroSection = () => {
  const handleClick = () => {
    const end = Date.now() + 3 * 1000;
    const colors = ["#a786ff", "#fd8bbc", "#eca184", "#f8deb1", "#C2FFC7"];

    const frame = () => {
      if (Date.now() > end) return;

      confetti({
        particleCount: 4,
        angle: 50,
        spread: 80,
        startVelocity: 100,
        origin: { x: 0, y: 1 },
        colors,
      });
      confetti({
        particleCount: 4,
        angle: 130,
        spread: 80,
        startVelocity: 100,
        origin: { x: 1, y: 1 },
        colors,
      });

      requestAnimationFrame(frame);
    };

    frame();
  };

  // Animation Variants for the border around the image
  const borderVariants = {
    animate: {
      scale: [1, 1.08, 1],
      rotate: [0, 2, -2, 0],
      boxShadow: [
        "0 0 15px #8EECF5, 0 0 25px #A07CFE", // Neon cyan & purple
        "0 0 20px #FF9CEE, 0 0 30px #FE8FB5", // Pink & magenta glow
        "0 0 25px #FFF5BA, 0 0 35px #FFD6A0", // Soft yellow and peach
        "0 0 20px #A0F0B7, 0 0 30px #C2FFC7", // Green & minty glow
        "0 0 20px #FFA07A, 0 0 30px #ECA184", // Coral & warm peach
        "0 0 25px #B3F0FF, 0 0 35px #E0BBE4", // Light blue & pastel lavender
        "0 0 15px #F8DEB1, 0 0 25px #FD8BBC", // Soft gold and pink
      ],
      transition: {
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const imageVariants = {
    float: {
      y: [0, -20, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
    breathe: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
    bob: {
      y: [0, -10, 0],
      rotate: [-2, 2, -2],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <>
      <div className="flex flex-col md:flex-row h-screen relative">
        {/* Text Section */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center mx-4 mt-8 md:m-16 text-center">
          <div>
            <HyperText
              className="text-5xl sm:text-6xl md:text-7xl font-medium text-black dark:text-white"
              text="sahil ambre"
            />
          </div>

          {/* Pronunciation moved below name */}
          <div className="flex justify-center items-center space-x-2 mt-2">
            <h2>/ saa . hill /</h2>
          </div>

          <div className="mt-4">
            <HyperText
              className="text-xl sm:text-2xl md:text-3xl text-black dark:text-white"
              text="software developer"
            />
          </div>

          <div className="mt-4">
            <RainbowButton onClick={handleClick}>
              My Resume &nbsp;
              <LuArrowDownToLine size={20} />
            </RainbowButton>
          </div>

          {/* Social Media Links */}
          <div className="flex space-x-6 mt-12 justify-center md:justify-start">
            <a
              href="https://www.linkedin.com/in/sahilambre/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black dark:text-white hover:text-blue-500"
            >
              <FaLinkedin size={30} />
            </a>
            <a
              href="https://github.com/sahilambre"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black dark:text-white hover:text-gray-700"
            >
              <FaGithub size={30} />
            </a>
            <a
              href="https://sahilambre.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black dark:text-white hover:text-blue-400"
            >
              <FaTwitter size={30} />
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center items-center mt-8 md:mt-0">
          <motion.div
            className="relative p-2 rounded-full"
            style={{
              borderImageSource:
                "linear-gradient(90deg, #A07CFE, #FE8FB5, #FFBE7B, #FFD6A0)",
              borderImageSlice: 1,
            }}
            variants={borderVariants}
            animate="animate"
          >
            <motion.div
              variants={imageVariants}
              animate="float"
              className="rounded-full overflow-hidden"
            >
              <Image
                src={HeroImage}
                alt="Hero Image"
                className="rounded-xl"
                width={400}
                height={400}
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Scrollable Text Section */}
        <div className="absolute bottom-0 w-full">
          <div className="overflow-hidden">
            <motion.div
              className="whitespace-nowrap text-xl text-center text-gray-400 dark:text-white flex justify-center items-center space-x-2 mb-4"
              animate={{
                y: [12, 2, 12], // Animate the text moving up and down
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <PiMouseSimple size={30} /> <span>Scroll</span>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
