import React from 'react'
import MLBLatestResult from './MLBLatestResult'

function BaseballTeam(props) {
    console.log('BaseballTeam - props', props)
    let team =[]
    for (let i =0; i < props.mlbTeams.length; i ++)
    if (props.mlbTeams[i].strTeam === props.match.params.name) {
        team = props.mlbTeams[i]
    }
    console.log('team', team)
    return (
        <>
            <div className='teamPage'>
                <img src={team.strTeamBanner} alt={team.strTeamShort}/> 
                <MLBLatestResult team={team} {...props}/>
            </div>
        </>
    )
}
export default BaseballTeam