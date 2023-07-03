import Header from "../../Components/Header"
import Footer from "../../Components/Footer"
import Container from "../../Components/Container"
import styles from "./contatos.module.css"
import { GoMail } from 'react-icons/go'
import { BsInstagram, BsYoutube, BsLinkedin, BsGithub} from 'react-icons/Bs'


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

            <GoMail></GoMail>
            <BsInstagram></BsInstagram>
            <BsYoutube></BsYoutube>
            <BsGithub></BsGithub>
            <BsLinkedin></BsLinkedin>
            
            </div>

            </section>
        </Container>
        
        <Footer></Footer>
        </>
        
    )
}

export default Contatos