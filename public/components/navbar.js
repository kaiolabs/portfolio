import styles from './navbar.module.css'
import { ImInfinite } from 'react-icons/im'
import Button from './buttons/button'
import {useState} from 'react'

export default function Navbar() {

    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)

    return (
        <div className={styles.box}>
            <a href='#Home'><ImInfinite/></a>

            <div>
                <nav>
                    <Button link="#Home" text="Home"/>
                    <Button link="#Sobre" text="Sobre"/>
                    <Button link="#Projetos" text="Projetos"/>
                    <Button link="#Conhecimentos" text="Conhecimentos"/>
                    <Button link="#Contato" text="Contato"/>
                </nav>
                
                <div className={styles.navIcon} onClick ={handleClick}>

                </div>
            </div>
        </div>
    )
}