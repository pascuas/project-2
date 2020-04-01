import React, { useState, useEffect} from 'react';
import {Link} from 'react-router-dom'


function Home() {
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
        <>
            <h1 className="pageTitle">Leagues</h1>
            <div className='leagues'>
                <Link to='/NBATeams'><img src={usLeague[3].strBadge} alt={usLeague[3].strLeague} /></Link>
                <Link to='/NFLTeams'><img src={usLeague[5].strBadge} alt={usLeague[5].strLeague} /></Link>
                <Link to='/MLBTeams'><img src={usLeague[7].strBadge} alt={usLeague[7].strLeague} /></Link>
                <Link to='EPLTeams'><img src={engLeague[18].strBadge} alt={engLeague[18].strLeague} /></Link>
            </div>
        </>
    )
}
export default Home