import React, { useEffect, useState } from "react";
const PlayGround = ({ children }) => {
  const [key, setKey] = useState(0);

  const handleReload = () => {
    setKey((prev) => prev + 1);
  };

  return (
    <section
      style={{
        backgroundImage: `radial-gradient(circle at 0.5px 0.5px , rgba(54, 102, 181, 0.5) 1px, transparent 0)`,
        backgroundSize: "24px 24px",
        backgroundRepeat: "repeat",
      }}
      className="flex-1 [perspective::1000px] [transform-style:preserve-3d] bg-neutral-900 h-full rounded-xl overflow-hidden"
    >
      <div className="h-full w-full " key={key}>{children}</div>
      <div
        className="absolute top-2 right-2 bg-white rounded-3xl px-2 py-1 text-sm cursor-pointer"
        onClick={handleReload}
      >
        Reload
      </div>
    </section>
  );
};

export default PlayGround;
