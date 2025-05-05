import React from "react";
import { motion } from "motion/react";
import clsx from "clsx";

const Button = ({ children, className = "", onClick }) => {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{
        rotateX: 25,
        rotateY: 10,
        boxShadow: "0px 4px 20px 10px rgba(54, 102, 181, 0.4)",
      }}
      whileTap={{
        scale: 0.9,
      }}
      style={{
        translateZ: 100,
      }}
      transition={{
        duration: 0.4,
        ease: "easeInOut",
      }}
      className={clsx(
        "group cursor-pointer relative text-white px-12 py-4 rounded-lg bg-purple-700 shadow-[0px_1px_4px_0px_rgb(255,255,255,0.2)_inset, 0px_-1px_2px_0px_rgba(255,255,255,0.2)_inset]",
        className
      )}
    >
      {children ?? "Button"}
      <span className="absolute inset-x-0 bottom-[0px] bg-gradient-to-r from-transparent via-purple-400 to-transparent h-[2px] w-3/4 mx-auto"></span>
      <span className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300  inset-x-0 bottom-[-2px] bg-gradient-to-r from-transparent via-purple-400 to-transparent h-[8px] w-full mx-auto blur-xs"></span>
    </motion.button>
  );
};

export default Button;
