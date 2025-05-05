import React, { useState } from "react";
import Button from "./Button";
import { AnimatePresence, motion, spring } from "motion/react";

const Card = () => {
  const [open, setOpen] = useState(true);

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.98,
              filter: "blur(10px)",
            }}
            animate={{
              opacity: 1,
              scale: 1,
              filter: "blur(0px)",
            }}
            exit={{
              opacity: 0,
              scale: 0.98,
              filter: "blur(10px)",
            }}
            className="w-[24rem] min-h-[32rem] h-[26rem] shadow-1 flex flex-col gap-4 p-6 bg-white rounded-2xl "
          >
            <h2 className="font-bold text-xl text-neutral-900">Acternity UI</h2>
            <p className="text-neutral-600 leading-4.5">
              Make your websites look 10x awesome
            </p>
            <Button
              onClick={() => setOpen(false)}
              className="!bg-neutral-100 !text-blue-600 !shadow-1"
            >
              Acternity
            </Button>
            <div className="flex-1 bg-gray-100 rounded-lg border border-dashed border-neutral-200 relative">
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.98,
                  filter: "blur(10px)",
                }}
                whileHover={{
                  opacity: 1,
                  scale: 1.02,
                  filter: "blur(0px)",
                }}
                transition={{
                  type: spring,
                  stiffnes: 100,
                  damping: 15,
                  mass: 1,
                }}
                className="absolute inset-0 h-full w-full bg-neutral-100 rounded-lg divide-neutral-500 p-2 "
              >
                <div className="p-4 bg-neutral-200 m-2 rounded-lg">task-1</div>
                <div className="p-4 bg-neutral-200 m-2 rounded-lg">task-2</div>
                <div className="p-4 bg-neutral-200 m-2 rounded-lg">task-3</div>
                <div className="p-4 bg-neutral-200 m-2 rounded-lg">task-4</div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Card;
