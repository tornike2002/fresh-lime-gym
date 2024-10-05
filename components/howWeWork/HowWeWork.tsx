import React from "react";
import BenefitCard from "./WorkCards/BenefitCard";
import PersonalTrainerCard from "./WorkCards/PersonalTrainerCard";
import GymEquipmentCard from "./WorkCards/GymEquipmentCard";

const HowWeWork = () => {
  return (
    <section id="how-it-works" className="px-6 max-w-custom mx-auto">
      <h1 className="text-[#077252] font-Rubik font-medium text-[12.8px] lg:text-[16px]">
        HOW WE WORK
      </h1>
      <BenefitCard />
      <PersonalTrainerCard />
      <GymEquipmentCard />
    </section>
  );
};

export default HowWeWork;
