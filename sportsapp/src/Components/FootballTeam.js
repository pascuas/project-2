import React from 'react'
import NFLLatestResult from './NFLLatestResult'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import {Link} from 'react-router-dom'

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
                <img src={team.strTeamBanner} alt={team.strTeamShort}/> 
                <Link to='/NFLTeams'><FontAwesomeIcon icon={faArrowLeft} size="2x"></FontAwesomeIcon></Link>
                <NFLLatestResult team={team} {...props}/>
                <div className='teamInfo'>
                    <h1 className='sectionTitle'>Team Information</h1>
                    <p><span className='boldText'>About:</span> {team.strDescriptionEN}</p>
                    <p><span className='boldText'>Location:</span> {team.strStadiumLocation}</p>
                    <p><span className='boldText'>Stadium:</span> {team.strStadium}</p>
                    <p><span className='boldText'>Stadium Capacity:</span> {team.intStadiumCapacity}</p>
                    <p><span className='boldText'>Team Website:</span> <a href={"https://" + team.strWebsite} target="_blank">{team.strTeam}</a></p>
                </div>
                <h1 className='sectionTitle'>Social Media</h1>
                <ul className='socialMedia'>
                    <li><a href={"https://" + team.strInstagram} target="_blank"><img src="https://cdn.pixabay.com/photo/2016/09/17/07/03/instagram-1675670_960_720.png" alt='instagram'/></a></li>
                    <li><a href={"https://" + team.strTwitter} target="_blank"><img src="https://cdn.pixabay.com/photo/2017/06/22/14/23/twitter-2430933_960_720.png" alt='twitter'/></a></li>
                    <li><a href={"https://" + team.strFacebook} target="_blank"><img src="https://cdn.pixabay.com/photo/2017/06/22/06/22/facebook-2429746_960_720.png" alt='facebook'/></a></li>
                </ul>
            </div>
        </>
    )
}
export default FootballTeam