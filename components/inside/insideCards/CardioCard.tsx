import Image from "next/image";
import cardio from "../../../assets/work/card-img-1.jpg";
import { GiScales } from "react-icons/gi";
import { IoEyeOutline } from "react-icons/io5";
import { TbWoman } from "react-icons/tb";
const CardioCard = () => {
  return (
    <div
      className="shadow-insite-card font-Rubik hover:-translate-y-[15px]
     transition-all duration-500 ease rounded-[11px] pt-[38px] h-fit md:w-[33%] lg:w-[30%]"
    >
      <Image src={cardio} alt="cardio" className="w-full rounded-t-[11px]" />
      <div className="p-[25px] flex flex-col gap-3">
        <p
          className="bg-[#51cf66] text-[#333]  
         text-[9.6px] lg:text-[12px] rounded-full font-semibold px-[6px] py-[3px] w-fit"
        >
          FRESH NEW CARDIO
        </p>
        <h2 className="font-semibold text-[16px] text-[#333] leading-[1]">
          Cardio Part
        </h2>
        <ul className="text-[#555] text-[14.4px] leading-[1] flex flex-col gap-3">
          <li className="flex items-center gap-3">
            <GiScales className="text-[19px] text-[#40c057]" /> High tempo
            cardio
          </li>
          <li className="flex items-center gap-3">
            <IoEyeOutline className="text-[19px] text-[#40c057]" /> best view
          </li>
          <li className="flex items-center gap-3">
            <TbWoman className="text-[19px] text-[#40c057]" /> all kind
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CardioCard;
