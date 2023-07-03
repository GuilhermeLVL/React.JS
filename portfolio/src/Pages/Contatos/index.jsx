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

            <a href='mailto:guigui.cruzeiro@gmail.com' target="_blank" rel="noopener noreferre">
            <GoMail className={styles.icone}></GoMail> </a>
            <a href="https://www.instagram.com/guilhermelvl/" target="_blank"><BsInstagram className={styles.icone}></BsInstagram> </a>
            <a href="https://www.youtube.com/channel/UC0B9-PPfveTOfRJxnN9j6jQ" target="_blank"><BsYoutube className={styles.icone}></BsYoutube> </a>
            <a href="https://github.com/GuilhermeLVL" target="_blank"><BsGithub className={styles.icone}></BsGithub> </a>
            <a href="https://www.linkedin.com/in/guilhermelvl/" target="_blank"><BsLinkedin className={styles.icone}></BsLinkedin> </a>
            
            
            
           
            
            </div>

            </section>
        </Container>
        
        <Footer></Footer>
        </>
        
    )
}

export default Contatos