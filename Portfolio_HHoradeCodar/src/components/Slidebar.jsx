import Avatar from '../img/IMAGEM.png';
import '../Styles/components/slidebar.sass';
import RedesSociais from './RedesSociais';

const Slidebar = () => {
  return (
    <aside id="slidebar">
      <img src={Avatar}/>
      <p className="title">Desenvolvedor</p>
      <RedesSociais/>
      <informationContainer/>
      <a href="" className="btn">Download curriculo</a>


    </aside>
  )
}

export default Slidebar