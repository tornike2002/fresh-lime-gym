import Image from "next/image";
import personalTrainer from "../../../assets/work/personal-trainer.jpg";

const PersonalTrainerCard = () => {
  return (
    <section className="relative">
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
    </section>
  );
};

export default PersonalTrainerCard;
