import React from 'react'
import EPLLatestResult from './EPLLatestResult'
import Image from 'react-bootstrap/Image'

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
                <div className='socialMedia'>
                    <Image src="https://cdn.pixabay.com/photo/2016/09/17/07/03/instagram-1675670_960_720.png" rounded />
                    <Image src="https://cdn.pixabay.com/photo/2017/06/22/14/23/twitter-2430933_960_720.png" rounded />
                    <Image src="https://cdn.pixabay.com/photo/2017/06/22/06/22/facebook-2429746_960_720.png" rounded />
                </div>
            </div>
        </>
    )
}
export default Futbol