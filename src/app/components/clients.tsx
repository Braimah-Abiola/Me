import Image from "next/image";
import Marquee from "react-fast-marquee";

const Clients = () => {
  return (
    <div className="flex flex-col items-center w-full pt-12 md:pt-20 pb-20 md:pb-36">
      <h4 className="flex flex-row font-clashGrotesk font-normal text-xl md:text-2xl text-[#BBBBBB] mb-12 md:mb-16 text-center">
        Already chosen by great brands{" "}
        <span className="hidden md:block ml-1">and companies</span>
      </h4>
      <Marquee className=" overflow-y-hidden" autoFill>
        <div className="flex flex-row w-full gap-20 md:gap-32 items-center">
          <div className="h-[40px] w-[225px] relative ml-20 md:ml-32">
            <Image
              fill
              src="/clients/vox.png"
              alt="Vox-AI"
              className=" object-cover scale-110 object-center"
            />
          </div>
          <div className="h-[40px] w-[285px] relative">
            <Image
              fill
              src="/clients/liftinfluence.png"
              alt="Vox-AI"
              className=" object-cover scale-110 object-center"
            />
          </div>
          <div className="h-[54px] w-[280px] relative">
            <Image
              fill
              src="/clients/virtualamour.png"
              alt="Vox-AI"
              className=" object-cover scale-110 object-center"
            />
          </div>
          <div className="h-[40px] w-[225px] relative">
            <Image
              fill
              src="/clients/oownee.png"
              alt="Vox-AI"
              className=" object-cover scale-110 object-center"
            />
          </div>
          <div className="h-[50px] w-[225px] relative">
            <Image
              fill
              src="/clients/studioix.png"
              alt="Vox-AI"
              className=" object-cover scale-110 object-center"
            />
          </div>
        </div>
      </Marquee>
    </div>
  );
};

export default Clients;
