import Wrapper from "../wrapper/wrapper";
import Bullet from "./svg/bullet";

const About = () => {
  return (
    <div className="flex flex-col w-full py-20" id="about">
      <Wrapper className="flex flex-col items-center w-full">
        <div className="flex flex-row items-center gap-4">
          <Bullet />
          <p className="text-[#00C2FF] font-clashGrotesk text-2xl font-medium">
            ABOUT ME
          </p>
        </div>
        <div className="flex flex-col w-full md:w-[65%] items-center mt-4">
          <h2 className=" font-clashDisplay font-medium text-white text-4xl md:text-5xl text-center">
            We know what&apos;s going on.
            <span className="text-white/25">
              {" "}
              You need top-notch design to stand out in the tech world, but
              hiring in-house designers can be costly and time-consuming.
            </span>{" "}
            That&apos;s when Atomic comes in.
          </h2>
        </div>
      </Wrapper>
    </div>
  );
};

export default About;
