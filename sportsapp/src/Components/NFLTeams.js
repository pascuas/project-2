import React, { useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

function NFLTeams() {
    const [nflTeams, setNflTeams] = useState(false)
    useEffect(() => {
        const url = "https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=NFL"
        const makeApiCall = async () => {
            const res = await fetch(url)
            const json = await res.json()
            console.log('nfl teams page', json.teams)
            setNflTeams(json.teams)
        }
        makeApiCall()
    }, [])

    if (!nflTeams) {
       return <></>
    };

    const teams = nflTeams.map((team, index) => {
        return (
            <Link key={index} to={`/NFLTeams/${team.strTeam}`}>
                <img src={team.strTeamBadge} alt={team.strTeamShort} />
                <h4>{team.strTeam}</h4>
            </Link>
        )
    })

    return (
        <div className='teamsContainer'>
            <h1>NFL Teams Page</h1>
            {teams}
        </div>
        
    )
}
export default NFLTeams 