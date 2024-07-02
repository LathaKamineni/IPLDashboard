// Write your code here
import './index.css'
const MatchCard = props => {
  const {eachMatch} = props
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
  } = eachMatch
  const winOrLossText = matchStatus === 'Won' ? 'win' : 'lose'
  return (
    <li className="match-card-container">
      <img
        src={competingTeamLogo}
        className="team-logo"
        alt={`competing team ${competingTeam}`}
      />
      <p className="competing-team-name">{competingTeam}</p>
      <p className="result">{result}</p>
      <p className={`match-status ${winOrLossText}`}>{matchStatus}</p>
    </li>
  )
}
export default MatchCard
