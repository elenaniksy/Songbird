import React from "react";
import classes from './Score.module.scss';

const Score = props => {
    return (
        <div className={classes.Score}>
            <h5>Score: {props.score}</h5>
        </div>

    )
}

export default Score;