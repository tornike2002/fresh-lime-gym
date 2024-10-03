import React from "react";
type tipsTypes = {
  title: string;
  description: string;
};

const TipsCard = ({ title, description }: tipsTypes) => {
  return (
    <div className="font-Rubik">
      <h2 className="text-[19.2px] text-[#333] font-bold">{title}</h2>
      <p className="text-[14.2px] text-[#555] leading-[1.8]">{description}</p>
    </div>
  );
};

export default TipsCard;
