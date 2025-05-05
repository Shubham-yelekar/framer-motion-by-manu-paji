import React, { useState } from "react";
const PlayGround = ({ children }) => {
  return (
    <section
      style={{
        backgroundImage: `radial-gradient(circle at 0.5px 0.5px , rgba(54, 102, 181, 0.5) 1px, transparent 0)`,
        backgroundSize: "24px 24px",
        backgroundRepeat: "repeat",
      }}
      className="flex-1 [perspective::1000px] [transform-style:preserve-3d] bg-neutral-900 h-full rounded-xl flex items-center justify-center"
    >
      {children}
    </section>
  );
};

export default PlayGround;
