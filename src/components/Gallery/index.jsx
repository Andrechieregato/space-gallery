import Tags from '../Tags';
import Cards from './Cards';
import  styles from './Gallery.module.scss';
import photos from './photos.json';
import {useState} from 'react';


function Gallery() {
  const [itens, setItens] = useState(photos);
  const tags = [...new Set(photos.map((valor) => valor.tag))];

  const filtrarFotos = (tag) =>{
    const novasFotos = photos.filter((photo) => {
      return photo.tag === tag;
    })

    setItens(novasFotos);
  }
  return (
    <section className={styles.galeria}>
        <h2>Navigate within the gallery</h2>
        <Tags tags={tags} filtrarFotos={filtrarFotos} setItens={setItens}/>
        <Cards photos={itens} styles={styles}/>
    </section>
    
  )
}

export default Gallery;