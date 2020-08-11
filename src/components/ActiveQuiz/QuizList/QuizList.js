import React from 'react';
import classes from './QuizList.module.scss';
import QuizItem from "./QuizItem/QuizItem";

const QuizList = props => {
    return (
        <ul className={classes.QuizList}>
            {
                props.birds.map((item, index) => {
                    return (
                        <QuizItem
                        key={index}
                        birdItem={item}
                        name={item.name}
                        randomItem={props.randomItem}
                        onAnswerClick={props.onAnswerClick}
                        answerState={props.answerState ? props.answerState[item.name]: null}
                        />
                    )
                })
            }
        </ul>
    )
}

export default QuizList;