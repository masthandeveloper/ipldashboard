import './index.css'

const LatestMatch = props => {
  const {latestlist} = props
  const {
    competingTeam,
    date,
    venue,
    result,
    competingTeamLogo,
    firstInnings,
    secondInnings,
    manOfTheMatch,
    umpires,
  } = latestlist

  return (
    <div className="totalcontainer">
      <h1 className="head">Latest Matches</h1>
      <div className="cardcontainer">
        <div className="section1">
          <div className="content">
            <p className="name">{competingTeam}</p>
            <p className="date">{date}</p>
            <p className="venue">{venue}</p>
            <p className="result">{result}</p>
          </div>
          <img
            src={competingTeamLogo}
            alt={`latest match${competingTeam}`}
            className="logo"
          />
        </div>
        <hr className="line" />
        <div className="section2">
          <p className="para">First Innings</p>
          <p className="para">{firstInnings}</p>
          <p className="para">Second Innings</p>
          <p className="para">{secondInnings}</p>
          <p className="para">Man Of The Match</p>
          <p className="para">{manOfTheMatch}</p>
          <p className="para">Umpires</p>
          <p className="para">{umpires}</p>
        </div>
      </div>
    </div>
  )
}
export default LatestMatch
