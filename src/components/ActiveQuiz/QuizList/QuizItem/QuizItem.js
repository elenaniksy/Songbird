import React from 'react';
import classes from './QuizItem.module.scss';

const QuizItem = props => {

    const cls = [classes.QuizItem];

    if(props.answerState) {
        cls.push(classes[props.answerState]);
    }

    return (
        <li className={cls.join(' ')}
         onClick={()=> props.onAnswerClick(props.name, props.birdItem)}
        >
            {props.name}
        </li>
    )
}

export default QuizItem;