import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

function EPLTeams(props) {
    // const [eplTeams, setEplTeams] = useState(false)
    // useEffect(() => {
    //     const url = "https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League"
    //     const makeApiCall = async () => {
    //         const res = await fetch(url)
    //         const json = await res.json()
    //         console.log('epl teams page', json.teams)
    //         setEplTeams(json.teams)
    //     }
    //     makeApiCall()
    // }, [])

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