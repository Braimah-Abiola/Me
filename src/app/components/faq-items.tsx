import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FiPlus } from "react-icons/fi";

export const FaqQuestions = () => {
  const [selected] = useState(TABS[0]);

  return (
    <section className="overflow-hidden pt-0 pb-6 text-white">
      <Questions selected={selected} />
    </section>
  );
};

const Questions = ({ selected }: { selected: string }) => {
  return (
    <div className="mx-auto mt-12 max-w-3xl">
      <AnimatePresence mode="wait">
        {Object.entries(QUESTIONS).map(([tab, questions]) => {
          return selected === tab ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{
                duration: 0.5,
                ease: "backIn",
              }}
              className="space-y-4"
              key={tab}
            >
              {questions.map((q, idx) => (
                <Question key={idx} {...q} />
              ))}
            </motion.div>
          ) : undefined;
        })}
      </AnimatePresence>
    </div>
  );
};

const Question = ({ question, answer }: QuestionType) => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      animate={open ? "open" : "closed"}
      className={`rounded-2xl border-[1px] border-[#0D0D0D] mx-4 md:mx-0 px-5 md:px-8 transition-colors ${
        open ? "bg-[#161616]" : "bg-[#0D0D0D]"
      }`}
    >
      <button
        onClick={() => setOpen((pv) => !pv)}
        className="flex w-full items-center justify-between gap-4"
      >
        <span
          className={`text-left pt-6 md:pt-8 pb-2 text-2xl md:text-3xl font-clashGrotesk font-normal transition-colors ${
            open ? "text-[#C4C4C4]" : "text-[#cecece]"
          }`}
        >
          {question}
        </span>
        <motion.span
          className="mt-3"
          variants={{
            open: {
              rotate: "45deg",
            },
            closed: {
              rotate: "0deg",
            },
          }}
        >
          <FiPlus
            className={`text-2xl md:text-3xl transition-colors ${
              open ? "text-[#C4C4C4]" : "text-[#cecece]"
            }`}
          />
        </motion.span>
      </button>
      <motion.div
        initial={false}
        animate={{
          height: open ? "fit-content" : "0px",
          marginBottom: open ? "24px" : "0px",
        }}
        className="overflow-hidden"
      >
        <p className="text-[#7e7e7e] text-lg md:text-xl font-clashGrotesk pb-2 md:pb-6">
          {answer}
        </p>
      </motion.div>
    </motion.div>
  );
};

type QuestionType = {
  question: string;
  answer: string;
};

const TABS = ["01"];

const QUESTIONS = {
  "01": [
    {
      question: "What technologies and tools do you specialize in?",
      answer:
        "I specialize in front-end technologies like HTML, CSS, JavaScript, and frameworks like React and Next.js. For back-end, I'm proficient in Node.js, with experience in databases such as MongoDB and MySQL. In design, I use Figma.",
    },
    {
      question:
        "What is your approach to project collaboration and communication?",
      answer:
        "I believe in open communication throughout the project. Whether working solo or in a team, I prioritize regular updates, feedback sessions, and collaboration tools like email, Slack, or project management platforms such as Trello or Asana.",
    },
    {
      question:
        "Do you offer ongoing support and maintenance for your projects?",
      answer:
        "Yes, I provide ongoing support and maintenance to ensure projects remain functional, secure, and up-to-date. From bug fixes to feature additions, I offer flexible support plans tailored to client needs, ensuring continued value even post-launch.",
    },
    {
      question: "What sets your work apart from other developers/designers?",
      answer:
        "My work stands out due to a blend of technical expertise, creativity, and attention to detail. I deliver innovative solutions by staying updated on design and development trends.",
    },
  ],
};
