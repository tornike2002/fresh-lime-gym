import Image from "next/image";
import equipment from "../../../assets/work/equipment.jpg";
const GymEquipmentCard = () => {
  return (
    <section>
      <div className="pt-3 pb-6">
        <div className="flex justify-center flex-col mt-5 md:flex-row-reverse md:gap-4">
          <div className="flex justify-center w-[90%]  pt-5 pb-5 bg-[#e6f2ef] rounded-[20px]">
            <Image
              src={equipment}
              alt="vegitable"
              className="max-w-full w-[85%] flex-shrink-0
                border-t-8 border-[#b5d9ce] rounded-[20px] border-l-[15px] border-r-[15px] border-b-8"
            />
          </div>
          <div>
            <p className="font-Rubik text-6xl text-[#ddd] pb-[9px] pt-[25px]">
              03
            </p>
            <h2 className="pb-[25px] font-Rubik text-[19px] text-[#333] font-bold">
              Gym equipment
            </h2>
            <p className="font-Rubik text-[14.4px] text-[#555] leading-[1.8]">
              In our gym we are trying to have fresh and newest gym equipments,
              follow the trend and have everything to make easy and light your
              workout session
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GymEquipmentCard;
