import React from 'react';
import classes from './ActiveQuiz.module.scss';
import QuizList from "./QuizList/QuizList";
import QuizCard from "./QuizCard/QuizCard";
import Button from "../../UI/Button/Button";

const ActiveQuiz = props => {

    return (
        <div className={classes.ActiveQuiz}>

            <QuizList
            activeSection={props.activeSection.birds}
            onAnswerClick={props.onAnswerClick}
            randomItem={props.randomItem}
            answerState={props.answerState}
            />

            <QuizCard
                result={props.result}
            />

        </div>
    )
}

export default ActiveQuiz;