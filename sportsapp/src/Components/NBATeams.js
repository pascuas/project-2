import React from 'react'
import {Link} from 'react-router-dom'

function NBATeams(props) {
    console.log('nbateamspge', props)
    if (!props.nbaTeams) {
       return <></>
    };

    const teams = props.nbaTeams.map((team, index) => {
        return (
            <Link key={index} to={`/NBATeams/${team.strTeam}`}>
                <img src={team.strTeamBadge} alt={team.strTeamShort} />
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
export default NBATeams