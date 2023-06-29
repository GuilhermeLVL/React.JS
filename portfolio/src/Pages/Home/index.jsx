import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import { Link } from 'react-router-dom'
import Container from '../../Components/Container'

function Home(){
    
    return(
        <>
        <Header></Header>
       <Container>

       <section className='home'>
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
       </Container>
        <Footer></Footer>
       </>
    )

}
export default Home