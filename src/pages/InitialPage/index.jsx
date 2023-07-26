import Header from '../../components/Header';
import Menu from '../../components/Menu';
import Footer from '../../components/Footer';
import banner from './banner.png'
import styles from './InitialPage.module.scss'
import Gallery from '../../components/Gallery';
import Populares from '../../components/Populares';

const InitialPage = () => {
    return (
        <>
            <Header/>
            <main>
                <section className={styles.principal}>
                    <Menu/>
                    <div className={styles.principal__imagem}>
                        <h1>The most complete gallery of the universe</h1>
                        <img src={banner} alt="The Earth seen from the space"/>
                    </div>
                </section>
                <div className={styles.galeria}>
                    <Gallery/>
                    <Populares/>
                </div>
            </main>
          
            <Footer/>    
        </>
    )
}

export default InitialPage;