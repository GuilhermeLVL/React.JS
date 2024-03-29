import {AiFillPhone, AiOutlineMail, AiFillEnvironment } from "react-icons/ai"
import '../Styles/components/informationContainer.sass'

import React from 'react'

const InformationContainer = () => {
  return (
    <section id="information">


        <div className="info-card">
        <AiFillPhone id="phone-icon"/>
        <div>
            <h3>Telefone</h3>
            <p>(55)12312-12312</p>
        </div>
        </div>


        <div className="info-card">
        <AiOutlineMail id="phone-icon"/>
        <div>
            <h3>E-mail</h3>
            <p>GUIGUI...</p>
        </div>
        </div>


        <div className="info-card">
        <AiFillEnvironment id="phone-icon"/>
        <div>
            <h3>Localizacao</h3>
            <p>Minas</p>
        </div>
        </div>

    </section>
  )
}

export default InformationContainer