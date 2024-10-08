import '../styles/banner.css'
import valorant from '../assets/valo-img.webp'

function Banner() {
    return (
        <article className="banner-content">
            <div className="banner-text">
                <h1 className='hidden tracking-in-expand'>5x5 tático</h1>
            </div>
            <div className="logo-img hidden slide-on">
                <img src={valorant} />
            </div>
            <div className="animation-btn hidden slide-in-blurred-bottom">
                <a href="https://valorantesports.com/pt-BR/schedule?leagues=champions" target='_blank'>Cronograma</a>
            </div>
        </article>
    )
}

export default Banner