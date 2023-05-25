import '../Styles/components/sociais.sass'
//Pegando icones da biblioteca  react icons 

import {FaLinkedinIn, FaGithub, FaInstagram} from 'react-icons/fa';

const socialNetworks = [
    { name: "linkedin", icon: <FaLinkedinIn /> },
  { name: "github", icon: <FaGithub /> },
  { name: "instagram", icon: <FaInstagram /> },
]

const RedesSociais = () => {
  return (
   <section id='redes-Sociais'>
    {socialNetworks.map((network) =>(
        <a href="#" className='social-btn' id={network.name} key={network.name}>
            {network.icon}
        </a>
    ))}
   </section>
  )
}

export default RedesSociais