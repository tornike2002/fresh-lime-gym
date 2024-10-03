import Benefits from "@/components/benefits/Benefits";
import FeaturedHello from "@/components/featured/FeaturedHello";
import Hero from "@/components/hero/Hero";
import HowWeWork from "@/components/howWeWork/HowWeWork";
import InsideUs from "@/components/inside/InsideUs";

export default function Home() {
  return (
    <section>
      <Hero />
      <FeaturedHello />
      <HowWeWork />
      <InsideUs />
      <Benefits />
    </section>
  );
}
