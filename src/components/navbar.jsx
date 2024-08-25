import '../styles/navbar.css'
import icon from '../assets/icons8-valorant.svg'
import { animateNavbar } from '../js/nav-animation'
import { useEffect, useRef } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

function Navbar() {
    const navRef = useRef();
    const btnRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("Responsive_nav");
        btnRef.current.classList.toggle("hide-btn")
    }

    useEffect(() => {
        animateNavbar();
    },
        [])

    return (
        <nav ref={navRef} className="navbar-content" >
            <a href="#banner">
                <div className="logo slide-in-left">
                    <img src={icon} alt="Valorant Logo" />
                </div>
            </a>
            <button className='nav-btn nav-close-btn' onClick={showNavbar}>
                <FaTimes className='icon-btn' />
            </button>
            <ul className=' nav-content slide-in-top'>
                <li className='link-style'><a href="#about">Sobre o jogo</a></li>
                <li className='link-style'><a href="#agent">Agentes</a></li>
                <li className='link-style'><a href="#rank">Ranks</a></li>
                <li className='link-style'><a href="#competitive">Competitivo</a>        </li>
            </ul>

            <div className="btn-agenda slide-in-right">
                <a href="https://github.com/Daniel-henr/valorant-wiki.git" target='_blank'><button>Repositório</button></a>
            </div>

            <button ref={btnRef} className='nav-btn' onClick={showNavbar}>
                <FaBars className='icon-btn' />
            </button>

            
        </nav>

    )
}

export default Navbar;