import {Component} from 'react'
import Loader from 'react-loader-spinner'

import Teamcard from '../TeamCard'

import './index.css'

const teamsApiUrl = 'https://apis.ccbp.in/ipl'

class Home extends Component {
  state = {
    isLoading: true,
    teamsData: [],
  }

  componentDidMount() {
    this.getTeams()
    console.log('componentDidMount')
  }

  getTeams = async () => {
    const response = await fetch(teamsApiUrl)
    const fetchedData = await response.json()

    const updatedData = fetchedData.teams.map(eachteam => ({
      name: eachteam.name,
      id: eachteam.id,
      teamImageUrl: eachteam.team_image_url,
    }))

    this.setState({
      teamsData: updatedData,
      isLoading: false,
    })
  }

  renderTeamsList = () => {
    const {teamsData} = this.state

    return (
      <ul className="teams-list">
        {teamsData.map(team => (
          <Teamcard key={team.id} teamDetails={team} />
        ))}
      </ul>
    )
  }

  renderLoader = () => (
    <div testid="loader" className="loader-container">
      <Loader type="Oval" color="#ffffff" height={50} />
    </div>
  )

  render() {
    const {isLoading} = this.state

    return (
      <div className="home-route-container">
        <div className="teams-list-container">
          <div className="ipl-dashboard-heading-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
              alt="ipl logo"
              className="ipl-logo"
            />
            <h1 className="ipl-dashboard-heading">IPL Dashboard</h1>
          </div>
          {isLoading ? this.renderLoader() : this.renderTeamsList()}
        </div>
      </div>
    )
  }
}
export default Home
