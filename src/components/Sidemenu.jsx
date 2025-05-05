import { li } from "motion/react-client";
import React from "react";

const Sidemenu = ({ topics, onSelect }) => {
  return (
    <div className="h-[20dvh] md:w-[20vw] text-slate-50">
      <h3 className="text-xl">UI elements</h3>
      <ul className="space-y-2 mt-2 overflow-auto no-scrollbar ">
        {topics.map((topic) => (
          <li
            key={topic}
            className="cursor-pointer bg-neutral-900 hover:bg-blue-600 transition-colors duration-500  p-2 rounded"
            onClick={() => onSelect(topic)}
          >
            {topic}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidemenu;
