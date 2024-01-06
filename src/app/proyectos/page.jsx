import Link from 'next/link';

import styles from '@/resources/styles/components/proyectos/projects.module.css';

export default function Projects() {
  return ( <>
    <main className={styles.projects}>
      <div className={styles.card}>
        <div>
          <h1 className='font-title'>En construcción!</h1>
        </div>
        <div>
          <h4>Página en construcción.</h4>
        </div>
        <div>
          <Link href={'/'} className='btn btn-dark btn-lg'>Volver a inicio <i className="fa-solid fa-house"></i></Link>
        </div>
      </div>
    </main>
  </> )
};