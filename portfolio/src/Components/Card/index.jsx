import styles from './Card.module.css'
import {FaHtml5, FaReact, FaJs, FaCss3Alt} from 'react-icons/fa'
import {BsArrowRight} from 'react-icons/Bs'
function Card (){

    return(

        <section className={styles.card}>

            <h3>Titulo do projeto</h3>
            
            <p>Texto descritivo do projeto.</p>

            <div className={styles.card_footer}>


                <div className={styles.card_icones}>
                    <FaHtml5 ></FaHtml5>
                    <FaCss3Alt ></FaCss3Alt>
                    <FaJs ></FaJs>
                    <FaReact ></FaReact>
                </div>

                <button className={styles.botao}>
                    <BsArrowRight/>
                </button>
            </div>
        </section>
    )
}

export default Card