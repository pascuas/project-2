import React from 'react'
import LatestResult from './LatestResult'

function BasketballTeam(props) {
    console.log('BasketballTeam - props', props)
    let team =[]
    for (let i =0; i < props.nbaTeams.length; i ++)
    if (props.nbaTeams[i].strTeam === props.match.params.name) {
        team = props.nbaTeams[i]
    }
    console.log('team', team)
    
    return (
        <>
            <div className='teamPage'>
                <img src={team.strTeamBanner} alt={team.strTeamShort}/> 
                <LatestResult team={team} {...props}/>
            </div>
        </>
    )
}
export default BasketballTeam