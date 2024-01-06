import Link from "next/link";

import styles from "@/resources/styles/components/footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.groups}>
        <div className={styles.group}>
          <h2 className={styles.sing}>
            <i className="fa-solid fa-at" /> Fer{" "}
            <span className="bold">Merida</span>
          </h2>
          <p>Desarrollador FullStack</p>
        </div>
        <div className={styles.group}>
          <div>
            <p className={styles.title}>Redes sociales</p>
          </div>
          <div className={styles.items}>
            <a
              href="https://github.com/fermeridamagni"
              className="line_hover"
              target="_blank"
            >
              <span>
                <i className="fa-brands fa-github"></i> GitHub
              </span>
            </a>
            <span className={styles.separator}>
              <i className="fa-solid fa-ellipsis-vertical"></i>
            </span>
            <a
              href="https://discord.com/invite/9wxByqDPvr"
              className="line_hover"
              target="_blank"
            >
              <span>
                <i className="fa-brands fa-discord"></i> Discord
              </span>
            </a>
          </div>
          <div className={styles.items}>
            <a
              href="https://www.instagram.com/fermeridamagni/"
              className="line_hover"
              target="_blank"
            >
              <span>
                <i className="fa-brands fa-instagram"></i> Instagram
              </span>
            </a>
            <span className={styles.separator}>
              <i className="fa-solid fa-ellipsis-vertical"></i>
            </span>
            <a
              href="https://www.linkedin.com/in/fer-merida-magni-0a629426a/"
              className="line_hover"
              target="_blank"
            >
              <span>
                <i className="fa-brands fa-linkedin"></i> Linkedin
              </span>
            </a>
            <span className={styles.separator}>
              <i className="fa-solid fa-ellipsis-vertical"></i>
            </span>
            <a
              href="https://twitter.com/fermeridamagni"
              className="line_hover"
              target="_blank"
            >
              <span>
                <i className="fa-brands fa-x-twitter"></i> X-Twitter
              </span>
            </a>
          </div>
        </div>
        <div className={styles.group}>
          <div>
            <p className={styles.title}>Secciones</p>
          </div>
          <div className={styles.items}>
            <Link href="/" className="line_hover">
              <span>Inicio</span>
            </Link>
            <span className={styles.separator}>
              <i className="fa-solid fa-ellipsis-vertical"></i>
            </span>
            <a href="#aboutus" className="line_hover">
              <span>¿Quién soy?</span>
            </a>
          </div>
          <div className={styles.items}>
            <a href="#projects" className="line_hover">
              <span>Proyectos</span>
            </a>
            <span className={styles.separator}>
              <i className="fa-solid fa-ellipsis-vertical"></i>
            </span>
            <a href="#contact" className="line_hover">
              <span>Contacto</span>
            </a>
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
        <div>
          <p>Copyrigth @fermeridamagni.</p>
        </div>
        <div>
          <p>Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
