import styles from './sobre.module.css'
import Image from 'next/dist/client/image'
import { useEffect, useState } from 'react'

export default function Sobre(){

    const [animat, setAnimat] = useState('')

    useEffect(() => {
        const intersectionObserver = new IntersectionObserver((entries) => {
            if(entries.some((entry) => entry.isIntersecting)){
                setAnimat("start");
            }
        });
        intersectionObserver.observe(document.querySelector('#Sobre'))
        return () => intersectionObserver.disconnect();
    }, []);

    return(
        <div className={styles.box} data-image = {animat}>

            <div className={styles.boxText} data-text = {animat}>
                <h1>Sobre mim</h1>
                <p>Sou desenvolvedor Front-end júnior. <br/> <br/> Apaixonado por resolver problemas e ajudar as pessoas! Sempre em busca de mais conhecimento e aprimorando cada dia mais as minhas bases, busco sempre ajudar e ensinar outras pessoas é a melhor maneira de evoluir cada vez mais.</p>
            </div>

            <div className={styles.img} data-image = {animat}>
                <Image
                src="/img/soft3.svg"
                alt="Picture"
                width={550}
                height={450}
                priority
                />
          </div>
        </div>
    )
}