import Image, { StaticImageData } from "next/image";
type benefitTypes = {
  img: string | StaticImageData;
  desc: string;
  name: string;
};
const BenefitSkillsCard = ({ img, desc, name }: benefitTypes) => {
  return (
    <div>
      <div className="font-Rubik flex flex-col gap-2  pt-[25px]">
        <Image src={img} alt="img" width={51} className="rounded-full" />
        <p className="text-[#555] text-[14.4px] leading-[1.8] lg:text-[18px]">
          {desc}
        </p>
        <p className="text-[12.8px] text-[#777] lg:text-[16px]">{name}</p>
      </div>
    </div>
  );
};

export default BenefitSkillsCard;
