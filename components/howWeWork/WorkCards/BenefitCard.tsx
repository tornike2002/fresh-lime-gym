import Image from "next/image";
import vegitable from "../../../assets/work/meal.jpg";
const BenefitCard = () => {
  return (
    <section>
      <div className="pt-3 pb-6">
        <h1 className="pb-3 font-Rubik text-[26.3px] text-[#333] font-bold tracking-[-0.5px] leading-[1]">
          Our benefits and skills that make u happy
        </h1>
        <div className="flex justify-center mt-5">
          <div className="flex justify-center w-[90%]  pt-5 pb-5 bg-[#e6f2ef] rounded-[20px]">
            <Image
              src={vegitable}
              alt="vegitable"
              className="max-w-full w-[85%] flex-shrink-0
                border-t-8 border-[#b5d9ce] rounded-[20px] border-l-[15px] border-r-[15px] border-b-8"
            />
          </div>
          <div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitCard;
