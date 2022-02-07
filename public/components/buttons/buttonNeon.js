import styles from './buttonNeon.module.css'

export default function ButtonNeon({link, text}){
    return(
        <div className={styles.box}>
            <a href={link}><span>{text}</span></a>
        </div>
    )
}