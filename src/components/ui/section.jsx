"use client";

import NextImage from "next/image";
import { Image } from "@nextui-org/react";
import { useRef } from "react";
import { useInView } from "framer-motion";

export default function Section({
  children,
  id = null,
  title = "",
  description = "",
  image = {
    src: "",
    alt: "",
    width: 0,
    height: 0,
  },
  bgColor = "bg-white dark:bg-black",
  classNames = "",
  flexCol = false,
  flexRow = false,
  flexCenter = false,
  flexCenterEvenly = true,
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      id={id}
      ref={ref}
      className={`max-w-[1500px] w-full min-h-dvh 2xl:rounded-xl 2xl:shadow-lg lg:mt-20 transition-all flex gap-10 py-[100px] px-5 text-center relative
        ${isInView ? "opacity-100 animate-fade-right" : "opacity-0"}
        ${classNames}
        ${bgColor}
        ${flexCol ? "flex-col" : null}
        ${flexRow ? "flex-row" : "flex-col lg:flex-row"}
        ${flexCenter ? "justify-center items-center" : ""}
        ${
          flexCenterEvenly ? "justify-evenly  items-center " : "justify-evenly items-center lg:items-start"
        }
      `}
    >
      <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#0a0a0a_1px,transparent_1px),linear-gradient(to_bottom,#0a0a0a_1px,transparent_1px)] bg-[size:6rem_4rem] 2xl:rounded-xl"></div>

      <div className="flex flex-col gap-2 max-w-[350px]">
        <div>
          <h3 className="font-title_anton text-6xl uppercase drop-shadow-xl">
            {title}
          </h3>
        </div>
        <div>
          <span className="text-xl">{description}</span>
        </div>

        {image.src && (
          <div className="flex justify-center items-center py-9">
            <Image
              isBlurred
              as={NextImage}
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              radius="lg"
            />
          </div>
        )}
      </div>

      <div className="w-full md:w-auto">{children}</div>
    </section>
  );
}
