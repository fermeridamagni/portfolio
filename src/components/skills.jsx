import Image from 'next/image';

import styles from '@/resources/styles/components/skills.module.css';
import { gagalin } from '@/resources/fonts/config.fonts';

export default function Skills() {
 return ( <>
  <section className={styles.skills} id='skills'>
    <div>
      <h1 className={gagalin.className}>SKILLS</h1>
    </div>
    <div className={styles.cards} id='skillsCard'>
      <div className={styles.card}>
        <div>
          <Image src={'/resources/images/javascript.png'} alt='Javascript Icon' width={70} height={70}/>
        </div>
        <div>
          <p>Javascript</p>
        </div>
      </div>
      <div className={styles.card}>
        <div>
          <Image src={'/resources/images/html.png'} alt='Html Icon' width={70} height={70}/>
        </div>
        <div>
          <p>HTML</p>
        </div>
      </div>
      <div className={styles.card}>
        <div>
          <Image src={'/resources/images/css.png'} alt='Css Icon' width={70} height={70}/>
        </div>
        <div>
          <p>CSS</p>
        </div>
      </div>
      <div className={styles.card}>
        <div>
          <Image src={'/resources/images/github.png'} alt='GitHub Icon' width={70} height={70}/>
        </div>
        <div>
          <p>GitHub</p>
        </div>
      </div>
      <div className={styles.card}>
        <div>
          <Image src={'/resources/images/nodejs.png'} alt='Node JS Icon' width={70} height={70}/>
        </div>
        <div>
          <p>Node JS</p>
        </div>
      </div>
      <div className={styles.card}>
        <div>
          <Image src={'/resources/images/typescript.png'} alt='Typescript Icon' width={70} height={70}/>
        </div>
        <div>
          <p>Typescript</p>
        </div>
      </div>
      <div className={styles.card}>
        <div>
          <Image src={'/resources/images/bootstrap.png'} alt='Bootstrap Icon' width={70} height={70}/>
        </div>
        <div>
          <p>Bootstrap</p>
        </div>
      </div>
      <div className={styles.card}>
        <div>
          <Image src={'/resources/images/mongodb.png'} alt='Mongo DB Icon' width={70} height={70}/>
        </div>
        <div>
          <p>Mongo DB</p>
        </div>
      </div>
      <div className={styles.card}>
        <div>
          <Image src={'/resources/images/expressjs.png'} alt='Express JS Icon' width={70} height={70}/>
        </div>
        <div>
          <p>Express JS</p>
        </div>
      </div>
      <div className={styles.card}>
        <div>
          <Image src={'/resources/images/react.png'} alt='React JS Icon' width={70} height={60}/>
        </div>
        <div>
          <p>React JS</p>
        </div>
      </div>
      <div className={styles.card}>
        <div>
          <Image src={'/resources/images/nextjs.png'} alt='Next JS Icon' width={70} height={70}/>
        </div>
        <div>
          <p>Next JS</p>
        </div>
      </div>
      <div className={styles.card}>
        <div>
          <Image src={'/resources/images/reactnative.png'} alt='React Native Icon' width={70} height={70}/>
        </div>
        <div>
          <p>React Native</p>
        </div>
      </div>
      <div className={styles.card}>
        <div>
          <Image src={'/resources/images/mysql.png'} alt='MySQL Icon' width={70} height={70}/>
        </div>
        <div>
          <p>MySQL</p>
        </div>
      </div>
      <div className={styles.card}>
        <div>
          <Image src={'/resources/images/wordpress.png'} alt='Wordpress Icon' width={70} height={70}/>
        </div>
        <div>
          <p>Wordpress</p>
        </div>
      </div>
    </div>
  </section>
 </> )
};