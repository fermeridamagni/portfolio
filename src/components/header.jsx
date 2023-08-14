import styles from '@/resources/styles/components/header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.group1} id="group1">
        <span className={styles.sing} id="sing"><i className="fa-solid fa-at"/> fermeridamagni</span>
      </div>
      <div className={styles.group2}>
        <div className={styles.menuToggle} id="menuToggle">
            <input type="checkbox"/>
            <span></span>
            <span></span>
            <span></span>
            <div className={styles.menu}>
                <a href="#contact" className="line_hover"><span>Contacto</span></a>
                <a href="#aboutus" className="line_hover"><span>¿Quién soy?</span></a>
                <a href="#projects" className="line_hover"><span>Proyectos</span></a>
            </div>
        </div>
        <div className={styles.simpleMenu} id="simpleMenu">
          <div>
            <a href="#contact" className="line_hover"><span>Contacto</span></a>
          </div>
          <div>
            <a href="#aboutus" className="line_hover"><span>¿Quién soy?</span></a>
          </div>
          <div>
            <a href="#projects" className="line_hover"><span>Proyectos</span></a>
          </div>
        </div>
      </div>
    </header>
  );
};