import './App.css'
import Footer from './Components/Footer'
import Header from './Components/Header'

function App() {

  return (
    <>
     <Header></Header>
     <section className='container'>
      <div className='apresentacao'>

        <p>Ola, sou <br/>
        <span>Guilherme pinheiro</span>
        <br/> Dev Front-end</p>
        <button className='btn btn-red'>Saiba mais</button>
      </div>


      <figure>
        <img className='img-home' src="/developer-red.svg" alt="imagem de home" />
      </figure>


     </section>
     <Footer></Footer>
    </>
  )
}

export default App
