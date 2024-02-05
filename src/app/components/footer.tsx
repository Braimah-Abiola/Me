import Image from "next/image";
import { FiArrowUp } from "react-icons/fi";
import Wrapper from "../wrapper/wrapper";

const Footer = () => {
  return (
    <div className="w-full flex flex-col py-10 mt-20 md:mt-60">
      <Wrapper className="flex flex-col gap-20 md:gap-0 md:flex-row justify-between items-center">
        <div className=" relative w-[38px] h-[38px]">
          <Image className=" animate-ping" src="/logo.svg" fill alt="Logo" />
        </div>

        <div className="flex flex-row gap-6 md:gap-10 items-center text-[#BBBBBB] font-clashGrotesk text-xl">
          <p className="hover:text-white transition-colors cursor-pointer">
            Privacy Policy
          </p>
          <p className="hover:text-white transition-colors cursor-pointer">
            Terms & Condition
          </p>
        </div>

        <div className="flex flex-col items-center justify-center h-14 w-14 rounded-full transition-all hover:text-black text-white cursor-pointer bg-[#131313] hover:bg-[#00C2FF]">
          <FiArrowUp className="text-xl" />
        </div>
      </Wrapper>
    </div>
  );
};

export default Footer;
