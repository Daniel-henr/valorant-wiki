import '../styles/card.css'


function Card({ imageSrc, character, name, frontSideClass, frontContentClass}) {
  
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
                    <div className="back-content">
                        test-more
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card