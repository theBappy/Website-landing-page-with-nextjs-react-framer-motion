"use client";
import appScreen from "../assets/images/app.png";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

export const ProductShowcase = () => {
  const appImageRef = useRef<HTMLImageElement>(null)
  const { scrollYProgress } = useScroll({
    target: appImageRef,
    offset: ['start end', 'end end'],   
  })
  const rotateX = useTransform(scrollYProgress, [0,1], [15, 0])
  const opacity = useTransform(scrollYProgress, [0, 1], [0.5, 1])
  return (
    <div className="bg-black text-white bg-gradient-to-b from-black to-[#5d2ca8] py-[72px] sm:py-24">
      <div className="container">
        <h2 className="text-center sm:text-6xl text-5xl font-bold tracking-tighter">
          Intuitive Interface
        </h2>
        <div className="max-w-xl mx-auto">
          <p className="text-xl text-center text-white/70 mt-5">
            If I had an hour to solve a problem and my life depended on the
            solution, I would spend the first 55 minutes determining the proper
            question to ask, for once I know the proper question, I could solve
            the problem in less than five minutes
          </p>
        </div>
        <motion.div
        style={{
          opacity: opacity,
          rotateX: rotateX,
          transformPerspective: '800px',
        }}
        >
          <Image
            className="mt-14 mx-auto"
            src={appScreen}
            alt="product-image"
            ref={appImageRef}
          />
        </motion.div>
      </div>
    </div>
  );
};
