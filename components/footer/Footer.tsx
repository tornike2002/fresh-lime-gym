import Image from "next/image";
import logo from "../../assets/home/logo.png";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import Link from "next/link"; 

const Footer = () => {
  return (
    <footer className="px-6 border-t border-[#eee] pt-24 pb-24">
      <div className="flex items-center gap-3 justify-between">
        <ul className="font-Rubik flex flex-col gap-1">
          <li className="text-[#555] text-[14.4px] font-medium">Account</li>
          <li className="text-[#767675] text-[12.8px] pt-3">
            <Link href="#home">Create account</Link>
          </li>
          <li className="text-[#767675] text-[12.8px]">
            <Link href="#home">Sign in</Link>
          </li>
          <li className="text-[#767675] text-[12.8px]">
            <Link href="#home">IOS app</Link>
          </li>
          <li className="text-[#767675] text-[12.8px]">
            <Link href="#home">Android app</Link>
          </li>
        </ul>
        <ul className="font-Rubik flex flex-col gap-1">
          <li className="text-[#555] text-[14.4px] font-medium">Company</li>
          <li className="text-[#767675] text-[12.8px] pt-3">
            <Link href="#home">About FreshLime</Link>
          </li>
          <li className="text-[#767675] text-[12.8px]">
            <Link href="#home">For Business</Link>
          </li>
          <li className="text-[#767675] text-[12.8px]">
            <Link href="#home">Partners</Link>
          </li>
          <li className="text-[#767675] text-[12.8px]">
            <Link href="#home">Careers</Link>
          </li>
        </ul>
        <ul className="font-Rubik flex flex-col gap-1">
          <li className="text-[#555] text-[14.4px] font-medium">Resources</li>
          <li className="text-[#767675] text-[12.8px] pt-3">
            <Link href="#home">Working plan</Link>
          </li>
          <li className="text-[#767675] text-[12.8px]">
            <Link href="#home">Help center</Link>
          </li>
          <li className="text-[#767675] text-[12.8px]">
            <Link href="#home">Privacy & Terms</Link>
          </li>
          <li className="text-[#767675] text-[12.8px]">
            <Link href="#home">My other works</Link>
          </li>
        </ul>
      </div>
      <div className="pt-24 flex justify-between items-start">
        <div className="flex flex-col gap-4">
          <Image src={logo} alt="logo" className="w-[62px]" />
          <div className="flex items-center gap-5 text-[19px] text-[#767676]">
            <FaInstagram className="cursor-pointer hover:text-[#000] transition-colors duration-500 ease-in-out" />
            <FaFacebook className="cursor-pointer hover:text-[#000] transition-colors duration-500 ease-in-out" />
            <FaTwitter className="cursor-pointer hover:text-[#000] transition-colors duration-500 ease-in-out" />
          </div>
          <p className="text-[#087f5b] leading-[1.8] text-[11.2px] pt-10 max-w-[70%]">
            Copyright © created in 2024 by Tornike Butiashvili
          </p>
        </div>
        <div>
          <ul className="font-Rubik flex flex-col gap-1">
            <li className="text-[#555] text-[14.4px] font-medium">
              Contact us
            </li>
            <li className="text-[#767675] text-[12.8px] pt-3">
              Tbilisi Georgia,
            </li>
            <li className="text-[#767675] text-[12.8px]">Digomi Masivi,</li>
            <li className="text-[#767675] text-[12.8px] pb-4">
              Mikeladze street
            </li>
            <li className="text-[#767675] text-[12.8px]">+995571373839</li>
            <li className="text-[#767675] text-[12.8px]">tornike@gmail.com</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
