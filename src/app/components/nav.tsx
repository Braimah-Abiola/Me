"use client";

import Image from "next/image";
import Wrapper from "../wrapper/wrapper";
import { useEffect, useState } from "react";
import { Menu } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // You can adjust the scroll threshold as needed
      const scrollThreshold = 10;

      if (scrollY >= scrollThreshold) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="w-full flex flex-col sticky top-0 z-[9999999]">
      <Wrapper className="flex flex-row items-center w-full justify-between mt-4 md:mt-10">
        <div className=" relative w-[50px] h-[50px]">
          <Image className=" animate-spin" src="/logo.svg" fill alt="Logo" />
        </div>
        <div className="hidden md:block">
          <div
            className={`flex flex-row gap-5 px-8 py-5 rounded-full items-center  ${
              isScrolled
                ? "border-none bg-[#131313]/60 backdrop-blur-md"
                : "border border-[#212121] bg-[#131313]"
            } text-[#BBBBBB] font-clashGrotesk font-normal  text-xl`}
          >
            <p className="hover:text-white transition-colors cursor-pointer">
              Features
            </p>
            <p className="hover:text-white transition-colors cursor-pointer">
              How it works
            </p>
            <p className="hover:text-white transition-colors cursor-pointer">
              Works
            </p>
            <p className="hover:text-white transition-colors cursor-pointer">
              Testimonials
            </p>
            <p className="hover:text-white transition-colors cursor-pointer">
              FAQs
            </p>
          </div>
        </div>
        <p className="text-white hidden md:block">Hi</p>
        <div
          className={`flex flex-row gap-5 px-7 py-4 rounded-full items-center  ${
            isScrolled
              ? "border border-[#868686] bg-[#131313]/60 backdrop-blur-md"
              : "border border-[#212121] bg-[#131313]"
          } text-[#BBBBBB] font-clashGrotesk font-normal  text-xl`}
        >
          <Menu className="h-8 w-8"/>
        </div>
      </Wrapper>
    </div>
  );
};

export default Navbar;
