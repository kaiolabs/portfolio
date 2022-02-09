import styles from './button.module.css'

export default function Button({link, text}){
    return(
        <div className={styles.box}>
            <a href={link}><button>{text}</button></a>
        </div>
    )
}