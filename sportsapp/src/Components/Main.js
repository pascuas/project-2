import React, {useState, useEffect} from 'react'
import Home from './Home'
import NBATeams from './NBATeams'
import NFLTeams from './NFLTeams'
import MLBTeams from './MLBTeams'
import EPLTeams from './EPLTeams'
import BasketballTeam from './BasketballTeam'
import FootballTeam from './FootballTeam'
import BaseballTeam from './BaseballTeam'
import FutbolTeam from './FutbolTeam'
import {Route, Switch} from 'react-router-dom'


function Main() {
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

    const [nflTeams, setNflTeams] = useState(false)
    useEffect(() => {
        const url = "https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=NFL"
        const makeApiCall = async () => {
            const res = await fetch(url)
            const json = await res.json()
            console.log('nfl teams page', json.teams)
            setNflTeams(json.teams)
        }
        makeApiCall()
    }, [])

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
    
    return (
        <main>
            <Switch>    
                <Route exact path='/' component={Home} />
                <Route exact path='/NBATeams' render={(props) => <NBATeams nbaTeams={nbaTeams}/>} />
                <Route exact path='/NFLTeams' render={(props) => <NFLTeams nflTeams={nflTeams}/>} />
                <Route exact path='/MLBTeams' render={(props) => <MLBTeams mlbTeams={mlbTeams}/>} />
                <Route exact path='/EPLTeams' render={(props) => <EPLTeams eplTeams={eplTeams}/>} />
                <Route exact path='/NBATeams/:name' render={ (routerProps) => <BasketballTeam nbaTeams={nbaTeams}{...routerProps} />} />
                <Route exact path='/NFLTeams/:name' render={ (routerProps) => <FootballTeam nflTeams={nflTeams}{...routerProps} />} />
                <Route exact path='/MLBTeams/:name' render={ (routerProps) => <BaseballTeam mlbTeams={mlbTeams}{...routerProps} />} />
                <Route exact path='/EPLTeams/:name' render={ (routerProps) => <FutbolTeam eplTeams={eplTeams}{...routerProps} />} />
            </Switch>
        </main>
    )
}
export default Main