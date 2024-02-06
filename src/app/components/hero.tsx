import { FaGithub, FaYoutube } from "react-icons/fa6";
import Wrapper from "../wrapper/wrapper";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="w-full flex flex-col pt-20 md:pt-40">
      <Wrapper>
        <h1 className="text-white text-7xl lg:text-9xl font-clashDisplay font-medium">
          Creative Developer<span className="text-[#00C2FF]">*</span>
        </h1>
        <div className="w-full flex flex-col-reverse md:flex-row md:justify-between md:items-start mt-3 md:mt-32">
          <div className="flex flex-row gap-4 items-center">
            <Link href="https://youtube.com/@ahruhte" target="_blank">
              <div className="h-[65px] w-[65px] md:h-[70px] md:w-[70px] bg-[#131313] border border-[#171717] rounded-full flex items-center justify-center  text-[#656565] hover:text-[#0D0D0D] hover:bg-[#00C2FF] hover:border-[#00C2FF] transition-all cursor-pointer">
                <FaYoutube className="text-3xl" />
              </div>
            </Link>

            <Link href="https://github.com/Braimah-Abiola" target="_blank">
              <div className="h-[65px] w-[65px] md:h-[70px] md:w-[70px] bg-[#131313] border border-[#171717] rounded-full flex items-center justify-center  text-[#656565] hover:text-[#0D0D0D] hover:bg-[#00C2FF] hover:border-[#00C2FF] transition-all cursor-pointer">
                <FaGithub className="text-3xl" />
              </div>
            </Link>
          </div>
          <p className=" font-clashGrotesk font-normal text-start w-full md:w-1/2 text-[#BBBBBB] text-xl md:text-3xl mb-8 md:mb-0">
            I help brands create unique and thoughtful digital experiences
            within the modern web and mobile. Currently living in Accra, Ghana.
          </p>
        </div>
      </Wrapper>
    </div>
  );
};

export default Hero;
