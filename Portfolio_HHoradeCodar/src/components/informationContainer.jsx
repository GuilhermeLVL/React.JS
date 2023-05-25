import {AiFillPhone, AiOutlineMail, AiFillEnvironment } from "react-icons/ai"
import '../Styles/components/informationContainer.sass'

import React from 'react'

const informationContainer = () => {
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
        <AiFillPhone id="phone-icon"/>
        <div>
            <h3>Telefone</h3>
            <p>(55)12312-12312</p>
        </div>
        </div>


        <div className="info-card">
        <AiFillPhone id="phone-icon"/>
        <div>
            <h3>Telefone</h3>
            <p>(55)12312-12312</p>
        </div>
        </div>
    </section>
  )
}

export default informationContainer