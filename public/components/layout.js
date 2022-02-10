import styles from './layout.module.css'
import Image from 'next/image'
import { ImLinkedin2 } from 'react-icons/im'
import { VscGithubAlt } from 'react-icons/vsc'
import Navbar from './navbar'
import Sobre from './sobre'
import Projetos from './projetos'
import Conhecimentos from './conhecimentos'

export default function Layout() {

  return (
    <div className={styles.container}>

      <header id="Home">
        <Navbar />
      </header>

      <main>

        <section className={styles.box}>
          <div className={styles.boxText}>
            <h1>Olá, eu sou o Kaio Vinicius seja bem-vindo(a)</h1>
            <p>Desenvolvedor Front-End</p>
            <br />
            <a href='https://www.linkedin.com/in/kaioviniciusdev'><button data-linkedin><ImLinkedin2 /> Linkedin</button></a>
            <a href='https://github.com/kaiolabs'><button data-github> <VscGithubAlt /> Github</button></a>
          </div>

          <div className={styles.img}>
            <Image
              src="/img/soft1.svg"
              alt="Picture"
              width={500}
              height={400}
              priority
            />
          </div>
        </section>

        <section className={styles.sobre} id="Sobre">
          <div>
            <Sobre/>
          </div>
        </section>

        <section className={styles.projetos}>
          <div id="Projetos">
            <Projetos/>
          </div>
        </section>

        <section className={styles.conhecimentos}>
          <div id="Conhecimentos">
            <Conhecimentos/>
          </div>
        </section>

      </main>

      <footer>

      </footer>
    </div>
  )
} 