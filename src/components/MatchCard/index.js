import './index.css'

const MatchCard = props => {
  const {matchcard} = props
  const {competingTeamLogo, competingTeam, matchStatus, result} = matchcard
  return (
    <li className="listcards">
      <div className="singlecard">
        <img
          src={competingTeamLogo}
          alt={`competing team${competingTeam}`}
          className="logo"
        />
        <p className="name">{competingTeam}</p>
        <p className="name">{result}</p>
        <p className="name">{matchStatus}</p>
      </div>
    </li>
  )
}
export default MatchCard
