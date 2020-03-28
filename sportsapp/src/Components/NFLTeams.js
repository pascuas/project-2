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
            <div className='nflTeam' key={index}>
                <Link to={`/NFLTeams/${team.strTeam}`}><img src={team.strTeamBadge} alt={team.strTeamShort} /></Link>
            </div>
        )
    })

    return (
        <div className='nflContainer'>
            <h1>NFL Teams Page</h1>
            {teams}
        </div>
        
    )
}
export default NFLTeams 