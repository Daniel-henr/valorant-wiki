import '../styles/timeline.css'
import acendChamps from '../assets/competitive/valorant_champions_winners/Acend_champs.jpg'
import loudChamps from '../assets/competitive/valorant_champions_winners/loud_champs.webp'
import evilChamps from '../assets/competitive/valorant_champions_winners/evil_champs.jpg'

function Timeline() {
    return (
        <>
            <div className="timeline">
                <div className="timeline-content Acend-champs">
                    <h2>2021</h2>
                    <img src={acendChamps} alt="" srcset="" />
                </div>
                <div className="timeline-content Loud-champs">
                    <h2>2022</h2>
                    <img src={loudChamps} alt="" srcset="" />
                </div>
                <div className="timeline-content Evil-champs">
                    <h2>2023</h2>
                    <img src={evilChamps} alt="" srcset="" />
                </div>
            </div>


        </>
    )
}

export default Timeline