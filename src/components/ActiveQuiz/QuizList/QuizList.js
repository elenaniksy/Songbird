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
                        name={item.name}
                        />
                    )
                })
            }
        </ul>
    )
}

export default QuizList;