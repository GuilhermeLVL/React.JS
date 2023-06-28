import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import { Link } from 'react-router-dom'

function Home(){
    
    return(
        <>
        <Header></Header>
        <section className='container'>
         <div className='apresentacao'>
   
           <p>Ola, sou <br/>
           <span>Guilherme pinheiro</span>
           <br/> Dev Front-end</p>

           <Link to="/Sobre" className='btn btn-red'> Saiba mais
           </Link>
           

         </div>
   
   
         <figure>
           <img className='img-home' src="/developer-red.svg" alt="imagem de home" />
         </figure>
   
   
        </section>
        <Footer></Footer>
       </>
    )

}
export default Home