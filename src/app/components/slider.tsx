import Marquee from "react-fast-marquee";

const Slider = () => {
  return (
    <div className="mt-32 relative z-50">
      <div className="h-[80px] md:h-[100px] -rotate-2 bg-[#00C2FF] text-black font-clashDisplay font-medium text-5xl md:text-6xl flex flex-col items-center justify-center w-full">
        <Marquee className=" overflow-y-hidden" autoFill>
          <h1 className="uppercase font-clashDisplay">Creative Developer</h1>
          <h1 className="uppercase font-clashDisplay mx-12">-</h1>
          <h1 className="uppercase font-clashDisplay">Interation Design</h1>
          <h1 className="uppercase font-clashDisplay mx-12">-</h1>
          <h1 className="uppercase font-clashDisplay">UX Design</h1>
          <h1 className="uppercase font-clashDisplay mx-12">-</h1>
        </Marquee>
      </div>
    </div>
  );
};

export default Slider;
