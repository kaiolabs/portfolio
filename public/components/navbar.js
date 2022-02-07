import styles from './navbar.module.css'
import { ImInfinite } from 'react-icons/im'
import ButtonNeon from './buttons/buttonNeon'

export default function Navbar() {
    return (
        <div className={styles.box}>
            <a href='#'><ImInfinite/></a>
            <nav>
                <ButtonNeon link="#Home" text="Home"/>
                <ButtonNeon link="#Sobre" text="Sobre"/>
                <ButtonNeon link="#Projetos" text="Projetos"/>
                <ButtonNeon link="#MinhasSkills" text="Minhas Skills"/>
                <ButtonNeon link="#Conhecimentos" text="Conhecimentos"/>
            </nav>
        </div>
    )
}