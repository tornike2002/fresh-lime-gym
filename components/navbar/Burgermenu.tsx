"use client";

import Image from "next/image";
import logo from "../../assets/home/logo.png";
import { HiBars3 } from "react-icons/hi2";
import { RxCross1 } from "react-icons/rx";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Burgermenu = () => {
  const [burgerIcon, setBurgerIcon] = useState(false);

  const toggleMenu = () => {
    setBurgerIcon((prev) => !prev);
  };

  return (
    <section>
      <nav
        className={`flex cursor-pointer bg-light-lime justify-between items-center px-6 py-4 z-40`}
      >
        <Link href="/">
          <Image src={logo} alt="logo" width={95} height={28} />
        </Link>
        {burgerIcon === false ? (
          <HiBars3
            onClick={toggleMenu}
            className="text-4xl cursor-pointer lg:hidden"
          />
        ) : null}
        <div className="hidden lg:flex items-center gap-4 font-medium">
          <Link
            href="#how-it-works"
            className="text-[16.2px] text-[#333] font-Rubik transition-all duration-500 ease-in-out hover:text-[#077252]"
          >
            How it works
          </Link>
          <Link
            href="#inside-us"
            className="text-[16.2px] text-[#333] font-Rubik transition-all duration-500 ease-in-out hover:text-[#077252]"
          >
            Inside us
          </Link>
          <Link
            href="#testemonials"
            className="text-[16.2px] text-[#333] font-Rubik transition-all duration-500 ease-in-out hover:text-[#077252]"
          >
            Testimonials
          </Link>
          <Link
            href="#dream"
            className="text-[16.2px] text-[#077252] font-Rubik"
          >
            Pricing
          </Link>
          <Link
            href="#mailing"
            className="rounded-lg bg-[#087f5b] text-white px-4 py-1"
            onClick={() => setBurgerIcon(false)}
          >
            Try for free
          </Link>
        </div>
      </nav>
      <AnimatePresence>
        {burgerIcon && (
          <motion.div
            initial={{ x: "100%", opacity: 0.5 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0.5 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 flex flex-col justify-center items-center 
            gap-5 text-light-grey font-medium text-2xl font-Rubik 
            bg-white z-50"
          >
            <RxCross1
              onClick={toggleMenu}
              className="absolute top-4 right-6 text-4xl cursor-pointer z-50"
            />
            <Link href="#how-it-works" onClick={() => setBurgerIcon(false)}>
              How it works
            </Link>
            <Link href="#inside-us" onClick={() => setBurgerIcon(false)}>
              Inside us
            </Link>
            <Link href="#testemonials" onClick={() => setBurgerIcon(false)}>
              Testimonials
            </Link>
            <Link href="#dream" onClick={() => setBurgerIcon(false)}>
              Pricing
            </Link>
            <Link
              href="#mailing"
              className="rounded-lg bg-[#087f5b] text-white px-4 py-1"
              onClick={() => setBurgerIcon(false)}
            >
              Try for free
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Burgermenu;
