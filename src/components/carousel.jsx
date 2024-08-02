import Ranks from '../js/ranks'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import '../styles/carousel.css'
import { Navigation, Pagination } from 'swiper/modules'

function Carousel() {

    return (
        <>
            <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: false }}
            >
                <SwiperSlide>
                    <div className="ferro">
                        <h2>ferro</h2>
                        <img src={Ranks.ferro1} />
                        <img src={Ranks.ferro2} />
                        <img src={Ranks.ferro3} />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bronze">
                        <h2>bronze</h2>
                        <img src={Ranks.bronze1} />
                        <img src={Ranks.bronze2} />
                        <img src={Ranks.bronze3} />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="prata">
                        <h2>prata</h2>
                        <img src={Ranks.prata1} />
                        <img src={Ranks.prata2} />
                        <img src={Ranks.prata3} />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="ouro">
                        <h2>ouro</h2>
                        <img src={Ranks.ouro1} />
                        <img src={Ranks.ouro2} />
                        <img src={Ranks.ouro3} />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="platina">
                        <h2>platina</h2>
                        <img src={Ranks.platina1} />
                        <img src={Ranks.platina2} />
                        <img src={Ranks.platina3} />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="diamante">
                        <h2>diamante</h2>
                        <img src={Ranks.diamante1} />
                        <img src={Ranks.diamante2} />
                        <img src={Ranks.diamante3} />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="ascendente">
                        <h2>ascendente</h2>
                        <img src={Ranks.ascendente1} />
                        <img src={Ranks.ascendente2} />
                        <img src={Ranks.ascendente3} />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="imortal">
                        <h2>imortal</h2>
                        <img src={Ranks.imortal1} />
                        <img src={Ranks.imortal2} />
                        <img src={Ranks.imortal3} />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="radiante">
                        <h2>radiante</h2>
                        <img src={Ranks.radiante} />
                    </div>
                </SwiperSlide>

            </Swiper>
            
            
        </>
    )
}

export default Carousel