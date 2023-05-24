import Avatar from '../img/IMAGEM.png';
import '../Styles/components/slidebar.sass';

const Slidebar = () => {
  return (
    <aside id="slidebar">
      <img src={Avatar}/>
      <p className="title">Desenvolvedor</p>
      <p>redes sociais</p>
      <p>informacao de contato</p>
      <a href="" className="btn">Download curriculo</a>


    </aside>
  )
}

export default Slidebar