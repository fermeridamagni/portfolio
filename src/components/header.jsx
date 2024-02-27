"use client";

import Link from "next/link";
import { Button } from "@nextui-org/react";
import { useTheme } from "next-themes";
import { config } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";
import { faAt } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";

config.autoAddCss = false;

export default function Header() {
  const { theme, setTheme } = useTheme();

  return (
    <header className="max-w-[1500px] w-full grid grid-cols-1 lg:grid-cols-4 py-6 px-5 lg:px-10 fixed z-50 bg-white_primary/80 dark:bg-black_primary/80 backdrop-blur-sm ">
      <div className="hidden lg:flex col-start-1 col-end-1 items-center justify-start">
        <Link
          href="#main"
          className="text-xl font-bold flex flex-col text-right"
        >
          <span>
            <FontAwesomeIcon icon={faAt} /> fermeridamagni
          </span>

          <span className="text-neutral-500 text-sm">Full Stack Developer</span>
        </Link>
      </div>

      <div className="col-start-1 col-end-1 lg:col-start-2 lg:col-end-4 gap-10 flex justify-center items-center text-center">
        <div>
          <Link href="#aboutme" className="text-lg line_hover">
            <span className="after:bg-black_primary after:dark:bg-white">
              Sobre Mi
            </span>
          </Link>
        </div>
        <div>
          <Link href="#portfolio" className="text-lg line_hover">
            <span className="after:bg-black_primary after:dark:bg-white">
              Portafolio de Proyectos
            </span>
          </Link>
        </div>
        <div>
          <Link href="#contact" className="text-lg line_hover">
            <span className="after:bg-black_primary after:dark:bg-white">
              Contacto
            </span>
          </Link>
        </div>
      </div>

      <div className="hidden lg:flex col-start-4 col-end-4 items-center justify-end gap-10">
        <div className="flex gap-6">
          <div>
            <Link
              href="https://www.instagram.com/fermeridamagni/"
              target="_blank"
            >
              <FontAwesomeIcon icon={faInstagram} size="2xl" />
            </Link>
          </div>
          <div>
            <Link href="https://github.com/fermeridamagni" target="_blank">
              <FontAwesomeIcon icon={faGithub} size="2xl" />
            </Link>
          </div>
        </div>
        <div>
          {theme === "dark" ? (
            <Button
              isIconOnly
              size="lg"
              variant="faded"
              onClick={() => setTheme("light")}
            >
              <FontAwesomeIcon icon={faSun} size="lg" />
            </Button>
          ) : (
            <Button
              isIconOnly
              size="lg"
              variant="faded"
              onClick={() => setTheme("dark")}
            >
              <FontAwesomeIcon icon={faMoon} size="lg" />
            </Button>
          )}
        </div>
      </div>
    </header>
  );
}
