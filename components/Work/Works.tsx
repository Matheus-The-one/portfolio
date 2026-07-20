"use client";

import Image from "next/image";
import CardSwap, { Card } from "../Swipe";
import Strands from "../Glover";
import { workProjects } from "./workTiles";

export default function Works() {
  return (
    <div>
      {workProjects.map((project, idx) => (
        <div
          key={project.title}
          className="relative min-h-screen overflow-hidden bg-black"
        >
          <div className="absolute inset-0 z-0 opacity-70">
            <Strands
              colors={idx === 0 ? ["#22c55e", "#06B6D4", "#7C3AED"] : ["#F97316", "#ec4899", "#7C3AED"]}
              count={4}
              speed={0.3}
              amplitude={1}
              waviness={1}
              thickness={0.5}
              glow={2}
              taper={3}
              spread={1}
              intensity={0.4}
              saturation={1.5}
              opacity={0.5}
              scale={1.5}
            />
          </div>

          <div className="relative z-10 mx-auto grid min-h-screen max-w-7xl grid-cols-1 lg:grid-cols-2 gap-8 px-6 lg:px-12">
            <div className="flex flex-col justify-center py-12 lg:py-16">
              <p className="text-lg font-medium md:text-xl text-gray-400">
                {project.description}
              </p>
              <h2 className="mt-2 text-4xl font-bold tracking-tight text-white md:text-5xl xl:text-6xl">
                {project.title}
              </h2>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-gray-400 md:text-base lg:text-lg">
                {project.subtitle}
              </p>
            </div>

            <div className="relative flex items-center justify-center py-8 lg:py-16 min-h-[400px] lg:min-h-[600px]">
              <CardSwap
                cardDistance={50}
                verticalDistance={50}
                delay={4000}
                pauseOnHover={true}
                skewAmount={4}
                easing="elastic"
                width={580}
                height={360}
              >
                {project.images.map((img, i) => (
                  <Card key={img.src} customClass="overflow-hidden !bg-black !border-white/10 p-0 flex items-center justify-center">
                    <Image
                      src={img.src}
                      alt={`${project.title} ${i + 1}`}
                      width={img.width}
                      height={img.height}
                      className="w-full h-full object-contain"
                    />
                  </Card>
                ))}
              </CardSwap>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
