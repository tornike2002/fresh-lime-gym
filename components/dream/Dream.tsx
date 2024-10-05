import DreamCardMontly from "./DreamCardMontly";
import DreamCardYearly from "./DreamCardYearly";

const Dream = () => {
  return (
    <section id="dream" className="px-6 max-w-custom mx-auto">
      <h1 className="pt-[75px] pb-1 text-[#077252] font-Rubik font-medium text-[12.8px] xl:text-[16px]">
        PRICING
      </h1>
      <h1 className="pb-3 font-Rubik text-[26.3px] text-[#333] font-bold tracking-[-0.5px] leading-[1] xl:text-[48px]">
        Get your dream body
      </h1>
      <div className="md:flex md:justify-center md:gap-10">
        <DreamCardMontly />
        <DreamCardYearly />
      </div>
      <div>
        <p className="text-[#555] text-[12.8px] text-center pt-10 pb-10 xl:text-[16px]">
          Prices include all applicable taxes. You can cancel at any time. Both
          plans include the following:
        </p>
      </div>
    </section>
  );
};

export default Dream;
