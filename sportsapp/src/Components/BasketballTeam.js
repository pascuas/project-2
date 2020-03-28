import React, {useState, useEffect} from 'react'

function BasketballTeam(props) {
    console.log('BasketballTeam - props', props)
    const [team, setTeam] = useState(false)
    const apiUrl = 'https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t='
    useEffect(() => {
        const name = props.match.params.name
        const url = `${apiUrl}${name}`
        const makeApiCall = async () => {
            const res = await fetch(url)
            const json = await res.json()
            console.log('team-page', json.teams)
            setTeam(json.teams)
        }
        makeApiCall()
    }, [])
    
    if (!team) {
        return <></>
    }

    return (
        <>
            <div className='teamPage'>
                <h1>Team Page</h1>
                <img src={team[0].strTeamLogo} />
            </div>
        </>
    )
}
export default BasketballTeam