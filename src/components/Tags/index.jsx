import styles from './Tags.module.scss'
import photos from '../Gallery/photos.json'

function Tags({tags, filtrarFotos, setItens}) {
  return (
    <div className={styles.tags}>
        <p>Filter by tags:</p>
        <ul className={styles.tags__lista}>
          {tags.map((tag) => {
            return (
              <li key={tag} onClick={() => filtrarFotos(tag)}>{tag}</li>   
            )
          })}
          <li onClick={() => setItens(photos)}>Todas</li>
           
        </ul>
    </div>
  )
}

export default Tags;