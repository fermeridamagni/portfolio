"use client";

import Main from "@/components/ui/main";
import Section from "@/components/ui/section";

import { projects } from "@/resources/json/portfolio";

import NextImage from "next/image";
import NextLink from "next/link";
import { useState, useMemo } from "react";
import { Toaster, toast } from "sonner";
import { Input, Textarea, Button, Image, Link } from "@nextui-org/react";
import { config } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faUser,
  faPaperPlane,
  faMessage,
} from "@fortawesome/free-regular-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

config.autoAddCss = false;

export default function HomePage() {
  return (
    <>
      <Main id="main" flexCenter flexCol>
        <MainContent />
      </Main>

      <Section
        id="aboutme"
        title="Sobre Mi"
        description="Un poco sobre mi."
        image={{
          src: "/images/fermeridamagni.webp",
          alt: "Fer Merida",
          width: 200,
          height: 355,
        }}
      >
        <AboutMeContent />
      </Section>

      <Section
        id="portfolio"
        title="Portafolio de Trabajo"
        description="Proyectos creados o en desarrollo."
        flexCenterEvenly={false}
      >
        <PortfolioContent />
      </Section>

      <Section id="contact" title="Contacto" description="Forma de contacto.">
        <ContactContent />
      </Section>

      <Toaster richColors closeButton />
    </>
  );
}

