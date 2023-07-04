import styles from './Sobre.module.css'
import avatar from './images/profile-pic (2).png'
import html from './images/icon-html.svg'
import css from './images/icon-css.svg'
import js from './images/icon-js.svg'
import node from './images/icon-node.svg'
import react from './images/icon-react.svg'
import sql from './images/icon-sql.svg'


function Sobre(){

    return(
        <section className={styles.sobre}>
       
       <div className={styles.bio}>
        <img src={avatar} alt="Imagen" className={styles.avatar}/>
        <div className={styles.textos}>
                <h2>Sobre</h2>

                <p>Sou <span>Guilherme pinheiro </span><br />
                <strong>Dev Front End</strong></p>

                <p>Trabalho com desenvolvimento Web desde 2021.</p>

                <p>Sou apaixonado por transformar ideias em realidade digital.</p>

                <p>Especializado em criação de aplicações dinâmicas e intuitivas, <br />
                com foco na experiência do usuário.</p>

        </div>
       </div>

       <div className={styles.techs}>
                 <h3>Techs</h3>

            <div className={styles.icones}>     
                <img src={html} alt="" />
                <img src={css} alt="" />
                <img src={js} alt="" />
                <img src={node} alt="" />
                <img src={react} alt="" />
                <img src={sql} alt="" />
            </div>

       </div>
     
       
        
        </section>
    )
}

export default Sobre