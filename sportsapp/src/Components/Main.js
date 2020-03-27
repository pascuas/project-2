import React, {useState, useEffect} from 'react'
import Home from './Home'
import {Route} from 'react-router-dom'

function Main() {
    const [usLeague, setUsLeague] = useState(false)
    const [engLeague, setEngLeague] = useState(false)

    useEffect(() => {
        const url = "https://www.thesportsdb.com/api/v1/json/1/search_all_leagues.php?c=USA"
        const makeApiCall = async () => {
            const res = await fetch(url)
            const json = await res.json()
            console.log('apicall',json.countrys)
            setUsLeague(json.countrys)
        }
        makeApiCall()
    }, [])

    useEffect(() => {
        const engUrl = "https://www.thesportsdb.com/api/v1/json/1/search_all_leagues.php?c=England"
        const apiCall = async () => {
            const engRes = await fetch(engUrl)
            const engJson = await engRes.json()
            console.log('english', engJson)
            setEngLeague(engJson.countrys)
        }
        apiCall()
    }, [])
    if (!usLeague) {
        return <></>
    };
    if (!engLeague) {
        return <></>
    };

    return (
        <main>
            <Route exact path='/' render={ (routerProps) => <Home league={usLeague} engLeague={engLeague}/> } />
        </main>
    )
}
export default Main