import React from 'react'
import MLBLatestResult from './MLBLatestResult'
import Image from 'react-bootstrap/Image'

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
                <div className='socialMedia'>
                    <Image src="https://cdn.pixabay.com/photo/2016/09/17/07/03/instagram-1675670_960_720.png" rounded />
                    <Image src="https://cdn.pixabay.com/photo/2017/06/22/14/23/twitter-2430933_960_720.png" rounded />
                    <Image src="https://cdn.pixabay.com/photo/2017/06/22/06/22/facebook-2429746_960_720.png" rounded />
                </div>
            </div>
        </>
    )
}
export default BaseballTeam