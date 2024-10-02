import Image from "next/image";
import cardio from "../../../assets/work/card-img-1.jpg";
const CardioCard = () => {
  return (
    <div className="shadow-insite-card">
      <Image src={cardio} alt="cardio" className="w-full rounded-[11px]" />
      <div>
        <p>FRESH NEW CARDIO</p>
        <h2>Cardio Part</h2>
        <div>
            
        </div>
      </div>
    </div>
  );
};

export default CardioCard;
