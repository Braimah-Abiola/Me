import Image from "next/image";
import Marquee from "react-fast-marquee";

const Clients = () => {
  return (
    <div className="flex flex-col items-center w-full pt-20 pb-36">
      <h4 className=" font-clashGrotesk font-normal text-2xl text-[#BBBBBB] mb-16">
        Already chosen by great brands and companies
      </h4>
      <Marquee autoFill>
        <div className="flex flex-row w-full gap-32 items-center">
          <div className="h-[40px] w-[225px] relative ml-32">
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
        </div>
      </Marquee>
    </div>
  );
};

export default Clients;
