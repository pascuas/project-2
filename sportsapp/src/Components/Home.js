import React, { useState, useEffect} from 'react';


function Home(props) {
    console.log('Home-props', props)
    
    return (
        <div className='leagues'>
            <h1>HOME PAGE</h1>
            <img src={props.league[3].strBadge} />
            <img src={props.league[5].strBadge} />
            <img src={props.league[7].strBadge} />
            <img src={props.engLeague[18].strBadge} />
        </div>
    )
}
export default Home