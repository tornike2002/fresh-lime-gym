import { GiScales } from "react-icons/gi";

const DreamCardYearly = () => {
  return (
    <div className="border-[2px] bg-[#e6f2ef] overflow-hidden relative border-[#e6f2ef] 
    rounded-xl mt-8 md:w-[33%]">
      <div className="font-Rubik p-[36.6px]">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-[#077252] text-base pb-[10px] font-semibold">
            YEARLY
          </h1>
          <p className="text-[#333] text-[49px] font-semibold">
            <span className="text-[24px] pr-2">$</span>45
          </p>
          <p className="text-[#777] text-[12.8px] font-semibold">
            Pay month it's just 30$
          </p>
        </div>

        <ul className="text-[#555] text-[14.4px] justify-center flex flex-col gap-3 pt-[30px]">
          <li className="flex items-center  gap-2">
            <GiScales className="text-[19px] text-[#40c057]" /> Free sauna
          </li>
          <li className="flex items-center gap-2">
            <GiScales className="text-[19px] text-[#40c057]" /> Free chocolate
            bars
          </li>
          <li className="flex items-center gap-2">
            <GiScales className="text-[19px] text-[#40c057]" /> Chapm with you
            protein free
          </li>
          <li className="flex items-center gap-2">
            <GiScales className="text-[19px] text-[#40c057]" />
            Plan of the year
          </li>
        </ul>
        <div className="text-center pt-10 ">
          <button
            type="button"
            className="hover:bg-[#077252]  transition-colors duration-300 ease-in-out border-none rounded-[9px] py-[19.2px] px-[12.8px] text-[12.8px] bg-[#087f5b] text-white"
          >
            Get your yearly pass
          </button>
        </div>
      </div>
      <div className="absolute top-8 -right-14 rotate-45">
        <p className="bg-[#94d82d] text-center text-[#333] text-[12.8px] font-bold px-[64px] py-[6xp]">
          BEST VALUE
        </p>
      </div>
    </div>
  );
};

export default DreamCardYearly;
