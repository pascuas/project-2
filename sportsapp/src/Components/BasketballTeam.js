import React, {useState, useEffect} from 'react'
import LatestResult from './LatestResult'

function BasketballTeam(props) {
    console.log('BasketballTeam - props', props)
    let team =[]
    for (let i =0; i < props.nbaTeams.length; i ++)
    if (props.nbaTeams[i].strTeam === props.match.params.name) {
        team = props.nbaTeams[i]
    }
    console.log('team', team)

    // const [team, setTeam] = useState(false)
    // const apiUrl = 'https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t='
    // useEffect(() => {
    //     const name = props.match.params.name
    //     const url = `${apiUrl}${name}`
    //     const makeApiCall = async () => {
    //         const res = await fetch(url)
    //         const json = await res.json()
    //         console.log('team-page', json.teams)
    //         setTeam(json.teams)
        
    //     }
    //     makeApiCall()
    // }, [props.match.params.name]) 

    // if (!team) {
    //     return <></>
    // };
        
    // useEffect(() => {
    //     const resultApiCall = async () => {
    //         const resultUrl = `https://www.thesportsdb.com/api/v1/json/1/eventslast.php?id=${team[0].idTeam}`
    //         const resultRes = await fetch(resultUrl)
    //         const resultJson = await resultRes.json()
    //         console.log('result', resultJson)
    //         setLatestResult(resultJson)
    //     }
    //     resultApiCall()
    // }, [])
    
    return (
        <>
            <div className='teamPage'>
                <img src={team.strTeamBanner} /> 
                {/* <LatestResult team={team} {...props}/> */}
            </div>
        </>
    )
}
export default BasketballTeam