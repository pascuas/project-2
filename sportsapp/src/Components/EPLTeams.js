import React from 'react'
import {Link} from 'react-router-dom'

function EPLTeams(props) {
    
    if (!props.eplTeams) {
       return <></>
    };

    const teams = props.eplTeams.map((team, index) => {
        return (
            <Link to={`/EPLTeams/${team.strTeam}`}>
                <img src={team.strTeamBadge} alt={team.strTeam} />
                <h4>{team.strTeam}</h4>
            </Link>
        )
    })

    return (
        <div className='teamsContainer'>
            {teams}
        </div>
    )
}
export default EPLTeams