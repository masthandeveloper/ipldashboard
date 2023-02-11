import {Component} from 'react'
import './index.css'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

const teamMatchesApiUrl = 'https://apis.ccbp.in/ipl/'

class TeamMatches extends Component {
  state = {latestmatch: {}}

  componentDidMount() {
    this.getMatches()
  }

  getFormattedData = data => ({
    umpires: data.umpires,
    result: data.result,
    manOfTheMatch: data.man_of_the_match,
    id: data.id,
    date: data.date,
    venue: data.venue,
    competingTeam: data.competing_team,
    competingTeamLogo: data.competing_team_logo,
    firstInnings: data.first_innings,
    secondInnings: data.second_innings,
    matchStatus: data.match_status,
  })

  getMatches = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`${teamMatchesApiUrl}${id}`)
    const data = await response.json()
    const formatedData = {
      teamBannerUrl: data.team_banner_url,
      latestMatch: this.getFormattedData(data.latest_match_details),
      recentMatch: data.recent_matches.map(eachdata =>
        this.getFormattedData(eachdata),
      ),
    }
    this.setState({latestmatch: formatedData})
  }

  getRecentMatch = () => {
    const {latestmatch} = this.state
    const {recentMatch} = latestmatch
    return (
      <ul className="unorderlist">
        {recentMatch.map(eachmatch => (
          <MatchCard key={eachmatch.id} matchcard={eachmatch} />
        ))}
      </ul>
    )
  }

  render() {
    const {latestmatch} = this.state
    const {teamBannerUrl, latestMatch} = latestmatch
    return (
      <div className="containermatches">
        <img src={teamBannerUrl} alt="team banner" className="team banner" />
        <LatestMatch latestlist={latestMatch} />
        {this.getRecentMatch()}
      </div>
    )
  }
}
export default TeamMatches
