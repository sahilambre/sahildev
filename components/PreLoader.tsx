"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface PreloaderProps {
  onLoaded: () => void;
}

const Preloader: React.FC<PreloaderProps> = ({ onLoaded }) => {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPercentage((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => onLoaded(), 500); // Call onLoaded after animation delay
          return 100;
        }
        return prev + 1;
      });
    }, 30); // Adjust speed for a faster or slower count

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [onLoaded]);

  return (
    <div className="fixed top-0 left-0 w-full h-full z-50">
      {percentage < 100 && (
        <motion.div
          className="absolute inset-0 flex items-center justify-center bg-black"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          style={{ willChange: "transform, opacity" }} // Hint for hardware acceleration
        >
          {/* Image animation with independent rotation speed */}
          <motion.img
            src="/among-us.webp" // Path to your image in the public folder
            alt="Among Us Character"
            className="absolute h-20 w-auto mb-40"
            style={{ willChange: "transform" }} // Apply for smoother animation
            initial={{ x: "-50vw", rotate: 0 }} // Start outside the left of the screen with no rotation
            animate={{ x: "100vw", rotate: 1080 }} // Move to the right with multiple 360-degree rotations
            transition={{
              x: { duration: 5, ease: "linear" }, // Movement transition
              rotate: { duration: 2, repeat: Infinity, ease: "linear" }, // Independent rotation speed
            }}
          />
          <motion.div
            className="text-white text-4xl font-bold"
            initial={{ scale: 1 }}
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1, repeat: Infinity, ease: "easeOut" }}
          >
            Loading {percentage}%
          </motion.div>
        </motion.div>
      )}

      {percentage === 100 && (
        <>
          <motion.div
            className="absolute top-0 left-0 w-full h-1/2 bg-black"
            initial={{ y: 0 }}
            animate={{ y: "-100%" }}
            transition={{ duration: 1, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-0 left-0 w-full h-1/2 bg-black"
            initial={{ y: 0 }}
            animate={{ y: "100%" }}
            transition={{ duration: 1, ease: "easeInOut" }}
          />
        </>
      )}
    </div>
  );
};

export default Preloader;
