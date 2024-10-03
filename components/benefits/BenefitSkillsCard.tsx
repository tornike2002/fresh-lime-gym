import Image, { StaticImageData } from "next/image";
type benefitTypes = {
  img: string | StaticImageData;
  desc: string;
  name: string;
};
const BenefitSkillsCard = ({ img, desc, name }: benefitTypes) => {
  return (
    <div>
      <div className="font-Rubik flex flex-col gap-2 pb-[75px] pt-[25px]">
        <Image
          src={img}
          alt="img"
          width={51}
          className="rounded-full"
        />
        <p className="text-[#555] text-[14.4px] leading-[1.8]">{desc}</p>
        <p className="text-[12.8px] text-[#777]">{name}</p>
      </div>
    </div>
  );
};

export default BenefitSkillsCard;
