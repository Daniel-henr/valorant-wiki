import '../styles/footer.css'
import ValoLogo from '../assets/icon-valorant.png'
import valoName from '../assets/valo-img.webp'
import copyright from '../assets/footer/copyright.png'
import git from '../assets/footer/icons-github.svg'
import linkedin from '../assets/footer/icons-linkedin-logo.svg'

function Footer() {
    return (
        <div className="footer-container">
            <div className="footer-content">
                <div className="footer-up">
                    <div className="footer-imgs">
                        <img src={ValoLogo} alt="" />
                        <img src={valoName} alt="" srcset="" />
                    </div>
                    <div className="footer-description">
                        <p>Este wiki foi criado com o objetivo de apresentar uma visão geral do mundo de Valorant, abrangendo desde as funções, agentes e ranks até o competitivo. Seu propósito é demonstrar meu trabalho e paixão pelo jogo, fornecendo informações valiosas para jogadores novos e veteranos</p>
                    </div>
                </div>
                <div className="footer-down">
                    <div className="copy">
                        <img src={copyright} alt="" />
                        <p> 2024 Daniel Henrique </p>
                    </div>
                    <div className="footer-links">
                        <a className='git-btn' href="https://github.com/Daniel-henr" target='_blank'>
                            <img src={git} alt="" />
                        </a>
                        <a className='linkedin-btn' href="https://www.linkedin.com/in/dahpp/" target='_blank'>
                            <img src={linkedin} alt="" />
                        </a>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Footer