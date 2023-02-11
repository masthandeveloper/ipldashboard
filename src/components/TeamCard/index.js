import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {teamlist} = props
  const {id, name, teamUrl} = teamlist
  return (
    <li className="listitems">
      <Link to={`/team-matches/${id}`} className="singlecard">
        <img src={teamUrl} alt={name} className="image" />
        <p className="teamname">{name}</p>
      </Link>
    </li>
  )
}
export default TeamCard
