import React from "react";
import ShimmerButton from "./ui/shimmer-button";
import { BsClipboard2Plus } from "react-icons/bs";
import confetti from "canvas-confetti";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const handleClick = () => {
    // Copy email to clipboard
    navigator.clipboard
      .writeText("sahil01ambre@gmail.com")
      .then(() => {
        // Show toast notification
        toast.success("Email copied to clipboard!", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          theme: "colored",
        });

        // Trigger confetti animation
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
      })
      .catch(() => {
        // Handle clipboard error
        toast.error("Failed to copy email.", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          theme: "colored",
        });
      });
  };

  return (
    <div>
      <div className="flex flex-col justify-center items-center mb-8">
        <h1 className="text-5xl font-semibold">Let&apos;s connect</h1>
        <h3 className="text-2xl">Feel free to reach out to me! 🙌🏼</h3>
      </div>
      <div className="z-10 flex  items-center justify-center mb-20">
        <ShimmerButton
          className="flex items-center gap-2 shadow-2xl"
          onClick={handleClick}
        >
          <BsClipboard2Plus className="text-white dark:text-slate-900 lg:text-lg" />
          <span className="text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900 lg:text-lg">
            Copy My Email
          </span>
        </ShimmerButton>
      </div>
    </div>
  );
};

export default Contact;
