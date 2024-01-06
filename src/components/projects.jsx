"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";

import styles from "@/resources/styles/components/projects.module.css";

export default function Projects() {
  const router = useRouter();

  return (
    <>
      <section className={styles.projects} id="projects">
        <div>
          <h1 className="font-title text-4xl">
            <i className="fa-solid fa-diagram-project"></i> PROYECTOS
          </h1>
        </div>
        <div className={styles.projects_cards_container}>
          <div className={styles.projects_card}>
            <div className={styles.projects_card_header}>
              <div>
                <h3>Aplicaciones Web</h3>
              </div>
              <div>
                <Button
                  size="sm"
                  className="bg-black text-white"
                  onClick={() => router.push("/projects")}
                >
                  Ver más <i className="fa-solid fa-arrow-right"></i>
                </Button>
              </div>
            </div>
            <div className={styles.projects_card_body}>
              <div className={styles.item}>
                <div>
                  <ul className="list-disc list-inside">
                    <div>
                      <li className="bold">Aedifika Grupo Inmobiliario</li>
                    </div>
                    <div>
                      <p>Creado con:</p>
                    </div>
                    <div className={styles.item_image}>
                      <ul>
                        <li>
                          <div>
                            <Image
                              src={"/resources/images/expressjs.png"}
                              width={20}
                              height={20}
                              alt="Project Image"
                            />
                          </div>
                        </li>
                      </ul>
                      <ul>
                        <li>
                          <div>
                            <Image
                              src={"/resources/images/bootstrap.png"}
                              width={20}
                              height={20}
                              alt="Project Image"
                            />
                          </div>
                        </li>
                      </ul>
                    </div>
                  </ul>
                </div>
                <div>
                  <Button
                    size="sm"
                    className="bg-black text-white"
                    onClick={() => router.push("/projects")}
                  >
                    Ver Proyecto <i className="fa-solid fa-star"></i>
                  </Button>
                </div>
              </div>
              <div className={styles.item}>
                <div>
                  <ul className="list-disc list-inside">
                    <div>
                      <li className="bold">Laura Merida</li>
                    </div>
                    <div>
                      <p>Creado con:</p>
                    </div>
                    <div className={styles.item_image}>
                      <ul>
                        <li>
                          <div>
                            <Image
                              src={"/resources/images/nextjs.png"}
                              width={20}
                              height={20}
                              alt="Project Image"
                            />
                          </div>
                        </li>
                      </ul>
                    </div>
                  </ul>
                </div>
                <div>
                  <Button
                    size="sm"
                    className="bg-black text-white"
                    onClick={() => router.push("/projects")}
                  >
                    Ver Proyecto <i className="fa-solid fa-star"></i>
                  </Button>
                </div>
              </div>
              <div className={styles.item}>
                <div>
                  <ul className="list-disc list-inside">
                    <div>
                      <li className="bold">Magni Developer</li>
                    </div>
                    <div>
                      <p>Creado con:</p>
                    </div>
                    <div className={styles.item_image}>
                      <ul>
                        <li>
                          <div>
                            <Image
                              src={"/resources/images/nextjs.png"}
                              width={20}
                              height={20}
                              alt="Project Image"
                            />
                          </div>
                        </li>
                      </ul>
                      <ul>
                        <li>
                          <div>
                            <Image
                              src={"/resources/images/firebase.png"}
                              width={20}
                              height={20}
                              alt="Project Image"
                            />
                          </div>
                        </li>
                      </ul>
                    </div>
                  </ul>
                </div>
                <div>
                  <Button
                    size="sm"
                    className="bg-black text-white"
                    onClick={() => router.push("/projects")}
                  >
                    Ver Proyecto <i className="fa-solid fa-star"></i>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.projects_card}>
            <div className={styles.projects_card_header}>
              <div>
                <h3>Aplicaciones moviles</h3>
              </div>
              <div>
                <Button
                  size="sm"
                  className="bg-black text-white"
                  onClick={() => router.push("/projects")}
                >
                  Ver más <i className="fa-solid fa-arrow-right"></i>
                </Button>
              </div>
            </div>
            <div className={styles.projects_card_body}>
              <div className={styles.item}>
                <div>
                  <ul className="list-disc list-inside">
                    <div>
                      <li className="bold">Reloj Checador</li>
                    </div>
                    <div>
                      <p>Creado con:</p>
                    </div>
                    <div className={styles.item_image}>
                      <ul>
                        <li>
                          <div>
                            <Image
                              src={"/resources/images/reactnative.png"}
                              width={20}
                              height={20}
                              alt="Project Image"
                            />
                          </div>
                        </li>
                      </ul>
                    </div>
                  </ul>
                </div>
                <div>
                  <Button
                    size="sm"
                    className="bg-black text-white"
                    onClick={() => router.push("/projects")}
                  >
                    Ver Proyecto <i className="fa-solid fa-star"></i>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.projects_card}>
            <div className={styles.projects_card_header}>
              <div>
                <h3>Otros proyectos</h3>
              </div>
              <div>
                <Button
                  size="sm"
                  className="bg-black text-white"
                  onClick={() => router.push("/projects")}
                >
                  Ver más <i className="fa-solid fa-arrow-right"></i>
                </Button>
              </div>
            </div>
            <div className={styles.projects_card_body}>
              <div className={styles.item}>
                <div>
                  <ul className="list-disc list-inside">
                    <div>
                      <li className="bold">Generador de Contraseñas</li>
                    </div>
                    <div>
                      <p>Creado con:</p>
                    </div>
                    <div className={styles.item_image}>
                      <ul>
                        <li>
                          <div>
                            <Image
                              src={"/resources/images/nextjs.png"}
                              width={20}
                              height={20}
                              alt="Project Image"
                            />
                          </div>
                        </li>
                      </ul>
                      <ul>
                        <li>
                          <div>
                            <Image
                              src={"/resources/images/bootstrap.png"}
                              width={20}
                              height={20}
                              alt="Project Image"
                            />
                          </div>
                        </li>
                      </ul>
                    </div>
                  </ul>
                </div>
                <div>
                  <Button
                    size="sm"
                    className="bg-black text-white"
                    onClick={() => router.push("/projects")}
                  >
                    Ver Proyecto <i className="fa-solid fa-star"></i>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
