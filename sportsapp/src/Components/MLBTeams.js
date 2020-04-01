import React from 'react'
import {Link} from 'react-router-dom'

function MLBTeams(props) {

    if (!props.mlbTeams) {
       return <></>
    };

    const teams = props.mlbTeams.map((team, index) => {
        return (
            <Link key={index} to={`/MLBTeams/${team.strTeam}`}>
                <img src={team.strTeamBadge} alt={team.strTeamShort} />
                <h4>{team.strTeam}</h4>
            </Link>
        )
    })

    return (
        <>
            <h1 className='pageTitle'>Teams</h1>
            <div className='teamsContainer'>
                {teams}
            </div>
        </>
    )
}
export default MLBTeams