import Benefits from "@/components/benefits/Benefits";
import Dream from "@/components/dream/Dream";
import FeaturedHello from "@/components/featured/FeaturedHello";
import Hero from "@/components/hero/Hero";
import HowWeWork from "@/components/howWeWork/HowWeWork";
import InsideUs from "@/components/inside/InsideUs";
import MailSender from "@/components/mail/MailSender";
import Tips from "@/components/tips/Tips";

export default function Home() {
  return (
    <section>
      <Hero />
      <FeaturedHello />
      <HowWeWork />
      <InsideUs />
      <Benefits />
      <Dream />
      <Tips />
      <MailSender />
    </section>
  );
}
