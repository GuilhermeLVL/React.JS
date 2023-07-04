
import { Link } from 'react-router-dom'

import styles from './home.module.css'

function Home(){
    
    return(
        <>
       

       <section className={styles.home}>
         <div className={styles.apresentacao}>
   
           <p>Ola, sou <br/>
           <span>Guilherme pinheiro</span>
           <br/> Dev Front-end</p>

           <Link to="/Sobre" className={`${styles.btn} ${styles.btn_red}
           `}> Saiba mais
           </Link>
           

         </div>
   
   
         <figure>
           <img className={styles.img_home} src="/developer-red.svg" alt="imagem de home" />
         </figure>
   
   
        </section>
       
       </>
    )

}
export default Home