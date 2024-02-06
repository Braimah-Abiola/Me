"use client";

import gsap from "gsap";
import { services } from "../constants";
import Bullet from "./svg/bullet";

const Serivces = () => {
  const manageMouseEnter = (e: React.MouseEvent, index: number) => {
    gsap.to(e.target, {
      top: "-2vw",
      backgroundColor: services[index].color,
      duration: 0.3,
    });
  };

  const manageMouseLeave = (e: React.MouseEvent, index: number) => {
    gsap.to(e.target, {
      top: "0",
      backgroundColor: "#0d0d0d",
      duration: 0.3,
      delay: 0.1,
    });
  };
  return (
    <div id="services" className="w-full flex flex-col items-center pt-20 md:pt-48">
      <div className="flex flex-row items-center gap-4 mb-16">
        <Bullet />
        <p className="text-[#00C2FF] font-clashGrotesk text-2xl font-medium">
          SERVICES
        </p>
      </div>
      <div className="projectContainer">
        {services.map((service, index) => {
          return (
            <div
              onMouseEnter={(e) => {
                manageMouseEnter(e, index);
              }}
              onMouseLeave={(e) => {
                manageMouseLeave(e, index);
              }}
              key={index}
            >
              <p className=" font-clashDisplay font-medium text-center">
                {service.title}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Serivces;
