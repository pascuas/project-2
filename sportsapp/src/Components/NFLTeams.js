import React from 'react'
import {Link} from 'react-router-dom'

function NFLTeams(props) {
    console.log('nflteampage', props)

    if (!props.nflTeams) {
       return <></>
    };

    const teams = props.nflTeams.map((team, index) => {
        return (
            <Link key={index} to={`/NFLTeams/${team.strTeam}`}>
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
export default NFLTeams 