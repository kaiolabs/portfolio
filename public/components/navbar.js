import styles from './navbar.module.css'
import { ImInfinite } from 'react-icons/im'
import Button from './buttons/button'
import { useState } from 'react';


export default function Navbar() {

    const [open, setOpen] = useState(false)

    const ToggleMode= () =>{
        setOpen(!open)
    }

    return (
        <div className={styles.box}>
            <a href='#Home'><ImInfinite/></a>

            <div onClick={ToggleMode}>
                <div className={styles.test}></div>
            </div>

            <div>
                <nav>
                    <Button link="#Home" text="Home"/>
                    <Button link="#Sobre" text="Sobre"/>
                    <Button link="#Projetos" text="Projetos"/>
                    <Button link="#MinhasSkills" text="Minhas Skills"/>
                    <Button link="#Conhecimentos" text="Conhecimentos"/>
                </nav>
                
            </div>
        </div>
    )
}