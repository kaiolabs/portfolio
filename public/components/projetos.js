import Card from './cards/card'
import styles from './projetos.module.css'

export default function Projetos(){
    return(
        <div className={styles.box}>
            <h1>Projetos</h1>

            <div className={styles.cards}>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
        </div>
    )
}