import logo from'./logo.png'
import search from './search.png'
import styles from './Header.module.scss'


const Header = () => {
    return(
        <header className={styles.header}>
            <img className={styles.header__logo} src={logo} alt="Logo react space"/>
            <div className={styles.header__container}>
                <input className={styles.header__input} type="text" placeholder="What are you looking up?"/>
                <img className={styles.header__lupa} src={search} alt="Search icon"/>
            </div>
        </header>
    )
}

export default Header;