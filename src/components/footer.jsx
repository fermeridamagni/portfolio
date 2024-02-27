import Link from "next/link";

import { config } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAt } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";

config.autoAddCss = false;

export default function Footer() {
  return (
    <footer className="max-w-[1500px] w-full grid grid-cols-1 lg:grid-cols-4 py-6 px-5 lg:px-10 gap-6">
      <div className="col-start-1 col-end-1 lg:col-start-2 lg:col-end-4">
        <Link
          href="#main"
          className="flex flex-col justify-center items-center text-xl"
        >
          <span>
            <FontAwesomeIcon icon={faAt} /> fermeridamagni
          </span>
          <span className="text-neutral-500 text-sm">Full Stack Developer</span>
        </Link>
      </div>

      <div className="flex lg:col-start-4 lg:col-end-4 items-center justify-center lg:justify-end gap-6">
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
    </footer>
  );
}
