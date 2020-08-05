import React from "react";
import classes from './PlayerItem.module.scss';



const PlayerItem = props => {
    //console.log(props);

    return (
        <audio className={classes.PlayerItem} src={props.randomLink} controls >
        </audio>
    )
}


export default PlayerItem;