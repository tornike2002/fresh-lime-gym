import BenefitSkillsCard from "./BenefitSkillsCard";
import profile1 from "../../assets/benefits/customer-1.jpg";
import profile2 from "../../assets/benefits/customer-2.jpg";
import profile3 from "../../assets/benefits/customer-3.jpg";
import profile4 from "../../assets/benefits/customer-4.jpg";

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
      <BenefitSkillsCard
        img={profile2}
        desc={
          "I'm from Maldives and I never seen Gym like Fresh Lime, love everything. They have best machines for chest and my wife loves it."
        }
        name={"— Marcus Stanford"}
      />
      <BenefitSkillsCard
        img={profile3}
        desc={
          "In Fresh Lime I'm feeling like home, best stuff, amazing personal stuff, one of the best protain bars inside. I love everything!"
        }
        name={"— Marta Hansen"}
      />
      <BenefitSkillsCard
        img={profile4}
        desc={
          "When I started I was skinny, Now I'm like mountain. Every single day coming to fresh line gave me energy, passion, happiness, joy and love!"
        }
        name={"— Steve Maccarthury"}
      />
    </section>
  );
};

export default Benefits;
