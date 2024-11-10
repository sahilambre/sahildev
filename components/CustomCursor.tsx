"use client";
import React, { useEffect, useRef } from "react";

const CustomCursor = () => {
  const cursorRef = useRef<HTMLImageElement>(null);
  const targetPosition = useRef({ x: 0, y: 0 });
  const currentPosition = useRef({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  });
  const currentAngle = useRef(0);

  // Mouse move event handler
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      targetPosition.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Animation loop for smooth follow and rotation
  useEffect(() => {
    const followCursor = () => {
      const { x: targetX, y: targetY } = targetPosition.current;
      const { x: currentX, y: currentY } = currentPosition.current;

      // Smooth follow effect with interpolation
      currentPosition.current.x += (targetX - currentX) * 0.1;
      currentPosition.current.y += (targetY - currentY) * 0.1;

      // Calculate the target angle
      const targetAngle =
        Math.atan2(targetY - currentY, targetX - currentX) * (180 / Math.PI);

      // Interpolate the current angle towards the target angle
      currentAngle.current += (targetAngle - currentAngle.current) * 0.1;

      // Update cursor position and rotation smoothly
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${currentPosition.current.x}px, ${currentPosition.current.y}px) rotate(${currentAngle.current}deg)`;
      }

      requestAnimationFrame(followCursor);
    };

    followCursor();
  }, []);

  return (
    <>
      {/* Among Us Character Image */}
      <img
        ref={cursorRef}
        src="/among-us.png"
        alt="Among Us Character"
        style={{
          position: "fixed",
          width: "60px",
          height: "60px",
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
        }}
      />
    </>
  );
};

export default CustomCursor;
