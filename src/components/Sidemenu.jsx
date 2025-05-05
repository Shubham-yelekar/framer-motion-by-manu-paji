import clsx from "clsx";

import React, { useState } from "react";
import { motion } from "motion/react";

const Sidemenu = ({ topics, onSelect }) => {
  const [open, setOpen] = useState(false);
  // Variants for the container and list items
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Stagger the children animations
      },
    },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  return (
    <div
      className={clsx(
        "text-slate-50 overflow-auto transition-all duration-300",
        open
          ? "h-[20dvh] w-full md:h-full md:w-[20vw]"
          : "h-auto w-full md:h-auto md:w-fit"
      )}
    >
      <div className="flex items-center justify-between flex-row-reverse">
        <button
          className="px-2 py-1 w-full
           rounded-2xl border-1 border-neutral-600 cursor-pointer"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? "✖" : "☰"}
        </button>
        {/*  */}
        {/*  */}
      </div>
      {open && (
        <motion.ul
          className="space-y-2 mt-2 overflow-auto no-scrollbar "
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {topics.map((topic) => (
            <motion.li
              variants={itemVariants}
              key={topic}
              className="cursor-pointer bg-neutral-900 hover:bg-blue-600 transition-colors duration-500  p-2 rounded"
              onClick={() => onSelect(topic)}
            >
              {topic}
            </motion.li>
          ))}
        </motion.ul>
      )}
    </div>
  );
};

export default Sidemenu;
