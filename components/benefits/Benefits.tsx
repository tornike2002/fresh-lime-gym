import BenefitSkillsCard from "./BenefitSkillsCard";
import profile1 from "../../assets/benefits/customer-1.jpg";
import profile2 from "../../assets/benefits/customer-2.jpg";
import profile3 from "../../assets/benefits/customer-3.jpg";
import profile4 from "../../assets/benefits/customer-4.jpg";
import Image from "next/image";
import gallery1 from "../../assets/benefits/gym-1.jpg";
import gallery2 from "../../assets/benefits/gym-2.jpg";
import gallery3 from "../../assets/benefits/gym-3.jpg";
import gallery5 from "../../assets/benefits/gym-6.jpg";
import gallery6 from "../../assets/benefits/gym-4.jpg";

const Benefits = () => {
  return (
    <section
      id="testemonials"
      className="bg-[#e6f2ef] px-6 md:flex md:flex-col lg:flex-row lg:items-center lg:py-20 lg:px-[6rem]"
    >
      <div className="pb-[75px]">
        <h1 className="pt-[75px] pb-5 text-[#077252] font-Rubik font-medium text-[12.8px] xl:text-[16px]">
          HOW WE WORK
        </h1>
        <h1 className="pb-3 font-Rubik text-[26.3px] text-[#333] font-bold tracking-[-0.5px] leading-[1] xl:text-[48px]">
          Our benefits and skills that make u happy
        </h1>
        <div className="md:flex md:flex-wrap md:-mx-3 md:gap-4">
          <div className="md:w-[45%] px-3 mb-6">
            {" "}
            {/* Card 1 */}
            <BenefitSkillsCard
              img={profile1}
              desc={
                "Hi there lola here, I never liked gym before. I am lazy hahahaha, but in Fresh Lime you just can't be lazy, wanna work hours and never stop!"
              }
              name={"— Lola Lee"}
            />
          </div>
          <div className="md:w-[45%] px-3 mb-6">
            {" "}
            {/* Card 2 */}
            <BenefitSkillsCard
              img={profile2}
              desc={
                "I'm from Maldives and I never seen Gym like Fresh Lime, love everything. They have best machines for chest and my wife loves it."
              }
              name={"— Marcus Stanford"}
            />
          </div>
          <div className="md:w-[45%] px-3 mb-6">
            {" "}
            {/* Card 3 */}
            <BenefitSkillsCard
              img={profile3}
              desc={
                "In Fresh Lime I'm feeling like home, best stuff, amazing personal stuff, one of the best protain bars inside. I love everything!"
              }
              name={"— Marta Hansen"}
            />
          </div>
          <div className="md:w-[45%] px-3 mb-6">
            {" "}
            {/* Card 4 */}
            <BenefitSkillsCard
              img={profile4}
              desc={
                "When I started I was skinny, Now I'm like mountain. Every single day coming to fresh line gave me energy, passion, happiness, joy and love!"
              }
              name={"— Steve Maccarthury"}
            />
          </div>
        </div>
      </div>
      {/* gallery images */}
      <div className="flex flex-wrap gap-2 justify-center pb-5 md:flex-nowrap lg:flex-wrap xl:flex-wrap lg:py-10">
        <div className="w-[30%] overflow-hidden rounded-[15px] ">
          <Image
            src={gallery1}
            alt="img"
            className="w-full h-full object-cover transition-transform duration-500 ease-in-out transform hover:scale-110"
          />
        </div>
        <div className="w-[30%] overflow-hidden rounded-[15px]">
          <Image
            src={gallery2}
            alt="img"
            className="w-full h-full object-cover transition-transform duration-500 ease-in-out transform hover:scale-110"
          />
        </div>
        <div className="w-[30%] overflow-hidden rounded-[15px]">
          <Image
            src={gallery3}
            alt="img"
            className="w-full h-full object-cover transition-transform duration-500 ease-in-out transform hover:scale-110"
          />
        </div>
        <div className="w-[30%] overflow-hidden rounded-[15px]">
          <Image
            src={gallery5}
            alt="img"
            className="w-full h-full object-cover transition-transform duration-500 ease-in-out transform hover:scale-110"
          />
        </div>
        <div className="w-[30%] overflow-hidden rounded-[15px]">
          <Image
            src={gallery1}
            alt="img"
            className="w-full h-full object-cover transition-transform duration-500 ease-in-out transform hover:scale-110"
          />
        </div>
        <div className="w-[30%] overflow-hidden rounded-[15px]">
          <Image
            src={gallery6}
            alt="img"
            className="w-full h-full object-cover transition-transform duration-500 ease-in-out transform hover:scale-110"
          />
        </div>
      </div>
    </section>
  );
};

export default Benefits;
