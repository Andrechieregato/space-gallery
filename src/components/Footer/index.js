import facebook from './facebook.svg';
import twitter from './twitter.svg';
import instagram from './instagram.svg';
import styles from './Footer.module.scss';

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.footer__container}>
                <img src={facebook} alt="icon"/>
                <img src={twitter} alt="icon"/>
                <img src={instagram} alt="icon"/>
            </div>
            <p>The software application was developed by André Chieregato</p>
        </div>
    )
}

export default Footer;