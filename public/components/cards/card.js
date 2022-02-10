import styles from './card.module.css'
import ButtonCard from '../buttons/buttonCard'

export default function Card({ img, titulo, feitoEm, description, linkAcessarSite, linkGithub }) {
    return (
        <div className={styles.glassCard}>

            <div className={styles.img}>
                {img}
            </div>

            <div className={styles.textBox}>
                <h2>{titulo}</h2>
                <p>Feito em: <span>{feitoEm}</span></p>
                <p>{description}</p>
                <div className={styles.buttons}>
                    <ButtonCard text={"Acessar"} link={linkAcessarSite} />
                    <ButtonCard text={"Github"} link={linkGithub} />
                </div>
            </div>
        </div>
    )
}
