import Image from "next/image";
import personalTrainer from "../../../assets/work/personal-trainer.jpg";

const PersonalTrainerCard = () => {
  return (
    <section className="relative flex flex-col md:flex-row md:items-center gap-4">
      <div className="relative step-img-box flex justify-center">
        <Image
          src={personalTrainer}
          alt="personalTrainer"
          className="w-[70%] rounded-[10px] relative z-10"
        />
        {/* Before one*/}
        <div className="absolute top-1/2 left-1/2 w-full pb-[70%] bg-[#e6f2ef] rounded-[20px] -translate-x-1/2 -translate-y-1/2 z-[-2]" />
        {/* after one */}
        <div className="absolute top-1/2 left-1/2 w-[80%] pb-[60%] bg-[#b5d9ce] rounded-[20px] -translate-x-1/2 -translate-y-1/2 z-[-1]" />
      </div>
      <div>
        <p
          className="font-Rubik text-6xl text-[#ddd] pb-[9px]
         pt-[25px] md:font-medium lg:text-[98px]"
        >
          02
        </p>
        <h2 className="pb-[25px] font-Rubik text-[19px] text-[#333] font-bold lg:text-[30px]">
          One of the best personal trainers
        </h2>
        <p className="font-Rubik text-[14.4px] text-[#555] leading-[1.8] lg:text-[18px]">
          In our gym u will find world of the champions of bodybuilding and
          exactly they will make sure that u will succeses
        </p>
      </div>
    </section>
  );
};

export default PersonalTrainerCard;
