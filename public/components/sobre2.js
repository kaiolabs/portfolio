import styles from './sobre2.module.css'
import { useEffect, useState } from 'react'

export default function Sobre2() {

    const [animat, setAnimat] = useState('')

    useEffect(() => {
        const intersectionObserver = new IntersectionObserver((entries) => {
            if (entries.some((entry) => entry.isIntersecting)) {
                setAnimat("start");
            }
        });
        intersectionObserver.observe(document.querySelector('#Sobre'))
        return () => intersectionObserver.disconnect();
    }, []);

    return (
        <div className={styles.boxAnime}>
            <div data-text={animat}>
                <div className={styles.box}>
                    <div className={styles.text}>
                        <div>
                            <h1>Sobre mim</h1>
                            <p>
                                Sou desenvolvedor Front-end júnior <br /> <br />
                                Apaixonado por resolver problemas e ajudar as pessoas!
                                Sempre em busca de mais conhecimento e aprimorando
                                cada dia mais as minhas bases, busco sempre
                                ajudar e ensinar outras pessoas para mim fazer isso é a melhor maneira de
                                evoluir cada vez mais
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}