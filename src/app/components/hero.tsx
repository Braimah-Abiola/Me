import Wrapper from "../wrapper/wrapper";

const Hero = () => {
  return (
    <div className="w-full flex flex-col pt-32 md:pt-40">
      <Wrapper>
        <h1 className="text-white text-7xl lg:text-9xl font-clashDisplay font-medium">
          Creative Developer<span className="text-[#00C2FF]">*</span>
        </h1>
        <div className="w-full flex flex-col md:justify-end md:items-end mt-3 md:mt-32">
          <p className=" font-clashGrotesk font-normal text-start w-full md:w-1/2 text-[#BBBBBB] text-xl md:text-3xl">
            I help brands create unique and thoughtful digital experiences
            within the modern web and mobile. Currently living in Accra, Ghana.
          </p>
        </div>
      </Wrapper>
    </div>
  );
};

export default Hero;
