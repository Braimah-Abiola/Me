import Wrapper from "../wrapper/wrapper";
import ProjectItem from "./project-item";
import ProjectItemLarge from "./project-item-large";
import ProjectItemTall from "./project-item-tall";

const Work = () => {
  return (
    <div className="bg-[#0D0D0D] pt-[12rem] md:pt-[8rem] lg:pt-[20rem] w-full pb-[15rem] lg:pb-[25rem]">
      <Wrapper className="flex flex-col w-full items-start md:items-center justify-center gap-10 lg:gap-12">
        <h2 className="font-clashDisplay font-medium text-5xl md:text-6xl lg:text-8xl text-white text-center md:mt-0">
          Works <span className=" cursor-pointer hover:text-[#00C2FF]">●</span>
        </h2>
        <div className="w-full flex flex-col lg:flex-row gap-10 lg:mt-10">
          <ProjectItem src="/gallery/1.png" projectTitle="VOX-AI" />
          <ProjectItem src="/gallery/2.png" projectTitle="Nova" />
        </div>
        <div className="w-full md:mt-12">
          <ProjectItemLarge
            src="/gallery/liftinfluence_showcase.png"
            projectTitle="LiftInfluence"
          />
        </div>
        <div className="w-full flex flex-col md:mt-12 lg:flex-row gap-10">
          <ProjectItemTall
            src="/gallery/1.png"
            projectTitle="Gen Y Solutions"
          />
          <ProjectItem src="/gallery/2.png" projectTitle="Neni" />
        </div>
      </Wrapper>
    </div>
  );
};

export default Work;
