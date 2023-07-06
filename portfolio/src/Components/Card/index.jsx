import styles from './Card.module.css'
import {FaHtml5, FaReact, FaJs, FaCss3Alt} from 'react-icons/fa'
import {BsArrowRight} from 'react-icons/bs'


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

                <a href={html_url} target='_blank' className={styles.botao}>
                    <BsArrowRight/>
                </a>
            </div>
        </section>
    )
}

export default Card