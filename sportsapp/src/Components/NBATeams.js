import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

function NBATeams() {
    const [nbaTeams, setNbaTeams] = useState(false)
    useEffect(() => {
        const url = "https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=NBA"
        const makeApiCall = async () => {
            const res = await fetch(url)
            const json = await res.json()
            console.log('nba teams page', json.teams)
            setNbaTeams(json.teams)
        }
        makeApiCall()
    }, [])

    if (!nbaTeams) {
       return <></>
    };

    const teams = nbaTeams.map((team, index) => {
        return (
            <Link key={index} to={`/NBATeams/${team.strTeam}`}>
                <img src={team.strTeamBadge} alt={team.strTeamShort} />
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