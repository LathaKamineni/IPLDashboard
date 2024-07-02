// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import TeamCard from '../TeamCard'
import './index.css'
class Home extends Component {
  state = {iplTeamsList: [], isLoading: true}
  componentDidMount() {
    this.getIplTeamsData()
  }
  getIplTeamsData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const iplTeams = data.teams
    const formattedData = iplTeams.map(eachTeam => ({
      id: eachTeam.id,
      name: eachTeam.name,
      teamImageUrl: eachTeam.team_image_url,
    }))
    this.setState({iplTeamsList: formattedData, isLoading: false})
  }
  renderIplTeams = () => {
    const {iplTeamsList} = this.state
    return (
      <>
        <div className="ipl-logo-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="ipl-logo"
          />
          <h1 className="dashboard-heading">IPL Dashboard</h1>
        </div>
        <ul className="ipl-teams-list">
          {iplTeamsList.map(eachTeam => (
            <TeamCard eachTeam={eachTeam} key={eachTeam.id} />
          ))}
        </ul>
      </>
    )
  }
  renderLoader = () => {
    return (
      <div testid="loader">
        <Loader type="Oval" height={50} width={50} color="#ffffff" />
      </div>
    )
  }
  render() {
    const {iplTeamsList, isLoading} = this.state
    console.log(iplTeamsList)
    return (
      <div className="dashboard-container">
        {isLoading ? this.renderLoader() : this.renderIplTeams()}
      </div>
    )
  }
}

export default Home
