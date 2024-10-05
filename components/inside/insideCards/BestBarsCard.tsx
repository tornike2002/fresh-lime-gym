import Image from "next/image";
import bestBards from "../../../assets/work/card-img-2.jpg";
import { IoBarbell } from "react-icons/io5";
import { TfiCup } from "react-icons/tfi";
import { GiSpeaker } from "react-icons/gi";
const BestBarsCard = () => {
  return (
    <div
      className="shadow-insite-card font-Rubik hover:-translate-y-[15px]
 transition-all duration-500 ease rounded-[11px] pt-[38px] h-fit md:w-[33%]"
    >
      <Image src={bestBards} alt="cardio" className="w-full rounded-t-[11px]" />
      <div className="p-[25px] flex flex-col gap-3">
        <p
          className="bg-[##94d82d] text-[#333]  
     text-[9.6px] rounded-full font-semibold px-[6px] py-[3px] w-fit"
        >
          HEAVY BARS
        </p>
        <h2 className="font-semibold text-[16px] text-[#333] leading-[1]">
          Best Bars
        </h2>
        <ul className="text-[#555] text-[14.4px] leading-[1] flex flex-col gap-3">
          <li className="flex items-center gap-3">
            <IoBarbell className="text-[19px] text-[#40c057]" /> 100KG plus
          </li>
          <li className="flex items-center gap-3">
            <TfiCup className="text-[19px] text-[#40c057]" /> champion
          </li>
          <li className="flex items-center gap-3">
            <GiSpeaker className="text-[19px] text-[#40c057]" /> support
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BestBarsCard;
