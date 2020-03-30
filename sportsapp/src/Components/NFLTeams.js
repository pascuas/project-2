import React from 'react'
import {Link} from 'react-router-dom'

function NFLTeams(props) {
    console.log('nflteampage', props)
    // const [nflTeams, setNflTeams] = useState(false)
    // useEffect(() => {
    //     const url = "https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=NFL"
    //     const makeApiCall = async () => {
    //         const res = await fetch(url)
    //         const json = await res.json()
    //         console.log('nfl teams page', json.teams)
    //         setNflTeams(json.teams)
    //     }
    //     makeApiCall()
    // }, [])

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