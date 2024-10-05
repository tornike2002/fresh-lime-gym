import BestBarsCard from "./insideCards/BestBarsCard";
import CardioCard from "./insideCards/CardioCard";
import OurEquipment from "./OurEquipment";

const InsideUs = () => {
  return (
    <section id="inside-us" className="px-6">
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
      <div className="md:flex md:gap-5 md:items-center">
        <CardioCard />
        <BestBarsCard />
        <div>
          <OurEquipment />
        </div>
      </div>
      <div className="hidden md:flex md:justify-center md:items-center md:pb-20">
          <a
            href="#"
            className="text-[#087f5b] font-Rubik pb-1 text-[14.4px] border-b border-b-[#087f5b] 
    hover:border-b-transparent text-center transition-all duration-300 ease-out"
          >
            Check our equipments →
          </a>
        </div>
    </section>
  );
};

export default InsideUs;
