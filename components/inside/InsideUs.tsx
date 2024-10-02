import CardioCard from "./insideCards/CardioCard";

const InsideUs = () => {
  return (
    <section className="px-6">
      <h3 className="text-[#077252] mt-20 text-center font-Rubik font-medium text-[12.8px]">
        Inside Us
      </h3>
      <p
        className="text-center pb-3 pt-3 font-Rubik 
      text-[26.3px] text-[#333] font-bold tracking-[-0.5px] 
      leading-[1]"
      >
        At our gym u will find everything u need
      </p>
      <CardioCard />
    </section>
  );
};

export default InsideUs;
