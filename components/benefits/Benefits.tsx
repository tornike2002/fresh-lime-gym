import BenefitSkillsCard from "./BenefitSkillsCard";
import profile1 from "../../assets/benefits/customer-1.jpg";
const Benefits = () => {
  return (
    <section className="bg-[#e6f2ef] px-6">
      <h1 className="pt-[75px] pb-5 text-[#077252] font-Rubik font-medium text-[12.8px]">
        HOW WE WORK
      </h1>
      <h1 className="pb-3 font-Rubik text-[26.3px] text-[#333] font-bold tracking-[-0.5px] leading-[1]">
        Our benefits and skills that make u happy
      </h1>
      <BenefitSkillsCard
        img={profile1}
        desc={
          "Hi there lola here, I never liked gym before. I am lazy hahahaha, but in Fresh Lime you just can't be lazy, wanna work hours and never stop!"
        }
        name={"— Lola Lee"}
      />
    </section>
  );
};

export default Benefits;
