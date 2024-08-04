import '../styles/banner.css'
import valorant from '../assets/valo-img.webp'

function Banner() {
    return (
        <article className="banner-content">
            <div className="banner-text hidden">
                <h1>venha mostrar seu valor</h1>
            </div>
            <div className="logo-img hidden">
                <img src={valorant} />
            </div>
            <div className="animation-btn hidden">
                <a href="https://valorantesports.com/pt-BR/schedule?leagues=champions" target='_blank'>Cronograma</a>
            </div>
        </article>
    )
}

export default Banner