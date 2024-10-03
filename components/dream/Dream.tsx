import DreamCardMontly from "./DreamCardMontly";
import DreamCardYearly from "./DreamCardYearly";

const Dream = () => {
  return (
    <section className="px-6">
      <h1 className="pt-[75px] pb-1 text-[#077252] font-Rubik font-medium text-[12.8px]">
        PRICING
      </h1>
      <h1 className="pb-3 font-Rubik text-[26.3px] text-[#333] font-bold tracking-[-0.5px] leading-[1]">
        Get your dream body
      </h1>
      <div>
        <DreamCardMontly />
        <DreamCardYearly />
      </div>
      <div>
        <p className="text-[#555] text-[12.8px] text-center pt-10 pb-10">
          Prices include all applicable taxes. You can cancel at any time. Both
          plans include the following:
        </p>
      </div>
    </section>
  );
};

export default Dream;
