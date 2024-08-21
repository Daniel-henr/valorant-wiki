import '../styles/rank.css'
import Carousel from './carousel'
import fadeBored from '../assets/stickers/fade_bored.png'
import JettDoubt from '../assets/stickers/jett--.png'
import Winginho from '../assets/stickers/winginho.png'
import penguim from '../assets/stickers/penguim.png'

function Rank() {
    return (
        <div className="rank-content">
            <div className="text-rank">
                <div className="text-rank-content ">
                <h1 className='hidden slide-on'>Ranks</h1>
                <p className='hidden slide-on'>No VALORANT, os ranks, também conhecidos como elos ou patentes, são fundamentais para medir a habilidade dos jogadores. Este sistema motiva muitos a se aprimorarem constantemente.</p>
                </div>
                <img src={Winginho} className='hidden scale-in-center' alt="Wiginho" />
            </div>
            <div className="description-content">
                <div className="right">
                    <img src={fadeBored} className='hidden scale-in-center' alt="FadeBored" />
                    <img src={JettDoubt} className='hidden scale-in-center' alt="JettDoubt" />
                    <div className="right-content">
                        <h3 className='hidden slide-in'>Estrutura de Ranks</h3>
                        <p className='hidden slide-in'>Os ranks vão de Ferro a Radiante, cada um subdividido em três níveis, exceto Radiante, que é o topo absoluto. Cada rank representa um degrau na jornada de um jogador, refletindo seu crescimento e evolução no jogo.</p>
                        <h3 className='hidden slide-in'>Funcionamento do Sistema</h3>
                        <p className='hidden slide-in'>O sistema de classificação é baseado em pontos, conhecidos como MMR (Matchmaking Rating). Ao vencer partidas, você ganha pontos, e ao perder, você os perde. Mas não é só isso: o desempenho individual também é crucial. Jogar bem, mesmo em derrotas, pode reduzir a perda de pontos.</p>
                    </div>
                </div>
                <div className="left">
                    <div className="left-content">
                        <h3 className='hidden slide-on'>Subindo de Rank</h3>
                        <p className='hidden slide-on'>Para subir de rank, é necessário acumular vitórias consistentes e exibir habilidades excepcionais. Além de ganhar partidas, contribuir efetivamente para sua equipe aumenta suas chances de subir mais rápido.</p>
                        <h3 className='hidden slide-on'>Motivação e Estratégia</h3>
                        <p className='hidden slide-on'>Os ranks incentivam a estratégia e a cooperação. Jogadores são encorajados a se comunicarem bem, conhecerem os mapas e se adaptarem às situações em tempo real.</p>
                    </div>
                    <img src={penguim} className='hidden scale-in-center' alt="penguim" />
                </div>
            </div>
            <Carousel />
        </div>
    )
}

export default Rank