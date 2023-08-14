import Link from "next/link";
import Image from 'next/image';

import styles from '@/resources/styles/components/projects.module.css';
import { gagalin } from '@/resources/fonts/config.fonts';

export default function Projects() {

  return ( <>
    <section className={styles.projects} id='projects'>
      <div>
        <h1 className={gagalin.className}><i className="fa-solid fa-diagram-project"></i> PROYECTOS</h1>
      </div>
      <div className={styles.projects_cards_container}>
        <div className={styles.projects_card}>
          <div className={styles.projects_card_header}>
            <div>
              <h3>Aplicaciones Web</h3>
            </div>
            <div>
              <a href="/proyectos" className="btn btn-dark btn-sm">Ver más <i className="fa-solid fa-arrow-right"></i></a>
            </div>
          </div>
          <div className={styles.projects_card_body}>
            <div className={styles.item}>
              <div>
                <ul>
                  <li className='bold'>Aedifika Grupo Inmobiliario</li>
                  <ul>
                    <li className={styles.item_image}>
                      <div>
                        <p>Creado con:</p>
                      </div>
                      <div>
                        <Image src={'/resources/images/expressjs.png'} width={20} height={20} alt='Project Image'/>
                      </div>
                    </li>
                  </ul>
                </ul>
              </div>
              <div>
                <Link href={{
                  pathname: '/proyectos',
                  query: { project: '1' }
                }} className='btn btn-dark btn-sm'>Ver Proyecto <i className="fa-solid fa-star"></i></Link>
              </div>
            </div>
            <div className={styles.item}>
              <div>
                <ul>
                  <li className='bold'>Laura Merida</li>
                  <ul>
                    <li className={styles.item_image}>
                      <div>
                        <p>Creado con:</p>
                      </div>
                      <div>
                        <Image src={'/resources/images/nextjs.png'} width={20} height={20} alt='Project Image'/>
                      </div>
                    </li>
                  </ul>
                </ul>
              </div>
              <div>
                <Link href={{
                  pathname: '/proyectos',
                  query: { project: '2' }
                }} className='btn btn-dark btn-sm'>Ver Proyecto <i className="fa-solid fa-star"></i></Link>
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
              <a href="/proyectos" className="btn btn-dark btn-sm">Ver más <i className="fa-solid fa-arrow-right"></i></a>
            </div>
          </div>
          <div className={styles.projects_card_body}>
            <div className={styles.item}>
              <div>
                <ul>
                  <li className='bold'>Reloj Checador</li>
                  <ul>
                    <li className={styles.item_image}>
                      <div>
                        <p>Creado con:</p>
                      </div>
                      <div>
                        <Image src={'/resources/images/reactnative.png'} width={20} height={20} alt='Project Image'/>
                      </div>
                    </li>
                  </ul>
                </ul>
              </div>
              <div>
                <Link href={{
                  pathname: '/proyectos',
                  query: { project: '1' }
                }} className='btn btn-dark btn-sm'>Ver Proyecto <i className="fa-solid fa-star"></i></Link>
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
              <a href="/proyectos" className="btn btn-dark btn-sm">Ver más <i className="fa-solid fa-arrow-right"></i></a>
            </div>
          </div>
          <div className={styles.projects_card_body}>
            <div className={styles.item}>
              <div>
                <ul>
                  <li className='bold'>Password Generator</li>
                  <ul>
                    <li className={styles.item_image}>
                      <div>
                        <p>Creado con:</p>
                      </div>
                      <div>
                        <Image src={'/resources/images/react.png'} width={20} height={20} alt='Project Image'/>
                      </div>
                      <div>
                        <Image src={'/resources/images/bootstrap.png'} width={20} height={20} alt='Project Image'/>
                      </div>
                    </li>
                  </ul>
                </ul>
              </div>
              <div>
                <Link href={{
                  pathname: '/proyectos',
                  query: { project: '1' }
                }} className='btn btn-dark btn-sm'>Ver Proyecto <i className="fa-solid fa-star"></i></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </> );
};