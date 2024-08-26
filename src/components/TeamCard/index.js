import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {teamDetails} = props
  const {id, name, teamImageUrl} = teamDetails

  return (
    <li className="team-item">
      <Link className="link" to={`/team-matches/${id}`}>
        <img src={teamImageUrl} className="team-logo" alt={name} />
        <p className="team-name">{name}</p>
      </Link>
    </li>
  )
}

export default TeamCard
