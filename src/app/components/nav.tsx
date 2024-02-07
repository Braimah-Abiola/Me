"use client";

import Image from "next/image";
import Wrapper from "../wrapper/wrapper";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [toggle, setToggle] = useState(false);

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
        <Link href="/">
          <div className=" relative w-[50px] h-[50px]">
            <Image className=" animate-spin" src="/logo.svg" fill alt="Logo" />
          </div>
        </Link>
        <div className="hidden md:block">
          <div
            className={`flex flex-row ml-20 gap-5 px-8 py-4 rounded-full items-center  ${
              isScrolled
                ? "border border-[#656565] bg-[#131313]/60 backdrop-blur-md"
                : "border border-[#212121] bg-[#131313]"
            } text-[#BBBBBB] font-clashGrotesk font-normal text-xl`}
          >
            <Link href="/#about">
              <p className="hover:text-white transition-colors cursor-pointer">
                About
              </p>
            </Link>
            <Link href="/#services">
              <p className="hover:text-white transition-colors cursor-pointer">
                Services
              </p>
            </Link>
            <Link href="/#works">
              <p className="hover:text-white transition-colors cursor-pointer">
                Works
              </p>
            </Link>
            <Link href="/#faqs">
              <p className="hover:text-white transition-colors cursor-pointer">
                FAQs
              </p>
            </Link>
          </div>
        </div>
        <Link href="/contact">
          <button
            className={`hidden md:block px-5 rounded-full py-4 border font-clashGrotesk text-xl ${
              isScrolled
                ? "border-[#656565] bg-[#131313]/60 backdrop-blur-md text-[#BBBBBB] hover:text-white transition-all duration-100"
                : "border border-[#00C2FF] bg-[#00C2FF] text-[#0D0D0D]"
            }  font-clashGrotesk font-normal text-xl
        `}
          >
            Contact Me
          </button>
        </Link>
        <div className="md:hidden">
          <div
            onClick={() => setToggle((prev) => !prev)}
            className={`flex flex-row gap-5 px-7 py-4 rounded-full items-center cursor-pointer  ${
              isScrolled
                ? "border border-[#868686] bg-[#131313]/60 backdrop-blur-md"
                : "border border-[#212121] bg-[#131313]"
            } text-[#BBBBBB] font-clashGrotesk font-normal  text-xl`}
          >
            {toggle ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
          </div>
          <div
            className={`${
              toggle ? "flex" : "hidden"
            } p-6 border backdrop-blur-sm border-[#212121] bg-[#131313] border-primary absolute top-24 left-4 right-4 rounded-3xl z-20 ${
              isScrolled
                ? "border-[#868686] bg-[#131313]/60 backdrop-blur-md"
                : "border border-[#212121] bg-[#131313]"
            } text-[#BBBBBB] font-clashGrotesk font-normal text-xl`}
          >
            <ul className="list-none flex-col justify-center w-full items-center flex gap-4">
              <li className=" hover:text-white transition-all">
                <Link href="/#about">
                  <p>About</p>
                </Link>
              </li>
              <li className=" hover:text-white transition-all">
                <Link href="/#services">
                  <p>Services</p>
                </Link>
              </li>
              <li className=" hover:text-white transition-all">
                <Link href="/#works">
                  <p>Works</p>
                </Link>
              </li>
              <li className=" hover:text-white transition-all">
                <Link href="/#faqs">
                  <p>FAQs</p>
                </Link>
              </li>
              <li className=" hover:text-white transition-all">
                <Link href="/contact">
                  <p>Contact Me</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Navbar;
