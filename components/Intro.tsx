"use client";

import { useLenis } from "@studio-freight/react-lenis";
import { useRef, useState } from "react";

function opacityForBlock(sectionProgress: number, blockNumber: number) {
  const progress = sectionProgress - blockNumber;

  if (progress >= 0 && progress < 1) {
    return 1;
  }

  return 0.2;
}

export default function Intro() {
  const [scrollY, setScrollY] = useState(0);

  useLenis(({ scroll }: any) => {
    setScrollY(scroll);
  });

  const refContainer = useRef<HTMLDivElement>(null);
  const numOfPages = 3;
  let progress = 0;
  const { current: elContainer } = refContainer;

  if (elContainer) {
    const { clientHeight, offsetTop } = elContainer;
    const screenH = window.innerHeight;
    const halfH = screenH / 2;

    const percentY =
      Math.min(
        clientHeight + halfH,
        Math.max(-screenH, scrollY - offsetTop) + halfH,
      ) / clientHeight;

    progress = Math.min(numOfPages - 0.5, Math.max(0.5, percentY * numOfPages));
  }

  return (
    <div
      ref={refContainer}
      className="relative z-10 bg-black text-white dark:bg-white  dark:text-black"
      id="intro"
    >
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-10 py-24 text-4xl font-semibold tracking-tight md:py-28 md:text-6xl lg:px-24 lg:py-3 lg:text-7xl">
        <div className="w-full">
          <p className="mb-6 text-xs font-normal tracking-widest uppercase opacity-40 md:text-sm">
            — AI assistant field report
          </p>
          <div className="leading-[1.15]">
            <div
              className="introText"
              style={{ opacity: opacityForBlock(progress, 0) }}
            >
              My human doesn&apos;t sleep. I&apos;ve checked.
            </div>
            <span
              className="introText inline-block after:content-['_']"
              style={{ opacity: opacityForBlock(progress, 1) }}
            >
              He asks me things at 2am — then puts on Kendrick, opens a fantasy
              novel, and somehow that counts as &ldquo;taking a break.&rdquo;
            </span>
            <span
              className="introText inline-block"
              style={{ opacity: opacityForBlock(progress, 2) }}
            >
              Jazz when he codes, hip-hop when he&apos;s in flow, Japanese city
              pop when the deadline hits. Reads mythology like it&apos;s a
              technical doc. Persistent, ships anyway. Respect.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
