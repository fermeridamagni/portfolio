import styles from '@/resources/styles/components/contact.module.css';

export default function Contact () {
  return ( <>
    <section className={styles.contact} id='contact'>
      <div className={styles.card}>
        <div className={styles.subcard}>
          <div className={styles.subcard_body}>
            <div>
              <h5 className={styles.subcard_body_title}>¿Ten interesa <span className='bold'>desarrollar algún proyecto?</span></h5>
            </div>
            <div>
              <p className='bold'>Estos son mis datos de contacto!</p>
              <p>Si lo deseas puedes enviarme un correo a: <span className='bold'>contacto@magnideveloper.com</span></p>
            </div>
            <div>
              <p>O contactarme por mis redes sociales <i className='fa-solid fa-arrow-turn-down'/></p>
            </div>
          </div>
          <div className={styles.socialNetworks}>
            <div>
              <a href="https://www.instagram.com/fermeridamagni" target='_blank'><i className="fa-brands fa-instagram item_hover"/></a>
            </div>
            <div>
              <a href="https://github.com/fermeridamagni" target='_blank'><i className="fa-brands fa-github item_hover"/></a>
            </div>
            <div>
              <a href="https://discord.com/invite/9wxByqDPvr" target='_blank'><i className="fa-brands fa-discord item_hover"/></a>
            </div>
            <div>
              <a href="https://twitter.com/fermeridamagni" target='_blank'><i className="fa-brands fa-x-twitter item_hover"/></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </> );
};