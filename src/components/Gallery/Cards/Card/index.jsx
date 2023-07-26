import React from 'react'
import open  from './open.png';
import favorito from './favorito.png';

function Card({styles, photo}) {
  return (
    <>
        <li key={photo.id} className={styles.galeria__card}>
            <img className={styles.galeria__imagem} src={photo.imagem} alt={photo.titulo}/>
            <p className={styles.galeria__descricao}>{photo.titulo}</p>
            <div>
                <p>{photo.creditos}</p>
                <span>
                    <img src={favorito} alt="icone coracao de curtir"/>
                    <img src={open} alt="icone de abrir modal"/>
                </span>
            </div>
        </li>
    </>
  )
}

export default Card