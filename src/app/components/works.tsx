import Wrapper from "../wrapper/wrapper";
import ProjectItem from "./project-item";
import ProjectItemLarge from "./project-item-large";
import ProjectItemTall from "./project-item-tall";
import Bullet from "./svg/bullet";

const Work = () => {
  return (
    <div
      id="works"
      className="bg-[#0D0D0D] pt-[12rem] md:pt-[8rem] lg:pt-[20rem] w-full pb-[15rem] lg:pb-[25rem]"
    >
      <Wrapper className="flex flex-col w-full items-center md:items-center justify-center gap-4 lg:gap-8">
        <div className="flex flex-row items-center gap-4">
          <Bullet />
          <p className="text-[#00C2FF] font-clashGrotesk text-2xl font-medium">
            PREVIOUS PROJECTS
          </p>
        </div>
        <h2 className="font-clashDisplay font-medium text-5xl md:text-6xl lg:text-6xl text-white text-center md:mt-0">
          Top-notch projects{" "}
          <span className=" cursor-pointer hover:text-[#00C2FF]">●</span>
        </h2>
        <div className="w-full flex flex-col lg:flex-row gap-10 mt-10 lg:mt-20">
          <ProjectItem src="/gallery/midas.webp" projectTitle="Midas" />
          <ProjectItem src="/gallery/pharmx.webp" projectTitle="PharmX" />
        </div>
        <div className="w-full mt-10 md:mt-12">
          <ProjectItemLarge
            src="/gallery/liftinfluence_showcase.png"
            projectTitle="LiftInfluence"
          />
        </div>
        <div className="w-full flex flex-col mt-10 md:mt-12 lg:flex-row gap-10">
          <ProjectItemTall src="/gallery/nova.png" projectTitle="Nova" />
          <ProjectItem src="/gallery/oownee2.webp" projectTitle="Oownee" />
        </div>
      </Wrapper>
    </div>
  );
};

export default Work;
