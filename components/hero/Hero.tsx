import Image from "next/image";
import customer1 from "../../assets/home/customer-1.jpg";
import customer2 from "../../assets/home/customer-2.jpg";
import customer3 from "../../assets/home/customer-3.jpg";
import customer4 from "../../assets/home/customer-4.jpg";
import customer5 from "../../assets/home/customer-5.jpg";
import customer6 from "../../assets/home/customer-6.jpg";
import gym from "../../assets/home/gym.jpg";

const Hero = () => {
  return (
    <main
      id="home"
      className="bg-light-lime flex flex-col items-center px-6 justify-center"
    >
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
          <button
            type="button"
            className="bg-[#087f5b] border-none
             text-white text-xs px-3 py-4 rounded-lg hover:bg-[#077252] 
             transition-colors duration-500 ease-in-out"
          >
            Get your month pass
          </button>
          <button
            type="button"
            className="py-4 px-3 text-[#555] text-xs bg-white rounded-lg hover:bg-[#e6f2ef] 
             transition-all duration-500 ease-in-out hover:shadow-btn-hover "
          >
            Learn more ↓
          </button>
        </div>
        {/* images of person */}
        <div className="flex items-center gap-5 justify-center mt-6 mb-6">
          <div className="flex items-center">
            <Image
              src={customer1}
              alt="heroImage"
              height={38.39}
              width={38.39}
              className="rounded-full mr-[-13px] border-[3px] border-transparent"
            />
            <Image
              src={customer2}
              alt="heroImage"
              height={38.39}
              width={38.39}
              className="rounded-full mr-[-14px] border-[3px] border-[#e6f2ef]"
            />
            <Image
              src={customer3}
              alt="heroImage"
              height={38.39}
              width={38.39}
              className="rounded-full mr-[-14px] border-[3px] border-[#e6f2ef]"
            />
            <Image
              src={customer4}
              alt="heroImage"
              height={38.39}
              width={38.39}
              className="rounded-full mr-[-14px] border-[3px] border-[#e6f2ef]"
            />
            <Image
              src={customer5}
              alt="heroImage"
              height={38.39}
              width={38.39}
              className="rounded-full mr-[-14px] border-[3px] border-[#e6f2ef]"
            />
            <Image
              src={customer6}
              alt="heroImage"
              height={38.39}
              width={38.39}
              className="rounded-full mr-[-14px] border-[3px] border-[#e6f2ef]"
            />
          </div>
          <h2 className="font-rubik text-sm font-semibold text-[#555] text-center">
            from the
            <span className="text-center text-[#077252] px-[3px] font-rubik text-sm font-semibold ">
              whole
            </span>
            world!
          </h2>
        </div>
      </div>
      {/* hero gym image */}
      <div className="mb-14 mt-9 flex justify-center">
        <Image
          src={gym}
          alt="hero main"
          className="shadow-custom-hero rounded-[15px] w-[80%] "
        />
      </div>
    </main>
  );
};

export default Hero;
