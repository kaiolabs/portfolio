import styles from './button.module.css'

export default function Button({link, text}){
    return(
        <div className={styles.box}>
            <a href={link}><span>{text}</span></a>
        </div>
    )
}