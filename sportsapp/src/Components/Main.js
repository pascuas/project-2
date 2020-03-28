import React from 'react'
import Home from './Home'
import NBATeams from './NBATeams'
import NFLTeams from './NFLTeams'
import MLBTeams from './MLBTeams'
import EPLTeams from './EPLTeams'
import {Route, Switch} from 'react-router-dom'

function Main() {
    
    return (
        <main>
            <Switch>    
                <Route exact path='/' component={Home} />
                <Route path='/NBATeams' component={NBATeams} />
                <Route path='/NFLTeams' component={NFLTeams} />
                <Route path='/MLBTeams' component={MLBTeams} />
                <Route path='/EPLTeams' component={EPLTeams} />
            </Switch>
        </main>
    )
}
export default Main