import React from "react";
type tipsTypes = {
  title: string;
  description: string;
};

const TipsCard = ({ title, description }: tipsTypes) => {
  return (
    <div className="font-Rubik md:h-[235px]">
      <h2 className="text-[19.2px] text-[#333] font-bold xl:text-[24px]">{title}</h2>
      <p className="text-[14.2px] text-[#555] leading-[1.8] xl:text-[18px]">{description}</p>
    </div>
  );
};

export default TipsCard;
