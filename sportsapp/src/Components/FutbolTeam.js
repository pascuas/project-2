import React from 'react'
import EPLLatestResult from './EPLLatestResult'

function Futbol(props) {
    console.log('Futbol - props', props)
    let team =[]
    for (let i =0; i < props.eplTeams.length; i ++)
    if (props.eplTeams[i].strTeam === props.match.params.name) {
        team = props.eplTeams[i]
    }
    console.log('team', team)
    return (
        <>
            <div className='teamPage'>
                <img src={team.strTeamBanner} alt={team.strTeamShort}/> 
                <EPLLatestResult team={team} {...props}/>
            </div>
        </>
    )
}
export default Futbol