import styles from './layout.module.css'
import Navbar from './NavBar'

export default function Layout() {
    return (
        <div className={styles.box}>
            <header>
                <Navbar/>
            </header>

            <main>
            </main>

            <footer>

            </footer>
        </div>
    )
} 