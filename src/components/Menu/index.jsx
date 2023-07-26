import styles from './Menu.module.scss'
import icones from './icones.json';


const Menu = () => {

    return (
            <nav className={styles.menu}>
                <ul className={styles.menu__lista}>
                    {icones.map((icon) => {
                        return (
                            <li className={styles.menu__item} key={icon.id}>
                               <img src={icon.path} alt={icon.alt}/>
                               <a>{icon.link}</a>
                            </li>
                        )
                    })}
                </ul>
            </nav>
    )
}

export default Menu;