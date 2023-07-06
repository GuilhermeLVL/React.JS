import styles from './Card.module.css'
import {FaHtml5, FaReact, FaJs, FaCss3Alt} from 'react-icons/fa'
import {BsArrowRight} from 'react-icons/Bs'
import { Link } from 'react-router-dom'

function Card ({name, description,html_url}){

    return(

        <section className={styles.card}>

            <h3>{name}</h3>
            
            <p>{description}</p>

            <div className={styles.card_footer}>


                <div className={styles.card_icones}>
                    <FaHtml5 ></FaHtml5>
                    <FaCss3Alt ></FaCss3Alt>
                    <FaJs ></FaJs>
                    <FaReact ></FaReact>
                </div>

                <Link to={html_url} className={styles.botao}>
                    <BsArrowRight/>
                </Link>
            </div>
        </section>
    )
}

export default Card