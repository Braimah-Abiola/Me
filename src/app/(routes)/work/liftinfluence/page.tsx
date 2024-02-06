"use client";

import Footer from "@/app/components/footer";
import ProjectItem from "@/app/components/project-item";
import Bullet from "@/app/components/svg/bullet";
import Quote from "@/app/components/svg/quote";
import Wrapper from "@/app/wrapper/wrapper";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const LiftInfluence = () => {
  return (
    <div className="w-full flex flex-col pt-32 md:pt-40">
      <Wrapper>
        <h1 className="text-white text-6xl lg:text-9xl font-clashDisplay font-medium">
          LiftInfluence<span className="text-[#00C2FF]">*</span>
        </h1>
        <div className="w-full flex flex-col md:justify-end md:items-end mt-3 md:mt-12">
          <p className=" font-clashGrotesk font-normal text-start w-full md:w-1/2 text-[#BBBBBB] text-xl md:text-3xl">
            Artificial Intelligence powered social media growth tool Unlock the
            power of AI for social media engaement and following.
          </p>
        </div>
      </Wrapper>
      <div className="relative w-full h-[50vh] md:h-screen mt-20 mb-20">
        <Image
          fill
          src="/gallery/liftinfluence_showcase.png"
          alt="LiftInfluence"
          quality={100}
          className="object-cover object-left md:object-center"
        />
      </div>
      <Wrapper>
        <div className="flex flex-col w-full">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8 md:gap-4 pb-10 pt-5 md:pt-10 md:pb-5">
            <div className="flex flex-col gap-2.5 md:gap-4">
              <h4 className="text-white/60 font-clashGrotesk text-lg md:text-xl">
                CLIENT
              </h4>
              <p className="text-white font-clashGrotesk text-xl md:text-2xl font-medium">
                LiftInflunce
              </p>
            </div>
            <div className="flex flex-col gap-2.5 md:gap-4">
              <h4 className="text-white/60 font-clashGrotesk text-lg md:text-xl">
                SERVICE
              </h4>
              <p className="text-white font-clashGrotesk text-xl md:text-2xl font-medium">
                Design + Development
              </p>
            </div>
            <div className="flex flex-col gap-2.5 md:gap-4">
              <h4 className="text-white/60 font-clashGrotesk text-lg md:text-xl">
                YEAR
              </h4>
              <p className="text-white font-clashGrotesk text-xl md:text-2xl font-medium">
                2023
              </p>
            </div>
            <div className="flex flex-col gap-2.5 md:gap-4">
              <h4 className="text-white/60 font-clashGrotesk text-lg md:text-xl">
                LOCATION
              </h4>
              <p className="text-white font-clashGrotesk text-xl md:text-2xl font-medium">
                Slovenia
              </p>
            </div>
            <div>
              <button
                className={`flex flex-row items-center gap-4 md:gap-0 px-5 rounded-full py-4 bg-[#00C2FF] font-clashGrotesk font-normal text-lg md:text-xl
        `}
              >
                View{" "}
                <span className="hidden md:block ml-1 mr-4">live project</span>{" "}
                <ArrowUpRight />
              </button>
            </div>
          </div>

          <div className="w-full flex flex-col md:flex-row md:justify-between items-start py-20 mt-10 md:mt-32">
            <h2 className="text-white text-4xl lg:text-6xl font-clashDisplay font-medium">
              Overview<span className="text-[#00C2FF]"> ●</span>
            </h2>
            <p className=" font-clashGrotesk font-normal text-start w-full md:w-1/2 text-[#BBBBBB] text-xl md:text-3xl mt-4 md:mt-0">
              Embark on a cosmic journey with &apos;Abstract Pulse,&apos; where
              innovation converges with the cosmic canvas in &apos;Nebula
              Infusion.&apos; Our meticulous commitment to authenticity shapes
              every detail, creating a vibrant visual experience in hues of blue
              and violet. Delving into the project, our deliberate use of square
              and cube shapes adds a captivating dimension to the visual
              narrative, establishing a distinct language that echoes
              throughout.
            </p>
          </div>

          <div className="w-full flex flex-col md:flex-row md:justify-between gap-8 md:gap-10 items-start md:py-20 mt-0 md:mt-20">
            <div className=" relative w-full h-[420px] md:h-[720px]">
              <Image
                fill
                src="/gallery/1.png"
                alt="LiftInfluence"
                className=" object-cover object-left md:object-center rounded-3xl"
              />
            </div>
            <div className=" relative w-full h-[420px] md:h-[720px]">
              <Image
                fill
                src="/gallery/1.png"
                alt="LiftInfluence"
                className=" object-cover object-left md:object-center rounded-3xl"
              />
            </div>
          </div>

          <div className="w-full flex flex-col md:flex-row md:justify-between items-start py-20 mt-0 md:mt-20">
            <h2 className="text-white text-4xl lg:text-6xl font-clashDisplay font-medium">
              Challenge<span className="text-[#00C2FF]"> ●</span>
            </h2>
            <p className=" font-clashGrotesk font-normal text-start w-full md:w-1/2 text-[#BBBBBB] text-xl md:text-3xl mt-4 md:mt-0">
              Embark on a cosmic journey with &apos;Abstract Pulse,&apos; where
              innovation converges with the cosmic canvas in &apos;Nebula
              Infusion.&apos; Our meticulous commitment to authenticity shapes
              every detail, creating a vibrant visual experience in hues of blue
              and violet. Delving into the project, our deliberate use of square
              and cube shapes adds a captivating dimension to the visual
              narrative, establishing a distinct language that echoes
              throughout.
            </p>
          </div>

          <div className="w-full flex flex-col md:flex-row md:justify-between items-start md:py-20 mt-0 md:mt-0">
            <h2 className="text-white text-4xl lg:text-6xl font-clashDisplay font-medium">
              Result<span className="text-[#00C2FF]"> ●</span>
            </h2>
            <p className=" font-clashGrotesk font-normal text-start w-full md:w-1/2 text-[#BBBBBB] text-xl md:text-3xl mt-4 md:mt-0">
              Embark on a cosmic journey with &apos;Abstract Pulse,&apos; where
              innovation converges with the cosmic canvas in &apos;Nebula
              Infusion.&apos; Our meticulous commitment to authenticity shapes
              every detail, creating a vibrant visual experience in hues of blue
              and violet. Delving into the project, our deliberate use of square
              and cube shapes adds a captivating dimension to the visual
              narrative, establishing a distinct language that echoes
              throughout.
            </p>
          </div>

          <div className="relative w-full h-[50vh] md:h-screen mt-20 md:mt-28 mb-20">
            <Image
              fill
              src="/gallery/liftinfluence_showcase.png"
              alt="LiftInfluence"
              quality={100}
              className="object-cover object-left md:object-center rounded-3xl"
            />
          </div>

          <div className="flex flex-col-reverse md:flex-row w-full justify-between items-start md:py-32">
            <div className="w-full md:w-1/2">
              <div className="flex flex-row gap-4 md:gap-6 items-center">
                <div className="relative h-[70px] w-[70px]">
                  <Image fill src="/people/niko.png" alt="Niko Valdez" />
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-white text-3xl font-clashGrotesk font-normal">
                    Niko Valdez
                  </p>
                  <p className="text-white/60 font-clashGrotesk text-xl">
                    Founder & Owner, LiftInfluence
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col md:flex-row gap-10 md:gap-20 items-start mb-12 md:mb-0">
              <div className="w-10 h-10 md:w-fit md:h-fit">
                <Quote />
              </div>
              <h3 className="text-white font-clashDisplay text-5xl md:text-5xl font-medium">
                A great guy that has some serious design skills! Very
                straightforward and knows what is he doing. Would highly recommend him!
              </h3>
            </div>
          </div>
        </div>
      </Wrapper>
      <div className="bg-[#0D0D0D] pt-[10rem] md:pt-[8rem] lg:pt-[15rem] w-full pb-[10rem] lg:pb-[15rem]">
        <Wrapper className="flex flex-col w-full items-center md:items-center justify-center gap-4 lg:gap-8">
          <div className="flex flex-row items-center gap-4">
            <Bullet />
            <p className="text-[#00C2FF] font-clashGrotesk text-2xl font-medium">
              MORE PROJECTS
            </p>
          </div>
          <h2 className="font-clashDisplay font-medium text-5xl md:text-6xl lg:text-6xl text-white text-center md:mt-0">
            Top-notch projects{" "}
            <span className=" cursor-pointer hover:text-[#00C2FF]">●</span>
          </h2>
          <div className="w-full flex flex-col lg:flex-row gap-10 mt-10 lg:mt-20">
            <ProjectItem src="/gallery/1.png" projectTitle="VOX-AI" />
            <ProjectItem src="/gallery/2.png" projectTitle="Nova" />
          </div>
        </Wrapper>
      </div>
      <Footer />
    </div>
  );
};

export default LiftInfluence;
