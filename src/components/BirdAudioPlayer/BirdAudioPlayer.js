import React from 'react';
import classes from './BirdAudioPlayer.module.scss';
import PlayerItem from "./PlayerItem/PlayerItem";


const BirdAudioPlayer = props => {
    return (
        <div className={classes.BirdAudioPlayer}>
            <div className={classes.Image}>
                <img src={'https://birds-quiz.netlify.app/static/media/bird.06a46938.jpg'} alt={'Unknown Bird'}/>
            </div>
            <div className={classes.Player}>
                <ul>
                    <li>
                        <h2>******</h2>
                    </li>
                    <li>
                        <PlayerItem randomLink={props.randomItem.audio}/>
                    </li>
                </ul>
            </div>

        </div>
    )
}


export default BirdAudioPlayer


