import '../styles/about.css'
import jett from '../assets/Jett.webp'

function About() {
    return (
        <div className="about-content">
            <div className="text-about-content">
                <h1 className='hidden tracking-in-contract'>Sobre o Jogo</h1>
            </div>
            <article className="contents">
                <div className="about-img">
                    <div className="background-img hidden slide-on"></div>
                    <div className="img float ">
                        <img src={jett} className='hidden slide-on' />
                    </div>
                </div>
                <div className="about-text">
                    <p className='hidden slide-in'>Valorant é um jogo de tiro tático em primeira pessoa desenvolvido e publicado pela Riot Games. Lançado em junho de 2020, o jogo é gratuito e combina elementos de jogos de tiro clássicos com habilidades únicas de personagens, conhecidos como "Agentes".</p>

                    <p className='hidden slide-in'>Valorant se aproveita de um tipo de jogo que está em alta no momento. Trata-se de um FPS tático em que cinco jogadores batalham contra outros cinco visando plantar ou desarmar a chamada Spike. Cada player tem apenas uma única vida por rodada (em um total de 25) e a equipe que ganhar 13 rodadas primeiro se consagra como a vencedora.</p>

                    <p className='hidden slide-in'>
                        Em cada uma das partidas, um dos times vai defender e o outro atacar. A equipe responsável pelo ataque precisa escoltar a bomba para que ela seja detonada em um dos três pontos do mapa — A, B ou C. A partida é encerrada quando todos os integrantes de um time são derrotados, quando a bomba explode com sucesso ou quando o time atacante não cumpre seu objetivo no tempo determinado.
                    </p>
                </div>
            </article>
        </div>
    )
}

export default About