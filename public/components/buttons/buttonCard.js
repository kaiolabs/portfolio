import styles from './buttonCard.module.css'

export default function ButtonCard({link, text}){
    return(
        <div className={styles.box}>
            <a href={link}><button>{text}</button></a>
        </div>
    )
}