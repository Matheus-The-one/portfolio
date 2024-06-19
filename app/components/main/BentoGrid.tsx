"use client";

import { motion } from "framer-motion";

// Also install this npm i --save-dev @types/react-lottie
//import Lottie from "react-lottie";

import { cn } from "@/app/utils/cn";


import GridGlobe from "../sub/GridGlobe";


import { Backend_skill, Frontend_skill } from "@/app/constants";


export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        // change gap-4 to gap-8, change grid-cols-3 to grid-cols-5, remove md:auto-rows-[18rem], add responsive code
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  id,
  title,
  description,
  //   remove unnecessary things here
  img,
  imgClassName,
  titleClassName,
 
}: {
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
 
  const handelBtnClick=()=>{
    window.open("https://bloggy-pi-ruby.vercel.app/")

  }
  return (
    <div
      className={cn(
        // remove p-4 rounded-3xl dark:bg-black dark:border-white/[0.2] bg-white  border border-transparent, add border border-white/[0.1] overflow-hidden relative
        "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
        className
      )}
      style={{
        //   add these two
        //   you can generate the color from here https://cssgradient.io/
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      {/* add img divs */}
      <div className={`${id === 6 && "flex justify-center"} h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover object-center ")}
            />
          )}
        </div>
        {id === 5 && (
          <div className="absolute inset-x-0 bottom-20 itmes-center justify-center">
            <motion.button className="absolute  inset-0 bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]">
            <motion.a
                onClick={handelBtnClick}
                target="_blank"
                rel="noopener noreferrer"
                className="ring-2 ring-purple-500 ring-offset-4 ring-offset-slate-50 dark:ring-offset-slate-900 cursor-pointer h-4 w-8 p-2 rounded-sm "
              >
                Visit Our StartUp
                </motion.a>
            </motion.button>
          </div>
        )}
        {id === 6 && (
          // add background animation , remove the p tag
          <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4  text-3xl text-center md:text-4xl lg:text-7xl"></div>
        )}

        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
          )}
        >
          {/* change the order of the title and des, font-extralight, remove text-xs text-neutral-600 dark:text-neutral-300 , change the text-color */}
          <div className="font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10">
            {description}
          </div>
          {/* add text-3xl max-w-96 , remove text-neutral-600 dark:text-neutral-300*/}
          {/* remove mb-2 mt-2 */}
          <div
            className={`font-sans text-lg lg:text-3xl max-w-96 font-bold z-10`}
          >
            {title}
          </div>

          {/* for the github 3d globe */}
          {id === 2 && <GridGlobe />}

          {/* Tech stack list div */}
          {id === 3 && (
            <div className="">
              {/* tech stack lists */}
              <div className="grid gap-4 grid-cols-3 grid-rows-3 py-4">
                {Frontend_skill.map((skill) => (
                  <span
                    key={skill.Image}
                    className="lg:py-3 lg:px-2 py-2 px-2 text-xs lg:text-base opacity-50 
                    lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                  >
                    <img src={skill.Image} alt="" className="w-[30px] h-[30px]" />
                    {skill.skill_name}
                  </span>
                ))}
              </div>
              <div className=" grid gap-4 grid-cols-3 grid-rows-3 py-4">
                {Backend_skill.map((skill) => (
                  <span
                    key={skill.Image}
                    className="lg:py-3 lg:px-2 py-2 px-2 text-xs lg:text-base opacity-50 
                    lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                  >
                    <img src={skill.Image} className="w-[30px] h-[30px]"></img>
                    {skill.skill_name}
                  </span>
                ))}
              </div>
            </div>
          )}
          {id === 6 && (
            <div className="mt-5 relative">
              {/* button border magic from tailwind css buttons  */}
              {/* add rounded-md h-8 md:h-8, remove rounded-full */}
              {/* remove focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 */}
              {/* add handleCopy() for the copy the text */}

              <div className="cursor-pointer relative inline-flex h-12 w-full md:w-60 mt-10 overflow-hidden rounded-lg p-[1px] focus:outline-none !bg-[#161A31]">
                <span className="absolute inset-0 animate-spin bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <a
                  href="https://bloggy-pi-ruby.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-full w-full items-center justify-center rounded-lg bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2"
                >
                  Visit My Blog
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
