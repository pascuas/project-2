import React, {useState, useEffect} from 'react'

function MLBTeams() {
    const [mlbTeams, setMlbTeams] = useState(false)
    useEffect(() => {
        const url = "https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=MLB"
        const makeApiCall = async () => {
            const res = await fetch(url)
            const json = await res.json()
            console.log('mlb teams page', json.teams)
            setMlbTeams(json.teams)
        }
        makeApiCall()
    }, [])

    if (!mlbTeams) {
       return <></>
    };

    const teams = mlbTeams.map((team, index) => {
        return (
            <div className='nbaTeam' key={index}>
                <img src={team.strTeamBadge} alt={team.strTeamShort} />
            </div>
        )
    })

    return (
        <div className='mlbContainer'>
            <h1>MLB Teams Page</h1>
            {teams}
        </div>
    )
}
export default MLBTeams