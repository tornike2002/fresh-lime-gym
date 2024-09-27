"use client";

import Image from "next/image";
import logo from "../assets/home/logo.png";
import { HiBars3 } from "react-icons/hi2";
import Link from "next/link";
const Burgermenu = () => {
  return (
    <section>
      <nav className="flex cursor-pointer bg-light-lime justify-between items-center px-6 py-4">
        <Link href="/">
          <Image src={logo} alt="logo" width={95} height={28} />
        </Link>
        <HiBars3 className="text-2xl cursor-pointer" />
      </nav>
      <div className="flex flex-col justify-center items-center 
      gap-5 text-light-grey font-medium text-xl font-Rubik">
        <Link href="#">How it works</Link>
        <Link href="#">Inside us</Link>
        <Link href="#">Testimonials</Link>
        <Link href="#">Pricing</Link>
        <Link href="#">Try for free</Link>
      </div>
    </section>
  );
};

export default Burgermenu;
