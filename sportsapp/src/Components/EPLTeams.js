import React, {useState, useEffect} from 'react'

function EPLTeams() {
    const [eplTeams, setEplTeams] = useState(false)
    useEffect(() => {
        const url = "https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League"
        const makeApiCall = async () => {
            const res = await fetch(url)
            const json = await res.json()
            console.log('epl teams page', json.teams)
            setEplTeams(json.teams)
        }
        makeApiCall()
    }, [])

    if (!eplTeams) {
       return <></>
    };

    const teams = eplTeams.map((team, index) => {
        return (
            <div className='nbaTeam' key={index}>
                <img src={team.strTeamBadge} alt={team.strTeamShort} />
            </div>
        )
    })

    return (
        <div className='eplContainer'>
            <h1>EPL Teams</h1>
            {teams}
        </div>
    )
}
export default EPLTeams