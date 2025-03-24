'use client';
import ArrowIcon from "@/assets/icons/arrow-w.svg";
import cursorImage from "@/assets/images/pointer.png";
import messageImage from "@/assets/images/rocket.png";
import Image from "next/image";
import { motion } from 'framer-motion'

export const Hero = () => {
  return (
    <div className="bg-black relative overflow-clip text-white bg-[linear-gradient(to_bottom,#000,#200d42_34%,#4f21a1_65%,#a46edb_82%)] py-[72px] sm:py-24">
      <div className="absolute h-[375px] w-[750px] sm:w-[1536px] sm:h-[768px] rounded-[100%] border border-[#b48cde] left-1/2 -translate-x-1/2 bg-black bg-[radial-gradient(closest-side,#000_82%,#9560eb)] top-[calc(100%-96px)] sm:top-[calc(100%-120px)] lg:w-[2400px] lg:h-[1200px]"></div>
      <div className="container relative">
        <div className="flex items-center justify-center">
          <a
            href="#"
            className="inline-flex gap-3 border py-1 px-2 rounded-lg bg-white/30"
          >
            <span className="bg-[linear-gradient(to_right,#f87aff,#fb93d0,#ffdd99,#c3f0b2,#2fd8fe)] text-transparent bg-clip-text [-webkit-background-clip:text]">
              Version 3.0.1 is here
            </span>
            <span className="inline-flex items-center gap-1">
              <span>Read More</span>
              <ArrowIcon />
            </span>
          </a>
        </div>
        <div className="flex justify-center mt-8">
          <div className="inline-flex relative">
            <h1 className="text-7xl sm:text-9xl font-bold tracking-tighter text-center  inline-flex">
              One task
              <br /> at a time
            </h1>
            <motion.div 
            drag
            dragSnapToOrigin
            className="hidden sm:inline-flex absolute right-[476px] top-[108px]">
            <Image
              src={cursorImage}
              height="200"
              width="200"
              alt="cursor-image"
              className="max-w-none"
              draggable="false"
              />
            </motion.div>
            <motion.div 
            drag
            // dragSnapToOrigin
            className="absolute hidden sm:inline-flex top-[46px] left-[498px]">
            <Image
              src={messageImage}
              height="200"
              width="200"
              draggable="false"
              className="max-w-none"
              alt="message-image"
            />
            </motion.div>
          </div>
        </div>
        <div className="flex justify-center">
          <p className="text-center  max-w-md text-xl mt-8">
            The secret of success in every field is redefining what success
            means to you. It can&apos;t be your parent&apos;s definition, the
            media&apos;s definition, or your neighbor&apos;s definition.
            Otherwise, success will never satisfy you.
          </p>
        </div>
        <div className="flex justify-center mt-8">
          <button className="bg-white text-black py-3 px-5 rounded-lg font-medium">
            Get for free
          </button>
        </div>
      </div>
    </div>
  );
};
