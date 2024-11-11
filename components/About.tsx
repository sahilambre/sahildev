import React from "react";
import Globe from "./ui/globe";
import IconCloud from "./ui/icon-cloud";
const slugs = [
  "typescript",
  "javascript",
  "java",
  "react",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "figma",
  "adobexd",
  "python",
  "c",
  "bootstrap",
  "tailwindcss",
  "postman",
  "mongodb",
  "appwrite",
  "r",
  "graphql",
];

const About = () => {
  return (
    <>
      {/* open to work */}
      <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg border bg-background px-40 pb-40 pt-8 md:pb-60 md:shadow-xl">
        <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300 bg-clip-text text-center text-3xl font-semibold text-black">
          <h4>Open to work accross US</h4>
        </span>
        <Globe className="top-28" />
        <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.2),rgba(255,255,255,0))]" />
      </div>
      {/* tech stack */}
      <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg border bg-background px-20 pb-20 pt-8 ">
        <IconCloud iconSlugs={slugs} />
      </div>
    </>
  );
};

export default About;
