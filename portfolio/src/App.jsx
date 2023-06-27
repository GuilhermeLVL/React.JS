import './App.css'
import Footer from './Components/Footer'
import Header from './Components/Header'

function App() {

  return (
    <>
     <Header></Header>
     <section className='container'>
      <div>

        <p>Ola, sou <br/>
        <span>Guilherme pinheiro</span>
        <br/> Dev Front-end</p>
        <button>Saiba mais</button>
      </div>
     </section>
     <Footer></Footer>
    </>
  )
}

export default App
