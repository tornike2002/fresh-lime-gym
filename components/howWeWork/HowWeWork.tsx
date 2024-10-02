import React from "react";
import BenefitCard from "./WorkCards/BenefitCard";
import PersonalTrainerCard from "./WorkCards/PersonalTrainerCard";

const HowWeWork = () => {
  return (
    <section className="px-6">
      <h1 className="text-[#077252] font-Rubik font-medium text-[12.8px]">
        HOW WE WORK
      </h1>
      <BenefitCard />
      <PersonalTrainerCard />
    </section>
  );
};

export default HowWeWork;
