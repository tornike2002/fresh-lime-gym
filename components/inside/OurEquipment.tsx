import { RiCheckDoubleFill } from "react-icons/ri";
import { CiSquarePlus } from "react-icons/ci";
const OurEquipment = () => {
  return (
    <section className="mt-16">
      <h2 className="font-Rubik text-center font-bold text-[19px] text-[#333]">
        Our equipment:
      </h2>
      <div className="flex justify-center flex-col items-center pt-6 mb-14">
        <ul className="flex flex-col gap-3 font-Rubik text-[14.4px] text-[#555]">
          <li className="flex items-center gap-3">
            <RiCheckDoubleFill className="text-[#40c057] text-[24px]" /> CHEST
            PRESS MACHINE
          </li>
          <li className="flex items-center gap-3">
            <RiCheckDoubleFill className="text-[#40c057] text-[24px]" /> SEATED
            DIP MACHINE
          </li>
          <li className="flex items-center gap-3">
            <RiCheckDoubleFill className="text-[#40c057] text-[24px]" /> CHEST
            FLY MACHINE
          </li>
          <li className="flex items-center gap-3">
            <RiCheckDoubleFill className="text-[#40c057] text-[24px]" /> BENCH
            PRESS
          </li>
          <li className="flex items-center gap-3">
            <RiCheckDoubleFill className="text-[#40c057] text-[24px]" /> INCLINE
            BENCH PRESS
          </li>
          <li className="flex items-center gap-3">
            <RiCheckDoubleFill className="text-[#40c057] text-[24px]" />{" "}
            ADJUSTABLE BENCH
          </li>
          <li className="flex items-center gap-3">
            <RiCheckDoubleFill className="text-[#40c057] text-[24px]" /> OLYMPIC
            WEIGHT BENCH
          </li>
          <li className="flex items-center gap-3">
            <RiCheckDoubleFill className="text-[#40c057] text-[24px]" /> GHD
            MACHINE
          </li>
          <li className="flex items-center gap-3">
            <CiSquarePlus className="text-[#40c057] text-[24px]" /> AND WAY MORE
          </li>
        </ul>
        <div className="pt-5">
          <a
            href="#"
            className="text-[#087f5b] font-Rubik pb-1 text-[14.4px] border-b border-b-[#087f5b] 
    hover:border-b-transparent text-center transition-all duration-300 ease-out"
          >
            Check our equipments →
          </a>
        </div>
      </div>
    </section>
  );
};

export default OurEquipment;
