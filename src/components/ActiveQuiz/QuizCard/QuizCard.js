import React from 'react';
import classes from './QuizCard.module.scss';

const QuizCard = props => {
    return (
        <div className={classes.QuizCard}>
            <p>Послушайте плеер.
                <br/>
                Выберите птицу из списка
            </p>
        </div>
    )
};

export default QuizCard;

