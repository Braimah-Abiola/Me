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
      question: "What is web development?",
      answer:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint tempora quasi eligendi distinctio, mollitia porro repudiandae modi consectetur consequuntur perferendis!",
    },
    {
      question: "How do I know if I need it?",
      answer:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint tempora quasi eligendi distinctio, mollitia porro repudiandae modi consectetur consequuntur perferendis!",
    },
    {
      question: "What does it cost?",
      answer:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint tempora quasi eligendi distinctio, mollitia porro repudiandae modi consectetur consequuntur perferendis!",
    },
    {
      question: "What about SEO?",
      answer:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint tempora quasi eligendi distinctio, mollitia porro repudiandae modi consectetur consequuntur perferendis!",
    },
  ],
};
