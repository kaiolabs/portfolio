import styles from './layout.module.css'
import Image from 'next/image'
import { ImLinkedin2 } from 'react-icons/im'
import { VscGithubAlt } from 'react-icons/vsc'
import Sobre from './sobre'
import Navbar from './navbar'

export default function Layout() {
    return (
        <div  className={styles.container}>
            <header id="Home">
                <Navbar/>
            </header>

            <main>

        <section className={styles.box}>
          <div className={styles.boxText}>
            <h1>Olá, eu sou o Kaio Vinicius seja bem-vindo(a)</h1>
            <p>Desenvolvedor Front-End</p>
            <br />
            <a href='https://www.linkedin.com/in/kaioviniciusdev' data-linkedin><ImLinkedin2 /> Linkedin</a>
            <a href='https://github.com/kaiolabs' data-github> <VscGithubAlt /> Github</a>
          </div>

          <div className={styles.img}>
            <Image
              src="/img/soft1.svg"
              alt="Picture"
              width={550}
              height={450}
              priority
            />
          </div>
        </section>

        <section className={styles.sobre}>
          <div id="Sobre">
            <Sobre/>
          </div>
        </section>
      </main>

            <footer>

            </footer>
        </div>
    )
} 