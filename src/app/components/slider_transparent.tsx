import Marquee from "react-fast-marquee";

const SliderTransparent = () => {
  return (
    <div className="mt-2 mb-32 relative z-10">
      <div className="h-fit rotate-3 bg-transparent text-white font-clashGrotesk font-medium text-5xl flex flex-col items-center justify-center w-full">
        <Marquee className=" overflow-y-hidden" autoFill>
          <div className="border border-white bg-transparent rounded-full px-8 py-4 mx-4">
            <h1 className="uppercase font-clashDisplay">Modern Design</h1>
          </div>
          <div className="border border-white bg-transparent rounded-full px-8 py-4 mx-4">
            <h1 className="uppercase font-clashDisplay">User Centric Design</h1>
          </div>
          <div className="border border-white bg-transparent rounded-full px-8 py-4 mx-4">
            <h1 className="uppercase font-clashDisplay">Scalable Solutions</h1>
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default SliderTransparent;
