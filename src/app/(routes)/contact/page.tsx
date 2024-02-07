import Bullet from "@/app/components/svg/bullet";
import Wrapper from "@/app/wrapper/wrapper";
import { Input } from "@/components/ui/input";
import Marquee from "react-fast-marquee";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import Footer from "@/app/components/footer";
import Link from "next/link";

const Contact = () => {
  return (
    <div className="w-full flex flex-col items-center overflow-hidden">
      <Wrapper className="flex flex-col items-center py-20 md:py-32">
        <div className="flex flex-row items-center gap-4">
          <Bullet />
          <p className="text-[#00C2FF] font-clashGrotesk text-2xl font-medium">
            CONTACT ME
          </p>
        </div>
        <h2 className="text-center font-clashGrotesk font-medium text-4xl md:text-5xl text-white py-3 md:w-1/2">
          Whether you have a question about{" "}
          <span className="underline font-normal underline-offset-[12px] text-[#00c2ff]">
            my services
          </span>{" "}
          or just want me to work on a project
        </h2>
      </Wrapper>
      <div className="h-[80px] md:h-[100px] -rotate-2 bg-[#00C2FF] text-black font-clashDisplay font-medium text-5xl md:text-6xl flex flex-col items-center justify-center w-full">
        <Marquee className=" overflow-y-hidden" autoFill>
          <h1 className="uppercase font-clashDisplay">
            LET&apos;S WORK TOGETHER
          </h1>
          <h1 className="uppercase font-clashDisplay mx-12">-</h1>
          <h1 className="uppercase font-clashDisplay">
            LET&apos;S WORK TOGETHER
          </h1>
          <h1 className="uppercase font-clashDisplay mx-12">-</h1>
          <h1 className="uppercase font-clashDisplay">
            LET&apos;S WORK TOGETHER
          </h1>
          <h1 className="uppercase font-clashDisplay mx-12">-</h1>
        </Marquee>
      </div>
      <Wrapper className="md:mt-10 py-20 w-full">
        <div className="flex flex-col md:flex-row justify-between w-full gap-8 md:gap-20 py-5 md:py-8">
          <div className="flex flex-col gap-4 md:gap-0 md:flex-row w-full">
            <div className="w-full md:w-[250px]">
              <h2 className="text-2xl md:text-3xl font-clashGrotesk text-white font-normal">
                My name is <span className="text-[#00c2ff]">*</span>
              </h2>
            </div>
            <div className="w-full">
              <Input className="w-full" type="name" placeholder="full name" />
            </div>
          </div>
          <div className="flex flex-row w-full items-center">
            <div className="w-[280px] md:w-[300px]">
              <h2 className="text-2xl md:text-3xl font-clashGrotesk text-white font-normal">
                and I work with
              </h2>
            </div>
            <div className="w-full">
              <Input
                className="w-full"
                type="name"
                placeholder="company name"
              />
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col md:flex-row items-start md:items-center pt-3 pb-5 md:pt-8 md:pb-8">
          <h2 className="text-2xl md:text-3xl font-clashGrotesk text-white font-normal">
            I am interested in
          </h2>
          <div className="flex flex-row mt-4 md:mt-0">
            <button
              className={`md:ml-10 px-4 rounded-full py-2.5 border font-clashGrotesk font-normal text-xl text-[#BBBBBB]`}
            >
              Web Design
            </button>
            <button
              className={`ml-5 px-4 rounded-full py-2.5 border font-clashGrotesk font-normal text-xl text-[#BBBBBB]`}
            >
              App Design
            </button>
            <button
              className={`hidden md:block ml-5 px-4 rounded-full py-2.5 border font-clashGrotesk font-normal text-xl text-[#BBBBBB]`}
            >
              Web Development
            </button>
            <button
              className={`hidden md:block ml-5 px-4 rounded-full py-2.5 border font-clashGrotesk font-normal text-xl text-[#BBBBBB]`}
            >
              Interaction Design
            </button>
          </div>
          <div className="flex flex-row mt-4 md:mt-0">
            <button
              className={`hidden ml-5 px-4 rounded-full py-2.5 border font-clashGrotesk font-normal text-xl text-[#BBBBBB]`}
            >
              Web Design
            </button>
            <button
              className={`hidden ml-5 px-4 rounded-full py-2.5 border font-clashGrotesk font-normal text-xl text-[#BBBBBB]`}
            >
              App Design
            </button>
            <button
              className={`md:hidden ml-0 px-4 rounded-full py-2.5 border font-clashGrotesk font-normal text-xl text-[#BBBBBB]`}
            >
              Web Dev
            </button>
            <button
              className={`md:hidden ml-5 px-4 rounded-full py-2.5 border font-clashGrotesk font-normal text-xl text-[#BBBBBB]`}
            >
              Interaction Design
            </button>
          </div>
        </div>
        <div className="w-full flex flex-col md:flex-row py-5 md:py-8 gap-8 md:gap-0">
          <h2 className="text-2xl md:text-3xl font-clashGrotesk text-white font-normal w-full md:w-[1100px]">
            and I am hoping to stay within a budget range of
          </h2>

          <div className="w-full">
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Budget" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="$1000">$ 1,000</SelectItem>
                  <SelectItem value="$2500">$ 2,500</SelectItem>
                  <SelectItem value="$5000">$ 5,000</SelectItem>
                  <SelectItem value="$10000">$ 10,000</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="w-full flex flex-col md:flex-row py-5 md:py-8">
          <h2 className="text-2xl md:text-3xl font-clashGrotesk text-white font-normal w-[520px]">
            reach out to me at <span className="text-[#00c2ff]">*</span>
          </h2>
          <div className="w-full mt-1.5 md:mt-0">
            <Input
              className="w-full"
              type="email"
              placeholder="email address"
            />
          </div>
          <h2 className="text-2xl md:text-3xl font-clashGrotesk text-white font-normal w-full mt-4 md:mt-0 md:w-[750px] md:ml-10">
            to discuss the project details
          </h2>
        </div>
        <div className="w-full flex flex-col py-5 md:py-8 gap-8">
          <h2 className="text-2xl md:text-3xl font-clashGrotesk text-white font-normal w-[520px]">
            or fill me in on all the deets here:
          </h2>
          <div className="w-full gap-20 flex flex-col md:flex-row items-center">
            <div className="w-full">
              <Textarea className="w-full" placeholder="project details" />
            </div>
            <div className="mt-8 md:mt-0 p-8 md:p-16 aspect-square flex items-center justify-center bg-[#00c2ff] rounded-full animate-bounce cursor-pointer">
              <p className=" font-clashDisplay text-2xl font-medium">SUBMIT</p>
            </div>
          </div>
        </div>
      </Wrapper>
      <Wrapper className="flex flex-col w-full items-center">
        <div className="w-[62%] md:w-[70%] bg-[#131313] border border-[#212121] rounded-full md:pl-32 md:pr-10 pt-20 pb-6 md:pt-10 md:pb-10">
          <div className="w-full flex flex-col md:flex-row justify-between items-center md:items-start">
            <div className="flex flex-col items-center text-center md:text-start md:items-start w-[80%] md:w-full md:pt-4">
              <h2 className=" font-clashDisplay font-medium text-3xl md:text-5xl text-white py-3">
                Want to skip the waiting and get started right away
              </h2>
              <p className=" text-white/80 font-clashGrotesk text-xl md:text-2xl font-medium uppercase text-center mt-4">
                Let&apos;s chat!
              </p>
            </div>
            <Link target="_blank" href="https://calendly.com/aretecodes/30min">
              <div className="mt-8 md:mt-0 p-10 md:p-10 aspect-square flex items-center justify-center bg-[#ffffff] rounded-full cursor-pointer">
                <p className=" font-clashDisplay text-xl md:text-2xl font-medium uppercase text-center">
                  Schedule <br className="md:hidden" />a Call
                </p>
              </div>
            </Link>
          </div>
        </div>
      </Wrapper>
      <Footer />
    </div>
  );
};

export default Contact;
