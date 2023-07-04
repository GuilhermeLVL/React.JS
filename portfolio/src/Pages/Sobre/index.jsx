import styles from './Sobre.module.css'
import avatar from './images/profile-pic (2).png'
function Sobre(){

    return(
        <section className={styles.sobre}>
       
       <div className={styles.bio}>
        <img src={avatar} alt="Imagen" className='styles.avatar'/>
        <div>
                <h2>Sobre</h2>

                <p>Sou Guilherme pinheiro <br />
                Dev Front End</p>

                <p>Trabalho com desenvolvimento Web desde 2021.</p>

                <p>Sou apaixonado por transformar ideias em realidade digital.</p>

                <p>Especializado em criação de aplicações dinâmicas e intuitivas, <br />
                com foco na experiência do usuário.</p>

        </div>
       </div>

       <div className={styles.techs}>
        <h3>Techs</h3>
        images

       </div>
     
       
        
        </section>
    )
}

export default Sobre