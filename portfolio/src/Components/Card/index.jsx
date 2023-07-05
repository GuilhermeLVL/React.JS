import styles from './Card.modules.css'

function Card (){

    return(

        <section className={styles.card}>

            <h3>Titulo do projeto</h3>
            
            <p>Texto descritivo do projeto.</p>

            <div className={styles.card_footer}>


                <div className={styles.card_icones}>
                    html
                </div>

                <button className={styles.botao}>
                    seta
                </button>
            </div>
        </section>
    )
}

export default Card