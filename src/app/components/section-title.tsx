import React from "react";
import Bullet from "./svg/bullet";

interface SectionTitleProps {
  text: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ text }) => {
  let sectionIcon: any = [];
  switch (text) {
    case "PRICING":
      sectionIcon = <Bullet />;
      break;
    case "LET'S ANSWER SOME QUESTIONS":
      sectionIcon = <Bullet />;
      break;
    case "PREVIOUS WEB DEV PROJECTS":
      sectionIcon = <Bullet />;
      break;
    case "Development":
      sectionIcon = <Bullet />;
      break;
    case "User Experience":
      sectionIcon = <Bullet />;
      break;
    case "UX":
      sectionIcon = <Bullet />;
      break;
    case "Branding":
      sectionIcon = <Bullet />;
      break;
    default:
      sectionIcon = [];
  }
  return (
    <div className="section">
      <div className="font-clashGrotesk bg-[#131313] border border-[#212121] rounded-full px-4 py-2 text-[#BBBBBB] flex flex-row bg font-normal text-base md:text-lg select-none gap-2 md:gap-3 items-center">
        {sectionIcon} {text}
      </div>
      <div className="section-button-backdrop"></div>
    </div>
  );
};

export default SectionTitle;
