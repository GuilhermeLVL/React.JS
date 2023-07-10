import React, { useState } from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';

function Header() {

const [showMenu, setShowMenu] = useState(false)
const toggleMenu = () => {

    setShowMenu(!showMenu)

} 
    return(
    <header className={styles.header}>

        <Link to="/">
            <span>GuilhermePinheiro.Dev</span>
        </Link>
        <nav onClick={toggleMenu }className={`${showMenu ? styles.show : '' }` }>
            <Link to="/">Home</Link>
            <Link to="/Sobre">Sobre</Link>
            <Link to="/Projetos">Projetos</Link>
            <Link to="/Contatos">Contato</Link>
            
        </nav>

        <div className={styles.menuButton}
        onClick={toggleMenu}
        >

            <span  className={styles.linha}></span>
            <span  className={styles.linha}></span>
            <span  className={styles.linha}></span>
            
        </div>

    </header>
    )
}

export default Header