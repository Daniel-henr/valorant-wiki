import '../styles/card.css'

function Card({ imageSrc, character, name, frontSideClass, frontContentClass, imgClass}) {
  
    return (
        <div className='card'>
            <div className="content-card">
                <div className={`front-side ${frontSideClass}`}>
                    <div className={`front-content ${frontContentClass}`}>
                        <img className={`character ${character}`} src={imageSrc} />
                        <p>{name}</p>
                    </div>
                </div>
                <div className="back-side">
                    <div className="function-logo">
                        <img src={imgClass} alt=""  />
                    </div>
                   <div className="repeat-name">
                    <span className='principal-name'>valorant</span>
                    <span>valorant</span>
                    <span>valorant</span>
                    <span>valorant</span>
                    <span>valorant</span>
                    <span>valorant</span>
                    <span>valorant</span>
                    <span>valorant</span>
                    <span>valorant</span>
                    <span>valorant</span>
                   </div>
                </div>
            </div>
        </div>
    )
}

export default Card