function AboutMeContent() {
  return (
    <div className="w-full md:w-[500px] h-[500px] flex flex-col gap-10 text-left">
      <div className="flex flex-col gap-4">
        <div>
          <h6 className="font-bold text-xl">
            Desarrollador de Software Full Stack.
          </h6>
        </div>
        <div>
          <p>
            Soy Developer Full Stack con un año de experiencia en Desarrollo{" "}
            <span className="font-bold">Web</span> y{" "}
            <span className="font-bold">Móvil</span>. Me apasiona convertir
            ideas en realidad y me encanta colaborar en proyectos desafiantes.
            Siempre estoy buscando aprender y crecer en este emocionante campo
            tecnológico.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div>
          <li className="font-bold text-xl">Habilidades</li>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <div>
              <Image
                as={NextImage}
                alt="JAVASCRIPT"
                src="/images/technologies/javascript.webp"
                width={80}
                height={80}
                isBlurred
              />
            </div>
            <div>
              <Image
                as={NextImage}
                alt="TYPESCRIPT"
                src="/images/technologies/typescript.webp"
                width={80}
                height={80}
                isBlurred
              />
            </div>
            <div>
              <Image
                as={NextImage}
                alt="HTML"
                src="/images/technologies/html.webp"
                width={80}
                height={80}
                isBlurred
              />
            </div>
            <div>
              <Image
                as={NextImage}
                alt="CSS"
                src="/images/technologies/css.webp"
                width={80}
                height={80}
                isBlurred
              />
            </div>
          </div>

          <div>
            <li className="font-bold text-xl">Tecnologías Preferidas</li>
          </div>

          <div className="flex items-center gap-6">
            <div>
              <Image
                as={NextImage}
                alt="NEXTJS"
                src="/images/technologies/nextjs.webp"
                width={80}
                height={80}
                isBlurred
              />
            </div>
            <div>
              <Image
                as={NextImage}
                alt="REACT"
                src="/images/technologies/react.webp"
                width={80}
                height={80}
                isBlurred
              />
            </div>
            <div>
              <Image
                as={NextImage}
                alt="EXPRESSJS"
                src="/images/technologies/expressjs.webp"
                width={80}
                height={80}
                isBlurred
              />
            </div>
            <div>
              <Image
                as={NextImage}
                alt="FIREBASE"
                src="/images/technologies/firebase.webp"
                width={80}
                height={80}
                isBlurred
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MainContent() {
  return (
    <div className="relative w-full flex justify-center items-center">
      <div className="absolute text-center flex flex-col justify-center items-center z-30">
        <h1 className="font-title_anton text-8xl md:text-[170px] lg:text-[200px] xl:text-[250px] text-black dark:text-white drop-shadow-xl uppercase">
          Fer Merida
        </h1>

        <span className="text-xl ">{`< Full Stack Developer />`}</span>

        <div className="flex gap-6 py-6">
          <div>
            <NextLink
              href="https://www.instagram.com/fermeridamagni/"
              target="_blank"
            >
              <FontAwesomeIcon icon={faInstagram} size="2xl" />
            </NextLink>
          </div>
          <div>
            <NextLink href="https://github.com/fermeridamagni" target="_blank">
              <FontAwesomeIcon icon={faGithub} size="2xl" />
            </NextLink>
          </div>
        </div>
      </div>

      <div className="bg-[#ededed] dark:bg-black_primary w-[700px] h-[700px] rounded-full hidden lg:flex justify-center items-center shadow-lg relative"></div>
    </div>
  );
}

function PortfolioContent() {
  return (
    <div className="w-full md:w-[700px] h-full grid grid-cols-2 gap-8">
      {projects.slice(0, 7).map((project, index) => (
        <div
          className="flex flex-col gap-2 items-center border border-white_primary dark:border-black_primary rounded-xl shadow-lg backdrop-blur-[2px] bg-transparent p-2"
          key={index}
        >
          <div>
            {project.link ? (
              <NextLink href={project.link} target="_blank">
                <Image
                  as={NextImage}
                  alt={project.title}
                  src={project.image}
                  width={300}
                  height={300}
                  isZoomed
                  isBlurred
                />
              </NextLink>
            ) : (
              <Image
                as={NextImage}
                alt={project.title}
                src={project.image}
                width={300}
                height={300}
                isZoomed
                isBlurred
              />
            )}
          </div>

          <div className="flex flex-col gap-2 w-full">
            <div>
              <span className="text-lg font-bold">{project.title}</span>
            </div>

            <div className="flex flex-col gap-5 text-left">
              <div>
                <li className="list-inside text-sm md:text-md">
                  Estado:{" "}
                  <span
                    className={`font-bold
                    ${
                      project.state === "En Desarrollo"
                        ? "text-blue-500"
                        : project.state === "Terminado"
                        ? "text-green-500"
                        : project.state === "Pausado"
                        ? "text-warning-500"
                        : project.state === "Descontinuado"
                        ? "text-danger-500"
                        : "text-neutral-500"
                    }
                  `}
                  >
                    {project.state}
                  </span>
                  .
                </li>

                <li className="list-inside text-sm md:text-md">
                  Tipo: <span className="font-bold">{project.type}</span>
                </li>
              </div>

              <div className="w-full flex justify-end items-end flex-wrap gap-2">
                <div className={`${project.code ? "block" : "hidden"}`}>
                  <Button
                    as={Link}
                    href={project.code}
                    isDisabled={!project.link ? true : false}
                    size="sm"
                    variant="faded"
                    isExternal
                    showAnchorIcon
                    startContent={<FontAwesomeIcon icon={faGithub} />}
                  >
                    Código
                  </Button>
                </div>

                <div>
                  <Button
                    as={Link}
                    href={project.link}
                    isDisabled={!project.link ? true : false}
                    size="sm"
                    variant="faded"
                    isExternal
                    showAnchorIcon
                  >
                    Ver proyecto
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      <div>
        <NextLink href="/portfolio">
          <Button
            as={Link}
            size="lg"
            variant="faded"
            color="success"
            fullWidth
            endContent={<FontAwesomeIcon icon={faArrowRight} />}
          >
            Ver más proyectos
          </Button>
        </NextLink>
      </div>
    </div>
  );
}

function ContactContent() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // This const is for validate the email with a match
  const validateEmail = (value) =>
    value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);

  // This function is for validate the email
  const isInvalidEmail = useMemo(() => {
    if (email === "") return false;

    return validateEmail(email) ? false : true;
  }, [email]);

  // This function is for validate the name
  const isInvalidName = useMemo(() => {
    if (name === "") return false;

    return name.length < 4 ? true : false;
  }, [name]);

  // This function is for validate the message
  const isInvalidMessage = useMemo(() => {
    if (message === "") return false;

    return message.length < 10 ? true : false;
  }, [message]);

  // This function is for validate the form
  const isInvalid = useMemo(() => {
    if (name === "" || email === "" || message === "") return false;

    return isInvalidEmail || isInvalidName || isInvalidMessage ? false : true;
  }, [name, email, message, isInvalidEmail, isInvalidName, isInvalidMessage]);

  // This function send the information to the API for send the email
  async function sendMail() {
    if (validateEmail) {
      setIsLoading(true);

      const res = await fetch(
        "https://www.api.magnideveloper.com/apps/mailer/sendMail",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            name,
            message,
          }),
        }
      );

      const data = await res.json();

      // If the status from the API is SUCCESS, then the email was sent correctly
      if (data.status == 200) {
        toast.success("Gracias por ponerte en contacto conmigo!", {
          description: "Revisa tu correo para mas detalles.",
        });

        setIsLoading(false);
        setEmail("");
        setName("");
        setMessage("");
      } else {
        toast.error("Ha ocurrido un error.", {
          description: "Reintenta mas tarde.",
        });

        setIsLoading(false);
        setEmail("");
        setName("");
        setMessage("");
      }
    } else {
      toast.error("Por favor, rellena los campos correctamente.", {
        description: "Todos los campos son obligatorios.",
      });

      setEmail("");
      setName("");
      setMessage("");
    }
  }

  return (
    <div className="w-full md:w-[500px] h-[500px] rounded-lg shadow-lg bg-white dark:bg-black border border-white_primary dark:border-black_primary">
      <div className="w-full h-full flex flex-col justify-center gap-6 p-5">
        <div>
          <p className="text-xl">
            ¿Tienes alguna pregunta o proyecto en mente?
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <div>
            <Input
              placeholder="Nombre:"
              isInvalid={isInvalidName}
              color={isInvalidName ? "danger" : "success"}
              errorMessage={
                isInvalidName &&
                "El nombre debe de contener al menos 4 caracteres."
              }
              isClearable
              startContent={<FontAwesomeIcon icon={faUser} />}
              variant="underlined"
              value={name}
              onValueChange={(name) => {
                setName(name);
              }}
            />
          </div>
          <div>
            <Input
              placeholder="Correo:"
              isInvalid={isInvalidEmail}
              color={isInvalidEmail ? "danger" : "success"}
              errorMessage={isInvalidEmail && "Ingresa un correo valido."}
              value={email}
              type="email"
              isClearable
              startContent={<FontAwesomeIcon icon={faEnvelope} />}
              variant="underlined"
              onValueChange={(email) => {
                setEmail(email.toLocaleLowerCase());
              }}
            />
          </div>
          <div>
            <Textarea
              isInvalid={isInvalidMessage}
              startContent={<FontAwesomeIcon icon={faMessage} />}
              color={isInvalidMessage ? "danger" : "success"}
              errorMessage={
                isInvalidMessage && "El mensaje debe ser mas largo."
              }
              placeholder="Mensaje:"
              value={message}
              variant="underlined"
              onValueChange={(message) => {
                setMessage(message);
              }}
            />
          </div>
        </div>
        <div>
          <Button
            type="button"
            variant="faded"
            isLoading={isLoading ? true : false}
            onClick={sendMail}
            isDisabled={isInvalid ? false : true}
          >
            Enviar <FontAwesomeIcon icon={faPaperPlane} />
          </Button>
        </div>
      </div>
    </div>
  );
}
