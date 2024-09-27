import Image from "next/image";

const Hero = () => {
  return (
    <main className="bg-light-lime flex flex-col items-center px-6 justify-center">
      <div className="font-Rubik">
        <h1
          className=" pb-[25px] text-center text-[41px] text-light-grey font-bold
        leading-[1.05]"
        >
          Welcome to the one of the best Gym Freshlime
        </h1>
        <p className="text-[#555] text-center pb-[36px]">
          This is the cheapest, comfrtable, best price with world champion
          coatches and one of the best barthender for your protain shakes.
        </p>
        <div className="flex items-center gap-3 justify-center">
          <button type="button" className="bg-[#087f5b] border-none text-white text-xs px-3 py-4 rounded-lg">
            Get your month pass
          </button>
          <button type="button" className="py-4 px-3 text-[#555] text-xs bg-white rounded-lg">
            Learn more ↓
          </button>
        </div>
        <div>
          <Image src={""} alt="heroImage" />
          <h2>from the whole world!</h2>
        </div>
      </div>
      <div></div>
    </main>
  );
};

export default Hero;
