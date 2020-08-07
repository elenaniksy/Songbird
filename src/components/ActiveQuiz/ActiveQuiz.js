import React from 'react';
import classes from './ActiveQuiz.module.scss';
import QuizList from "./QuizList/QuizList";
import QuizCard from "./QuizCard/QuizCard";

const ActiveQuiz = props => {
    return (
        <div className={classes.ActiveQuiz}>
            {/*1. Блок со списком птиц*/}
            {/*2. Блок карточка*/}
            <QuizList
            birds={props.activeSection.birds}
            />
            <QuizCard
            />


        </div>
    )
}

export default ActiveQuiz;