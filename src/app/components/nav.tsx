import Image from "next/image";
import Wrapper from "../wrapper/wrapper";

const Navbar = () => {
  return (
    <div className="w-full flex flex-col sticky top-0 z-[9999999]">
      <Wrapper className="flex flex-row items-center w-full justify-between mt-10">
        <div className=" relative w-[50px] h-[50px]">
          <Image className=" animate-spin" src="/logo.svg" fill alt="Logo" />
        </div>
        <div className="flex flex-row gap-5 px-8 py-5 rounded-full backdrop-blur-md items-center bg-[#131313]/40 border border-[#212121] text-[#BBBBBB] font-clashGrotesk font-normal  text-xl">
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
        <p className="text-white">Hi</p>
      </Wrapper>
    </div>
  );
};

export default Navbar;
