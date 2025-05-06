import React, { useRef } from "react";
import { motion, useMotionValueEvent, useScroll, useTransform } from "motion/react";

const featuresData = [
  {
    title: "Fast Performance",
    description: "Our app is optimized for blazing fast speed and minimal loading times.",
    image: "https://images.unsplash.com/vector-1743883866466-ae5c5446a36a?q=80&w=2360&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    color: "bg-orange-200",
  },
  {
    title: "Secure by Design",
    description: "We prioritize security with best-in-class encryption and data protection.",
    image: "https://images.unsplash.com/vector-1746092444052-661ae4de13a4?q=80&w=2064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    color: "bg-red-400",
  },
  {
    title: "User Friendly",
    description: "Designed with usability in mind, making navigation simple and intuitive.",
    image: "https://images.unsplash.com/vector-1745695275676-ae261124fea9?q=80&w=2360&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    color: "bg-green-200",
  },
];


const ParellaxScroll = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end" , "end start"]
  })

  const translateContent = useTransform(scrollYProgress, [0, 1], [-100, 100])
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log("change value", latest)
  })

  return (
    <section  className="absolute top-0 left-0 h-full w-full bg-neutral-900 ">
      <div ref={ref}  className=" relative mx-auto py-40 overflow-scroll ">
        {featuresData.map((feature, index) => (
          <div
          key={index}
          className="grid grid-cols-2 h-[50vh] gap-10 "
        >
          {/* Left: Text */}
          <div className=" md:text-left flex flex-col gap-4 justify-center">
            <h2 className="text-3xl text-gray-100 font-bold mb-2">{feature.title}</h2>
            <p className="text-gray-400">{feature.description}</p>
          </div>

          {/* Right: Overlapping Squares */}
            <motion.div   
              className="relative w-full flex justify-center md:justify-end">
            <div
              className={`w-72 h-72 ${feature.color} rounded-lg absolute top-20 left-14`}
            ></div>
              <motion.div
                style={{
                  y: translateContent
                }}
                className="w-72 h-72 absolute top-18 left-10 bg-white rounded-lg shadow-lg z-10 overflow-hidden">
              <img
                src={feature.image}
                alt={feature.title}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      ))}
      </div>
    </section>
  );
};

export default ParellaxScroll;
