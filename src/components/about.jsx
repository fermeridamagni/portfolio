import Image from "next/image";

import styles from "@/resources/styles/components/about.module.css";

export default function About() {
  return (
    <>
      <section className={styles.about} id="aboutus">
        <div className={styles.about_card}>
          <h1 className="font-title">Mi nombre es Fer Merida</h1>
        </div>
        <div className={styles.about_card}>
          <div className={styles.about_subcard}>
            <p>
              <span className="bold">Desarrollador de Software Full Stack</span>
              .
            </p>
            <p>
              Principalmente tengo conocimiento en{" "}
              <span className="bold">desarrollo web</span>, algunos ejemplos
              son:
            </p>
            <p>
              <i className="fa-solid fa-hashtag"></i>{" "}
              <span className="bold">HTML y CSS</span>,{" "}
              <i className="fa-solid fa-hashtag"></i>{" "}
              <span className="bold">Typescript</span>,{" "}
              <i className="fa-solid fa-hashtag" />{" "}
              <span className="bold">Javascript</span> y sus diferentes{" "}
              <span className="bold">Frameworks</span> cómo:
            </p>
            <p>
              <span className="bold">
                <i className="fa-solid fa-hashtag" /> Node JS
              </span>
              ,{" "}
              <span className="bold">
                <i className="fa-solid fa-hashtag" /> React JS
              </span>
              ,{" "}
              <span className="bold">
                <i className="fa-solid fa-hashtag" /> Next JS
              </span>
              ,{" "}
              <span className="bold">
                <i className="fa-solid fa-hashtag" /> React Native JS
              </span>
              ,{" "}
              <span className="bold">
                <i className="fa-solid fa-hashtag" /> Express JS
              </span>
              , entre otros.
            </p>
            <p>
              Actualmente soy estudiante en el{" "}
              <span className="bold">Instituto Politécnico Nacional</span>.
            </p>
          </div>
          <div className={styles.about_subcard2}>
            <Image
              src={"/resources/images/image_about.png"}
              alt="Image About"
              width={250}
              height={250}
            />
          </div>
        </div>
      </section>
    </>
  );
}
