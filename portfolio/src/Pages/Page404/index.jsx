import Container from "../../Components/Container"
import Footer from "../../Components/Footer"
import Header from "../../Components/Header"
import styles from "./Page404.module.css"

function Page404(){

    return(
    <>
    <Header></Header>
    <Container>

        <h2 className={styles.titulo2}>Algo de errado nao esta certo! </h2>
        <div className={styles.textos}>
            <span className={styles.texto_grande}>404</span><br />
            <strong className={styles.texto_vermelho}> Pagina Nao Localizada</strong>

        </div>
    </Container>
    <Footer></Footer>
    </>
    )
}

export default Page404