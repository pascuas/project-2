import React, {useState, useEffect} from 'react'
import { DataContext } from './NBATeams'

function LatestResult(props) {
    console.log('results', props)
    console.log('team-id', props.team[0].idTeam)
    const [latestResult, setLatestResult] = useState(false)
    useEffect(() => {
        const resultApiCall = async () => {
            const resultUrl = `https://www.thesportsdb.com/api/v1/json/1/eventslast.php?id=${props.team[0].idTeam}`
            const resultRes = await fetch(resultUrl)
            const resultJson = await resultRes.json()
            console.log('result', resultJson.results)
            setLatestResult(resultJson.results)
        }
        resultApiCall()
    }, [props.team])
    if (!latestResult) {
        return <></>
    }
    return (
        <h1>Latest Events </h1>
    )
}
export default LatestResult