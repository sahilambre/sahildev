import React from "react";
import Image from "next/image";

const UnderConstruction = () => {
  return (
    <div className="flex items-center justify-center h-screen w-screen">
      <Image
        src="/under-construction.png"
        alt="Under Construction"
        height={750}
        width={750}
      />
    </div>
  );
};

export default UnderConstruction;
