"use client";

import Image from "next/image";
import logo from "../assets/home/logo.png";
import { HiBars3 } from "react-icons/hi2";
import { RxCross1 } from "react-icons/rx";
import Link from "next/link";
import { useState } from "react";

const Burgermenu = () => {
  const [burgerIcon, setBurgerIcon] = useState(false);

  return (
    <section>
      <nav
        className={`flex cursor-pointer bg-light-lime justify-between items-center px-6 py-4 z-40 ${
          burgerIcon && "relative"
        }`}
      >
        <Link href="/">
          <Image src={logo} alt="logo" width={95} height={28} />
        </Link>
        {burgerIcon === false ? (
          <HiBars3
            onClick={() => setBurgerIcon(true)}
            className="text-2xl cursor-pointer"
          />
        ) : null}
      </nav>
      {burgerIcon && (
        <div
          className="fixed inset-0 flex flex-col justify-center items-center 
          gap-5 text-light-grey font-medium text-2xl font-Rubik 
          bg-white z-50"
        >
          <RxCross1
            onClick={() => setBurgerIcon(false)}
            className="absolute top-4 right-6 text-2xl cursor-pointer z-50"
          />
          <Link href="#">How it works</Link>
          <Link href="#">Inside us</Link>
          <Link href="#">Testimonials</Link>
          <Link href="#">Pricing</Link>
          <Link href="#" className="rounded-lg bg-[#087f5b] text-white px-4 py-1">
            Try for free
          </Link>
        </div>
      )}
    </section>
  );
};

export default Burgermenu;
