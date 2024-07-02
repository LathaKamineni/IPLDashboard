// Write your code here
import './index.css'
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
class TeamMatches extends Component {
  state = {teamDetails: [], isLoading: true}
  componentDidMount() {
    this.getTeamDetails()
  }
  getTeamDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    console.log(data)
    const formattedTeamData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: {
        umpires: data.latest_match_details.umpires,
        result: data.latest_match_details.result,
        manOfTheMatch: data.latest_match_details.man_of_the_match,
        id: data.latest_match_details.id,
        date: data.latest_match_details.date,
        venue: data.latest_match_details.venue,
        competingTeam: data.latest_match_details.competing_team,
        competingTeamLogo: data.latest_match_details.competing_team_logo,
        firstInnings: data.latest_match_details.first_innings,
        secondInnings: data.latest_match_details.second_innings,
        matchStatus: data.latest_match_details.match_status,
      },
      recentMatches: data.recent_matches.map(eachMatch => ({
        umpires: eachMatch.umpires,
        result: eachMatch.result,
        manOfTheMatch: eachMatch.man_of_the_match,
        id: eachMatch.id,
        date: eachMatch.id,
        date: eachMatch.data,
        venue: eachMatch.venue,
        competingTeam: eachMatch.competing_team,
        competingTeamLogo: eachMatch.competing_team_logo,
        firstInnings: eachMatch.first_innings,
        secondInnings: eachMatch.second_innings,
        matchStatus: eachMatch.match_status,
      })),
    }
    this.setState({teamDetails: formattedTeamData, isLoading: false})
  }
  renderLoader = () => {
    return (
      <div testid="loader">
        <Loader type="Oval" height={50} width={50} color="#ffffff" />
      </div>
    )
  }
  renderTeamView = () => {
    const {teamDetails} = this.state
    const {teamBannerUrl, latestMatchDetails, recentMatches} = teamDetails

    return (
      <div className="team-banner-container">
        <img src={teamBannerUrl} alt="team banner" />
        <p className="latest-match-text">Latest Matches</p>
        {<LatestMatch latestMatchDetails={latestMatchDetails} />}
        <ul className="recent-matches-list-container">
          {recentMatches.map(eachMatch => (
            <MatchCard eachMatch={eachMatch} key={eachMatch.id} />
          ))}
        </ul>
      </div>
    )
  }
  render() {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const {isLoading, teamDetails} = this.state
    return (
      <div className={`match-container ${id.toLowerCase()}`}>
        {isLoading ? this.renderLoader() : this.renderTeamView()}
      </div>
    )
  }
}

export default TeamMatches
