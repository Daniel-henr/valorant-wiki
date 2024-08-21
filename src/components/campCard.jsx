import '../styles/campCard.css'




function CampCard({leagueLogo, teams, leagueLogoStyle, teamLogoStyle}) {

  return (
    <div className='hidden scale-in-center'>
      <div className="americasCard">
        <div className="card-original">
          <div className="league-logo">
            <img src={leagueLogo} alt='' style={leagueLogoStyle}/>
          </div>
          <div className="gallery-item">
            <div className="teams">
              {teams.map((team, index) => (
                <img key={index} src={team.src} style={teamLogoStyle} alt="" />
              ))}
            </div>
          </div>
        </div>
      </div>

    </div>

  )
}

export default CampCard