import {Component} from 'react'
import './index.css'
import TeamCard from '../TeamCard'

class Home extends Component {
  state = {teamcards: []}

  componentDidMount() {
    this.getTeamList()
  }

  getTeamList = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const formatedData = data.teams.map(eachdata => ({
      id: eachdata.id,
      name: eachdata.name,
      teamUrl: eachdata.team_image_url,
    }))
    this.setState({teamcards: formatedData})
  }

  render() {
    const {teamcards} = this.state
    return (
      <div className="container">
        <div className="ipl">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="logo"
          />
          <h1 className="head">IPL Dashboard</h1>
        </div>
        <ul className="unorder">
          {teamcards.map(eachcard => (
            <TeamCard teamlist={eachcard} key={eachcard.id} />
          ))}
        </ul>
      </div>
    )
  }
}
export default Home
