import React from 'react';
import classes from './ActiveQuiz.module.scss';
import QuizList from "./QuizList/QuizList";

const ActiveQuiz = props => {
    return (
        <div className={classes.ActiveQuiz}>
            {/*1. Блок со списком птиц*/}
            {/*2. Блок карточка*/}
            <QuizList />


        </div>
    )
}

export default ActiveQuiz;