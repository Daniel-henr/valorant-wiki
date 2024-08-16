import '../styles/banner.css'
import valorant from '../assets/valo-img.webp'

function Banner() {
    return (
        <article className="banner-content">
            <div className="banner-text">
                <h1 className='hidden slide-in-blurred-right'>venha mostrar seu valor</h1>
            </div>
            <div className="logo-img hidden slide-on">
                <img src={valorant} />
            </div>
            <div className="animation-btn hidden slide-in-blurred-right">
                <a href="https://valorantesports.com/pt-BR/schedule?leagues=champions" target='_blank'>Cronograma</a>
            </div>
        </article>
    )
}

export default Banner