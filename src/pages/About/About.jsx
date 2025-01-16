import styles from "./About.module.css"
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className={styles.about}>
      <h2>Sobre o Mini <span>Blog</span></h2>
      <p>Este projeto consiste em um blog utilizando o React no Front-End e 
        o Firebase no Back-End
      </p>

      <Link to="https://github.com" className="btn"> 
         Ver no Github
      </Link>

    </div>
  )
}

export default About
