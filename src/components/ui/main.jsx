"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";

export default function Main({
  children,
  id = null,
  bgColor = "bg-white dark:bg-black",
  classNames = "",
  flexCol = false,
  flexRow = false,
  flexCenter = false,
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <main
      id={id}
      ref={ref}
      className={`max-w-[1500px] w-full min-h-dvh 2xl:rounded-xl 2xl:shadow-lg lg:mt-[96px] flex py-[200px]
        ${isInView ? "opacity-100 animate-fade-up" : "opacity-0"}
        ${classNames}
        ${bgColor}
        ${flexCol ? "flex-col" : null}
        ${flexRow ? "flex-row" : null}
        ${flexCenter ? "justify-center items-center" : null}
      `}
    >
      <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#0a0a0a_1px,transparent_1px),linear-gradient(to_bottom,#0a0a0a_1px,transparent_1px)] bg-[size:6rem_4rem] 2xl:rounded-xl"></div>

      {children}
    </main>
  );
}
