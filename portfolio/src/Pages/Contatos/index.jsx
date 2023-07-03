import Header from "../../Components/Header"
import Footer from "../../Components/Footer"
import Container from "../../Components/Container"
import styles from "./contatos.module.css"

function Contatos(){

    return(
        <>
        <Header></Header>

        <Container>
            <section className={styles.contatos}>
            <h2>Contatos</h2>
            <h3>Entre em contato</h3>
            <p>Para que possamos conversar mais sobre</p>
            <div className={styles.icones}>
            iconse</div>

            </section>
        </Container>
        
        <Footer></Footer>
        </>
        
    )
}

export default Contatos