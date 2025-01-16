import styles from './NotFound.module.css'

const NotFound = () => {
  return (
    <div>
        <div className={styles.notFound}>
            <h1>404</h1>
            <p>Página não encontrada</p>
        </div>
    </div>
  )
}

export default NotFound
