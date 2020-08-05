import React from 'react';
import classes from './Quiz.module.scss';
import BirdAudioPlayer from '../../components/BirdAudioPlayer/BirdAudioPlayer';

const Quiz = props => {
    return (
        <div className={classes.Quiz}>
           <BirdAudioPlayer
            birds={props.birdsType}
           />
        </div>
    )
}


export default Quiz;