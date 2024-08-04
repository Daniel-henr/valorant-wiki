import '../styles/navbar.css'
import icon from '../assets/icons8-valorant.svg'
import { animateNavbar } from '../js/nav-animation'
import { useEffect } from 'react'

function Navbar() {
    useEffect(() => {
        animateNavbar();
    }, [])

    return (
        <div className="navbar-content">
            <a href="#banner">
                <div className="logo">
                    <img src={icon} alt="Valorant Logo" />
                </div>
            </a>
            <nav className="nav-content">
                <ul>
                    <li className='link-style'>
                        <a href="#about">Sobre o jogo</a>
                    </li>
                    <li className='link-style'>
                        <a href="#agent">Agentes</a>
                    </li>
                    <li className='link-style'>
                        <a href="#rank">Ranks</a>
                    </li>
                    <li className='link-style'>
                        <a href="#competitive">Competitivo</a>
                    </li>
                </ul>
            </nav>
            <div className="btn-agenda">
                <a href="https://github.com/Daniel-henr/valorant-wiki.git" target='_blank'><button>Repositório</button></a>
            </div>
        </div>

    )
}

export default Navbar;