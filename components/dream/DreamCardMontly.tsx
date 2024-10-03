import { GiScales } from "react-icons/gi";
const DreamCardMontly = () => {
  return (
    <div className="border-[2px] border-[#e6f2ef] rounded-md mt-8">
      <div className="font-Rubik p-[36.6px]">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-[#077252] text-base pb-[10px] font-semibold">
            MONTLY
          </h1>
          <p className="text-[#333] text-[49px] font-semibold">
            <span className="text-[24px] pr-2">$</span>45
          </p>
          <p className="text-[#777] text-[12.8px] font-semibold">
            Pay every single month
          </p>
        </div>

        <ul className="text-[#555] text-[14.4px] justify-center flex flex-col gap-3 pt-[30px]">
          <li className="flex items-center gap-2">
            <GiScales className="text-[19px] text-[#40c057]" /> High quality
            stuff
          </li>
          <li className="flex items-center gap-2">
            <GiScales className="text-[19px] text-[#40c057]" /> Open 24/7
          </li>
          <li className="flex items-center gap-2">
            <GiScales className="text-[19px] text-[#40c057]" /> Every 10th
            protein free
          </li>
          <li className="text-[#40c057] text-[19px]">X</li>
        </ul>
        <div className="text-center pt-10 ">
          <button
            type="button"
            className="hover:bg-[#077252]  transition-colors duration-300 ease-in-out border-none rounded-[9px] py-[19.2px] px-[12.8px] text-[12.8px] bg-[#087f5b] text-white"
          >
            Get your month pass
          </button>
        </div>
      </div>
    </div>
  );
};

export default DreamCardMontly;
