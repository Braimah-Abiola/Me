import { FaqQuestions } from "./faq-items";
import Bullet from "./svg/bullet";

const FAQ = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center bg-[#0D0D0D] py-20">
      <div className="flex flex-row items-center gap-4">
        <Bullet />
        <p className="text-[#00C2FF] font-clashGrotesk text-2xl font-medium">
          FAQs
        </p>
      </div>
      <div className=" w-full flex flex-col items-center">
        <h2 className=" font-clashGrotesk font-medium text-5xl text-white py-3">
          I&apos;ve got the answers
        </h2>
        <FaqQuestions />

        <p className="text-[#BBBBBB] text-xl font-clashGrotesk font-medium mt-14">
          Still have more questions? Contact me{" "}
          <span className="text-white hover:underline transition-all cursor-pointer">
            via email
          </span>
          .
        </p>
      </div>
    </div>
  );
};

export default FAQ;
