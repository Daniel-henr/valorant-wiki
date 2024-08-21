import '../styles/agent.css'
import Card from './card'
import images from '../js/images'
import duelistLogo from '../assets/agents/duelista/DuelistClassSymbol.png'
import intiatorLogo from '../assets/agents/iniciador/initiatorLogo.png'
import controllerLogo from '../assets/agents/controlador/controller_logo.png'
import sentinelLogo from '../assets/agents/sentinela/sentinel_logo.png'


function Agent() {
    return (
        <div className="agent-content">
            <div className="text-agents-content ">
                <h1 className='hidden tracking-in-contract'>Agents</h1>
            </div>
            <article className="agents-content">
                <div className="duelist">
                    <div className="text-duelist">
                        <h1 className='hidden tracking-in-contract'>Duelista</h1>
                        <p className='details-function hidden text-focus-in'>O Duelista tem como objetivo entrar em confrontos diretos e eliminar oponentes rapidamente. Suas habilidades são projetadas para aumentar sua capacidade de combate, permitindo aberturas no time adversário e criar espaço para sua equipe avançar.</p>
                    </div>
                    <div className="cards hidden text-focus-in">
                        {['jett', 'phoenix', 'raze', 'reyna', 'yoru', 'neon', 'iso'].map(agent => (
                            <Card
                                key={agent}
                                imageSrc={images[agent]}
                                character={`${agent}-character`}
                                name={agent}
                                frontSideClass={`${agent}-frontSide`}
                                frontContentClass={`${agent}-front-content`}
                                imgClass={duelistLogo}
                            />
                        ))}

                    </div>
                </div>
                <div className="iniatior">
                    <div className="text-initiator">
                        <h1>Iniciador</h1>
                        <p className='details-function'>O Iniciador busca desestabilizar o time inimigo, fornecendo informações e desorientando adversários. Suas habilidades ajudam a iniciar ataques ou defender posições ao revelar inimigos ou criar brechas para a equipe avançar.</p>
                    </div>
                    <div className="cards hidden text-focus-in">
                        {['breach', 'sova', 'skye', 'kayo', 'fade', 'gekko'].map((agent, index) => (
                            <Card
                                key={agent}
                                imageSrc={images[agent]}
                                character={`${agent}-character`}
                                name={agent}
                                frontSideClass={`${agent}-frontSide`}
                                frontContentClass={`${agent}-front-content`}
                                imgClass={intiatorLogo}
                                animationDelay={`${index * 0.2}s`}
                            />
                        ))}

                    </div>
                </div>
                <div className="controller">
                    <div className="text-controller">
                        <h1>Controlador</h1>
                        <p className='details-function'>O Controlador tem como objetivo obstruir e travar o avanço dos oponentes. Suas habilidades giram em torno de smokes (fumaças) e paredes, capazes de ocultar o campo de visão para eventuais desarmes às escuras ou até mesmo criar emboscadas.</p>
                    </div>
                    <div className="cards hidden text-focus-in">
                        {['omen', 'brim', 'viper', 'astra', 'harbor', 'clove'].map(agent => (
                            <Card
                                key={agent}
                                imageSrc={images[agent]}
                                name={agent}
                                character={`${agent}-character`}
                                frontSideClass={`${agent}-frontSide`}
                                frontContentClass={`${agent}-front-content`}
                                imgClass={controllerLogo}
                            />
                        ))}
                    </div>
                </div>

                <div className="sentinel hidden text-focus-in">
                    <div className="text-sentinel">
                        <h1>Sentinela</h1>
                        <p className='details-function'>O Sentinela foca na defesa e controle de áreas específicas. Suas habilidades ajudam a proteger flancos, retardar avanços inimigos e fornecer suporte à equipe com curas ou informações sobre a posição dos adversários.</p>
                    </div>
                    <div className="cards">
                        {['sage', 'cypher', 'killjoy', 'chamber', 'deadlock'].map(agent => (
                            <Card
                                key={agent}
                                imageSrc={images[agent]}
                                name={agent}
                                character={`${agent}-character`}
                                frontSideClass={`${agent}-frontSide`}
                                frontContentClass={`${agent}-front-content`}
                                imgClass={sentinelLogo}
                            />
                        ))}
                    </div>
                </div>

            </article>

        </div>
    )
}

export default Agent