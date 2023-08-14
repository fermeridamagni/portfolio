import styles from '@/resources/styles/components/main.module.css';

export default function Main() {
  return ( <>
    <main className={styles.main} id='main'>
      <div className={styles.main_div}>
        <div className={styles.main_text}>
          <h1><i className="fa-solid fa-at"></i> Fer <span className='color-yellow'>Merida</span></h1>
          <h3 className={styles.main_text_animation}>Software Developer</h3>
        </div>
        <div className={styles.main_socialNetworks}>
          <div className={styles.main_socialNetwork}>
            <a href="https://github.com/fermeridamagni" target='_blank'><i className="fa-brands fa-github"></i></a>
          </div>
          <div className={styles.main_socialNetwork}>
            <a href="https://www.instagram.com/fermeridamagni/" target='_blank'><i className="fa-brands fa-instagram"></i></a>
          </div>
          <div className={styles.main_socialNetwork}>
            <a href="https://www.linkedin.com/in/fer-merida-magni-0a629426a/" target='_blank'><i className="fa-brands fa-linkedin"></i></a>
          </div>
          <div className={styles.main_socialNetwork}>
            <a href="https://discord.com/invite/9wxByqDPvr" target='_blank'><i className="fa-brands fa-discord"></i></a>
          </div>
        </div>
      </div>
      <div className={styles.main_div2}></div>
    </main>
  </> );
};