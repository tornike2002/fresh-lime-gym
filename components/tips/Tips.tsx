import TipsCard from "./TipsCard";
import { GiKnifeFork } from "react-icons/gi";
import { IoRocketOutline } from "react-icons/io5";
import { IoIosPause } from "react-icons/io";
import { IoIosPulse } from "react-icons/io";
const Tips = () => {
  return (
    <section className="px-6 md:flex md:gap-4 md:justify-between md:items-center md:mb-10 max-w-custom sm:mx-auto">
      <div className="flex flex-col gap-5 pt-[50px] md:w-[25%]">
        <div className=" bg-[#b5d9ce] p-3 rounded-full w-fit">
          <IoIosPulse className="text-[#087f5b]  text-[25px]  lg:text-[36px] " />
        </div>
        <TipsCard
          title="Tranin every day!"
          description="Our gym is open 365 days in year, even holidays you can come!"
        />
      </div>
      <div className="flex flex-col gap-5 pt-[50px] md:w-[25%]">
        <div className=" bg-[#b5d9ce] p-3 rounded-full w-fit">
          <GiKnifeFork className="text-[#087f5b]  text-[25px]  lg:text-[36px] " />
        </div>
        <TipsCard
          title="Natural and organic"
          description="Our proteins are best in the world and organic good for health"
        />
      </div>
      <div className="flex flex-col gap-5 pt-[50px] md:w-[25%]">
        <div className=" bg-[#b5d9ce] p-3 rounded-full w-fit">
          <IoRocketOutline className="text-[#087f5b] bg-[#b5d9ce]   text-[25px]  lg:text-[36px] rounded-full" />
        </div>
        <TipsCard
          title="motivation"
          description="We have motivation speakers to motivate you every day"
        />
      </div>
      <div className="flex flex-col gap-5 pt-[50px] md:w-[25%] pb-[50px] md:pb-0">
        <div className=" bg-[#b5d9ce] p-3 rounded-full w-fit">
          <IoIosPause className="text-[#087f5b]   text-[25px] lg:text-[36px] rounded-full bg-[#b5d9ce]" />
        </div>
        <TipsCard
          title="pause anytime"
          description="You got full year and have vacation? pause it, it is possible with us"
        />
      </div>
    </section>
  );
};

export default Tips;
