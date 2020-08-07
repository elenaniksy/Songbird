import React from 'react';
import classes from './QuizItem.module.scss';

const QuizItem = props => {
    return (
        <li className={classes.QuizItem}>
            {props.name}
        </li>
    )
}

export default QuizItem;