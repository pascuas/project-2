import React from 'react'
import Home from './Home'
import NBATeams from './NBATeams'
import NFLTeams from './NFLTeams'
import MLBTeams from './MLBTeams'
import EPLTeams from './EPLTeams'
import BasketballTeam from './BasketballTeam'
import FootballTeam from './FootballTeam'
import BaseballTeam from './BaseballTeam'
import Futbol from './Futbol'
import {Route, Switch} from 'react-router-dom'


function Main() {
    
    return (
        <main>
            <Switch>    
                <Route exact path='/' component={Home} />
                <Route exact path='/NBATeams' component={NBATeams} />
                <Route exact path='/NFLTeams' component={NFLTeams} />
                <Route exact path='/MLBTeams' component={MLBTeams} />
                <Route exact path='/EPLTeams' component={EPLTeams} />
                <Route path='/NBATeams/:name' render={ (routerProps) => <BasketballTeam {...routerProps} />} />
                <Route path='/NFLTeams/:name' render={ (routerProps) => <FootballTeam {...routerProps} />} />
                <Route path='/MLBTeams/:name' render={ (routerProps) => <BaseballTeam {...routerProps} />} />
                <Route path='/EPLTeams/:name' render={ (routerProps) => <Futbol {...routerProps} />} />
            </Switch>
        </main>
    )
}
export default Main