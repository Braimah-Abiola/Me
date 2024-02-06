"use client";

import Image from "next/image";
import React, { useState } from "react";
import SectionTitle from "./section-title";
import Modal from "./project-modal";
import Link from "next/link";

interface ProjectItemLargeInterface {
  src: string;
  projectTitle: string;
}

const ProjectItemLarge: React.FC<ProjectItemLargeInterface> = ({
  src,
  projectTitle,
}) => {
  const [modal, setModal] = useState({ active: false });
  return (
    <div className="flex flex-col w-full items-start">
      <div
        onMouseEnter={() => {
          setModal({ active: true });
        }}
        onMouseLeave={() => {
          setModal({ active: false });
        }}
        className="relative w-full h-[600px] lg:h-[850px] cursor-none"
      >
        <Link href="/work/liftinfluence" className=" cursor-none">
          <Image
            quality={100}
            className="rounded-[20px] object-cover object-left-top"
            fill
            src={src}
            alt="Pclub.io"
          />
        </Link>
      </div>
      <div className="flex flex-row gap-2.5 md:gap-3 mt-8">
        <SectionTitle text="User Experience" />
        <SectionTitle text="Development" />
      </div>
      <h2 className=" font-clashDisplay text-4xl lg:text-6xl text-white font-medium mt-6 md:mt-8">
        {projectTitle}
      </h2>
      <Modal modal={modal} />
    </div>
  );
};

export default ProjectItemLarge;
