// Write your code here
import './index.css'
const LatestMatch = props => {
  const {latestMatchDetails} = props
  const {
    umpires,
    result,
    manOfTheMatch,
    id,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
    matchStatus,
  } = latestMatchDetails
  console.log(date)
  return (
    <div className="latest-match-container">
      <div className="team-name-logo-container">
        <div>
          <p className="competing-team-name">{competingTeam}</p>
          <p className="competing-team-name">{date}</p>
          <p className="venue">{venue}</p>
          <p className="result">{result}</p>
        </div>
        <img
          src={competingTeamLogo}
          className="competing-team-logo"
          alt={`latest match ${competingTeam}`}
        />
      </div>
      <div>
        <p className="first-innings">First Innings</p>
        <p className="first-inning-team-name">{firstInnings}</p>
        <p className="first-innings">Second Innings</p>
        <p className="first-inning-team-name">{secondInnings}</p>
        <p className="first-innings">Man Of The Mathc</p>
        <p className="first-inning-team-name">{manOfTheMatch}</p>
        <p className="first-innings">Umpires</p>
        <p className="first-inning-team-name">{umpires}</p>
      </div>
    </div>
  )
}
export default LatestMatch
