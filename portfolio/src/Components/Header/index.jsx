import React from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';

function Header() {

    return(
    <header className={styles.header}>

        <Link to="/">
            <span>GuilhermePinheiro.Dev</span>
        </Link>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/Sobre">Sobre</Link>
            <Link to="/Projetos">Projetos</Link>
            <Link to="/Contatos">Contato</Link>
            
        </nav>

        <div className={styles.menuButton}>

            <span  className={styles.linha}></span>
            <span  className={styles.linha}></span>
            <span  className={styles.linha}></span>
            
        </div>

    </header>
    )
}

export default Header