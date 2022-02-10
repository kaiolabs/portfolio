import styles from './conhecimentos.module.css'
import Image from 'next/image'
import { VscGithub } from  'react-icons/vsc'

export default function Conhecimentos (){
    return(
        <div className={styles.box}>
            <h1>Linguagens e tecnologias</h1>
            <hr/>
            <p>Aqui estão as linguagens e tecnologias que eu tenho contato.</p>

            <div className={styles.cards}>
                <div className={styles.card}>
                    <Image src="/img/html5.svg" alt="html5" width={80} height={80} />
                </div>
                <div className={styles.card}>
                    <Image src="/img/css3.svg" alt="css3" width={80} height={80} />
                </div>
                <div className={styles.card}>
                    <Image src="/img/javascript.svg" alt="javascript" width={80} height={80} />
                </div>
                <div className={styles.card}>
                    <Image src="/img/react.svg" alt="react" width={80} height={80} />
                </div>
                <div className={styles.card}>
                    <Image src="/img/next.svg" alt="next" width={80} height={80} />
                </div>
                <div className={styles.card}>
                    <Image src="/img/git.svg" alt="git" width={80} height={80} />
                </div>
                <div className={styles.card}>
                    <VscGithub/>
                </div>
                <div className={styles.card}>
                    <Image src="/img/python.svg" alt="python" width={80} height={80} />
                </div>
                <div className={styles.card}>
                    <Image src="/img/nodejs.svg" alt="nodejs" width={80} height={80} />
                </div>
                <div className={styles.card}>
                    <Image src="/img/styledComponent.png" alt="nodejs" width={80} height={80} />
                </div>
            </div>
        </div>
    )
}