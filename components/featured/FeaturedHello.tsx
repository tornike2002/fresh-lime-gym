import React from "react";
import Image from "next/image";
import tech from "../../assets/featured/techcrunch.png";
import buss from "../../assets/featured/business-insider.png";
import newY from "../../assets/featured/the-new-york-times.png";
import forbes from "../../assets/featured/forbes.png";
import usa from "../../assets/featured/usa-today.png";

const FeaturedHello = () => {
  return (
    <section className="pt-[38px] pb-[76px] max-w-custom mx-auto px-6">
      <h2
        className="text-center font-Rubik text-[11px]
       text-[#999] font-medium pb-[19px] lg:text-[14px]"
      >
        As featured in hello
      </h2>
      <div className="flex items-center gap-3 justify-center w-full md:justify-between">
        <Image
          src={tech}
          alt="img"
          className="w-[15%] max-w-[150px] h-auto filter grayscale"
        />
        <Image
          src={buss}
          alt="img"
          className="w-[15%] max-w-[150px] h-auto filter grayscale"
        />
        <Image
          src={newY}
          alt="img"
          className="w-[15%] max-w-[150px] h-auto filter grayscale"
        />
        <Image
          src={forbes}
          alt="img"
          className="w-[15%] max-w-[150px] h-auto filter grayscale"
        />
        <Image
          src={usa}
          alt="img"
          className="w-[15%] max-w-[150px] h-auto filter grayscale"
        />
      </div>
    </section>
  );
};

export default FeaturedHello;
