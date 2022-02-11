import styles from './contato.module.css'
import {FaWhatsapp} from 'react-icons/fa'
import {TiSocialLinkedin} from 'react-icons/ti'
import {MdOutlineMailOutline} from 'react-icons/md'
import {FiInstagram} from 'react-icons/fi'

export default function Contato(){
    return(
        <div className={styles.box}>

            <h1>Entre em contato</h1>

            <div className={styles.cards}>

                <div className={styles.card}>
                    <div className={styles.img}>
                       <a href='https://api.whatsapp.com/send?phone=5591992004301&text=Ol%C3%A1'><FaWhatsapp/></a>
                    </div>
                    <div className={styles.text}>
                        <h3>Whatsapp</h3>
                        <p>+55 91 992004301</p>
                    </div>
                </div>

                <div className={styles.card}>
                    <div className={styles.img}>
                        <a href='https://www.instagram.com/kaio_vinicius15/'><FiInstagram/></a>
                    </div>
                    <div className={styles.text}>
                        <h3>Instagram</h3>
                        <p>@kaio_vinicius15</p>
                    </div>
                </div>

                <div className={styles.card}>
                    <div className={styles.img}>
                        <a href='https://www.linkedin.com/in/kaioviniciusdev'><TiSocialLinkedin/></a>
                    </div>
                    <div className={styles.text}>
                        <h3>LinkedIn</h3>
                        <p>Kaio Viicius</p>
                    </div>
                </div>

                <div className={styles.card}>
                    <div className={styles.img}>
                        <a href='mailto:kaiov@mx2.unisc.br'><MdOutlineMailOutline/></a>
                    </div>
                    <div className={styles.text}>
                        <h3>E-mail</h3>
                        <p>kaiov@mx2.unisc.br</p>
                    </div>
                </div>

            </div>
        </div>
    )
}