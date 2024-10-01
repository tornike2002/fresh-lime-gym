import FeaturedHello from "@/components/featured/FeaturedHello";
import Hero from "@/components/hero/Hero";
import HowWeWork from "@/components/howWeWork/HowWeWork";

export default function Home() {
  return (
    <section>
      <Hero />
      <FeaturedHello />
      <HowWeWork />
    </section>
  );
}
