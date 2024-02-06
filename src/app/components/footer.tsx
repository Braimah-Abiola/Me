"use client";

import Image from "next/image";
import { FiArrowUp } from "react-icons/fi";
import Wrapper from "../wrapper/wrapper";
import { useEffect, useState } from "react";

const Footer = () => {
  const [localTime, setLocalTime] = useState("");

  useEffect(() => {
    const getCurrentTime = () => {
      const options: Intl.DateTimeFormatOptions = {
        hour: "numeric",
        minute: "numeric",
        timeZoneName: "short",
      };
      const timeString = new Intl.DateTimeFormat("en-US", options).format(
        new Date()
      );
      setLocalTime(timeString);
    };

    const intervalId = setInterval(getCurrentTime, 60000);

    getCurrentTime();

    return () => clearInterval(intervalId);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="w-full flex flex-col py-10 mt-20 md:mt-60">
      <Wrapper className="flex flex-col gap-20 md:gap-0 md:flex-row justify-between items-center">
        <div className=" relative w-[38px] h-[38px]">
          <Image className=" animate-ping" src="/logo.svg" fill alt="Logo" />
        </div>

        <div className="flex flex-row gap-2 md:gap-2 items-center text-[#BBBBBB] font-clashGrotesk text-xl">
          <p className="">&copy; 2024 Arete</p>
          <p className=""> {localTime}</p>
        </div>

        <div
          onClick={() => {
            handleScrollToTop();
          }}
          className="flex flex-col items-center justify-center h-16 w-16 md:h-20 md:w-20 rounded-full transition-all hover:text-black text-white cursor-pointer bg-[#131313] hover:bg-[#00C2FF]"
        >
          <FiArrowUp className="text-2xl" />
        </div>
      </Wrapper>
    </div>
  );
};

export default Footer;
