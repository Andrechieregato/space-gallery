import React from 'react'
import Card from './Card';

function Cards({photos, styles}) {
  return (
    <ul className={styles.galeria__cards}>
    {photos.map((photo)=>{
        return (
            <Card key={photo.id} styles={styles} photo={photo} />    
        )
    })}
</ul>
  )
}

export default Cards