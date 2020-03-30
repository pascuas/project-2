import React from 'react'
import NFLLatestResult from './NFLLatestResult'


function FootballTeam(props) {
    console.log('FootballTeam - props', props)
    let team =[]
    for (let i =0; i < props.nflTeams.length; i ++)
    if (props.nflTeams[i].strTeam === props.match.params.name) {
        team = props.nflTeams[i]
    }
    console.log('team', team)
    return (
        <>
            <div className='teamPage'>
                <img src={team.strTeamBanner} /> 
                <NFLLatestResult team={team} {...props}/>
            </div>
        </>
    )
}
export default FootballTeam