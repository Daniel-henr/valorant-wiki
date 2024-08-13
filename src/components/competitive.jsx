import '../styles/competitive.css'
import CampCard from './campCard'
import vctAmerica from '../assets/Leagues/vct_americas.png'
import vctChina from '../assets/Leagues/vct_china.png'
import vctEmea from '../assets/Leagues/vct_emea.png'
import vctPacific from '../assets/Leagues/vct_pacific.png'
import mastersLogo from '../assets/competitive/masters_logo.webp'
import mastersWinners from '../assets/competitive/masters_champions.webp'
import challengersLogo from '../assets/competitive/challengers_logo.png'
import challengersWinners from '../assets/competitive/challengers_champions.jpg'
import valorantChampsLogo from '../assets/competitive/valorant_champions_logo.png'
import valorantChampsTrophy from '../assets/competitive/valorant_champions_trophy.webp'
import Timeline from './timeline'
import { americasTeams, chinaTeams, emeaTeams, pacificTeams } from '../js/teams'


function Competitive() {
    return (
        <div className="competitive-content">
            <div className="text-section">
                <h1>Competitivo</h1>
                <p>O competitivo profissional de Valorant é uma parte vibrante e emocionante do mundo dos jogos. Ele oferece um palco para habilidades incríveis, promove inovação no jogo e proporciona entretenimento para milhões de fãs ao redor do mundo. Se você gosta de jogos de tiro táticos e aprecia a estratégia e a coordenação de equipes, assistir ou até mesmo participar do competitivo de Valorant pode ser uma experiência incrível.</p>
                <p>Valorant possui uma estrutura de campeonatos bem organizada, que permite que equipes de todo o mundo compitam em diferentes níveis. Vamos entender um pouco mais sobre cada um desses campeonatos: Challengers, VCTs, Masters e Valorant Champions.</p>
            </div>
            <article className="camps-content">
                <div className="challengers">
                <div style={{display:'flex', flexDirection:'column', justifyContent: 'center', alignItems:'center', width:'45%', marginLeft:'15%'}}>
                        <img src={challengersLogo} style={{width:85, height:'auto', filter: 'drop-shadow(0px 0px 1px #000000)'}} />
                        <img src={challengersWinners} alt="" />
                    </div>
                    <div className="challengers-content">
                        <h1>VALORANT Challengers: A Porta de Entrada para o Topo</h1>
                        <p>O VALORANT Challengers é considerado o penúltimo passo antes da entrada nas ligas internacionais. Ele funciona como o circuito de competições "Tier 2" de Valorant, oferecendo uma plataforma para equipes emergentes se destacarem e subirem na hierarquia competitiva.</p>
                        <div className='line-p'></div>
                        <p style={{ fontWeight: 400, color: '#fefef4', marginLeft: '6dvh' }}><span style={{ fontWeight: 600 }}>Divisão Local:</span> O Challengers é dividido em pelo menos 25 ligas locais, abrangendo várias regiões ao redor do mundo.</p>
                        <p style={{ fontWeight: 400, color: '#fefef4', marginLeft: '6dvh' }}><span style={{ fontWeight: 600 }}>Importância:</span> O Challengers permite que novas equipes mostrem seu talento e se qualifiquem para competições de maior prestígio, oferecendo um caminho claro para o topo.</p>
                    </div>
                </div>
                <div className="vcts">
                    <div className="vcts-content">
                        <h1>Valorant Champions Tour (VCT): A Série Global</h1>
                        <p>O Valorant Champions Tour (VCT) é a série principal de torneios de eSports para Valorant, organizada pela Riot Games. Esta série global realiza diversos eventos ao longo da temporada, culminando em um dos maiores e mais importantes torneios do ano.</p>
                        <div className='line-p' style={{ height: '124px' }}></div>
                        <p style={{ fontWeight: 400, color: '#fefef4', marginLeft: '6dvh' }}><span style={{ fontWeight: 600 }}>Formato Global:</span> O VCT inclui eventos em várias regiões, permitindo que equipes de todo o mundo participem.</p>
                        <p style={{ fontWeight: 400, color: '#fefef4', marginLeft: '6dvh' }}><span style={{ fontWeight: 600 }}>Objetivo:</span> Proporcionar uma plataforma global onde as melhores equipes possam competir entre si, acumulando pontos e experiência ao longo da temporada.</p>
                        <p style={{ fontWeight: 400, color: '#fefef4', marginLeft: '6dvh' }}><span style={{ fontWeight: 600 }}>Culminação:</span> A série culmina no evento Valorant Champions, onde as melhores equipes do mundo competem pelo título de campeão.</p>
                    </div>
                    <div>
                        <div className="vct-america">
                            <div style={{ width: '65%', marginRight: '5dvh', marginTop: '4dvh' }}>
                                <h3>Valorant Champions Tour: América</h3>
                                <p>O Valorant Champions Tour (VCT) Americas é uma parte integral do circuito global de competições de Valorant, organizado pela Riot Games. Essa liga específica abrange as regiões da América do Norte, América Latina e Brasil, proporcionando uma plataforma de alto nível para que as equipes dessas áreas se destaquem no cenário competitivo global.</p>
                            </div>
                            <CampCard leagueLogo={vctAmerica} teams={americasTeams} />
                        </div>
                        <div className="vct-china">
                            <CampCard leagueLogo={vctChina} teams={chinaTeams} leagueLogoStyle={{ width: '28px', height: 'auto', marginLeft: '0px' }} />
                            <div style={{ width: '70%', marginLeft: '6dvh', marginTop: '4dvh' }}>
                                <h3>Valorant Champions Tour: China</h3>
                                <p>O Valorant Champions Tour (VCT) China é uma parte importante do circuito global de competições de Valorant, destacando o crescimento e a popularidade do jogo na região asiática. Embora a China tenha entrado no circuito competitivo de Valorant um pouco mais tarde que outras regiões, ela rapidamente se tornou um campo de intensa competição com várias equipes de destaque.</p>
                            </div>
                        </div>
                        <div className="vct-emea">
                            <div style={{ width: '65%', marginRight: '5dvh', marginTop: '4dvh' }}>
                                <h3>Valorant Champions Tour: EMEA</h3>
                                <p>O Valorant Champions Tour (VCT) EMEA é uma das regiões mais competitivas e emocionantes no circuito global de Valorant. EMEA (Europa, Oriente Médio e África) abrange uma vasta área geográfica, incluindo algumas das nações mais influentes no cenário dos eSports. A região é conhecida por seu alto nível de jogo, talento emergente e organizações renomadas.</p>
                            </div>
                            <CampCard leagueLogo={vctEmea} teams={emeaTeams} leagueLogoStyle={{ width: '34px', height: 'auto', marginLeft: '0px' }} teamLogoStyle={{ width: '24px', height: 'auto', marginLeft: '2dvh' }} />
                        </div>
                        <div className="vct-pacific">
                            <CampCard leagueLogo={vctPacific} teams={pacificTeams} leagueLogoStyle={{ width: '55px', height: 'auto', marginLeft: '0px' }} />
                            <div style={{ width: '70%', marginLeft: '6dvh', marginTop: '4dvh' }}>
                                <h3>Valorant Champions Tour: Pacific</h3>
                                <p>O Valorant Champions Tour (VCT) Pacific é uma das regiões mais vibrantes e competitivas no circuito global de Valorant, abrangendo uma vasta área que inclui países da Ásia e Oceania. A região Pacific é conhecida por sua diversidade cultural, estilos de jogo únicos e talentos emergentes que constantemente elevam o nível de competição.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="masters">
                    <div style={{display:'flex', flexDirection:'column', justifyContent: 'center', alignItems:'center', width:'45%', marginLeft:'15%'}}>
                        <img src={mastersLogo} style={{width:85, height:'auto', filter: 'drop-shadow(0px 0px 1px #000000)'}} />
                        <img src={mastersWinners} alt="" />
                    </div>
                    <div className="masters-content">
                        <h1>Masters: Os Destaques da Temporada</h1>
                        <p>Parte integral do VCT, o Masters é um dos principais campeonatos de Valorant. Ele ocorre duas vezes por ano e reúne as equipes que mais se destacaram no início da temporada.</p>
                        <div className='line-p' style={{ height: 142 }}></div>
                        <p style={{ fontWeight: 400, color: '#fefef4', marginLeft: '6dvh' }}><span style={{ fontWeight: 600 }}>Torneios Internacionais:</span> O Masters atrai as melhores equipes de várias regiões, oferecendo uma competição de alto nível.</p>
                        <p style={{ fontWeight: 400, color: '#fefef4', marginLeft: '6dvh' }}><span style={{ fontWeight: 600 }}>Objetivo:</span> As equipes competem por pontos de circuito e prêmios em dinheiro, além de garantir uma posição forte para o Valorant Champions.</p>
                        <p style={{ fontWeight: 400, color: '#fefef4', marginLeft: '6dvh' }}><span style={{ fontWeight: 600 }}>Importância:</span> Este campeonato é crucial para determinar as forças dominantes da temporada e prever quais equipes têm potencial para se destacar no final do ano.</p>
                    </div>
                </div>
                <div className="valoChamps">
                    <div className="valoChamps-content">
                        <h1>Valorant Champions: O Pináculo da Competição</h1>
                        <p>O Valorant Champions é o principal e mais prestigiado campeonato do cenário competitivo oficial de Valorant. Realizado uma vez por ano, este evento reúne as melhores equipes de todo o mundo para competir pelo título supremo.</p>
                        <div className='line-p' style={{ height: 108 }}></div>
                        <p style={{ fontWeight: 400, color: '#fefef4', marginLeft: '6dvh', width: '90%' }}><span style={{ fontWeight: 600 }}>Evento Anual:</span> O Valorant Champions ocorre uma vez por ano e marca o encerramento da temporada competitiva.</p>
                        <p style={{ fontWeight: 400, color: '#fefef4', marginLeft: '6dvh' }}><span style={{ fontWeight: 600 }}>Objetivo:</span> Determinar a melhor equipe de Valorant do mundo. Vencer o Valorant Champions significa alcançar o mais alto reconhecimento no cenário de eSports de Valorant.</p>
                        <p style={{ fontWeight: 400, color: '#fefef4', marginLeft: '6dvh' }}><span style={{ fontWeight: 600 }}>Importância:</span> Este campeonato é o auge do competitivo de Valorant, onde apenas as melhores e mais preparadas equipes conseguem chegar e competir pelo título.</p>
                    </div>
                    <div style={{display:'flex', flexDirection:'column', justifyContent: 'center', alignItems:'center', width:'45%'}}>
                        <img src={valorantChampsLogo} style={{width:85, height:'auto', filter: 'drop-shadow(0px 0px 1px #000000)'}} />
                        <img src={valorantChampsTrophy} alt="" />
                    </div>
                </div>
                <div className="timeline-champs">
                    <h1>Galeria Champions</h1>
                    <Timeline />
                </div>
            </article>
        </div>


    )
}

export default Competitive