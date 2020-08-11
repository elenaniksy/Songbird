import React from 'react';
import classes from './QuizCard.module.scss';

const QuizCard = props => {
    if(props.result) {
        return (
            <div className={classes.QuizCard}>
                <div className={classes.ActiveQuizCard}>
                    <div className={classes.Image}>
                        <img src={props.result.image} alt={'Bird'}/>
                    </div>
                    <div className={classes.Information}>
                        <h3 className={classes.Header}>{props.result.name}</h3>
                        <p className={classes.Latin}>{props.result.latin}</p>
                        <audio src={props.result.audio} controls></audio>
                    </div>
                </div>
                <span>
                    <p className={classes.Description}>
                        {props.result.description}
                    </p>
                </span>
            </div>
        )
    } else {
        return (
            <div className={classes.QuizCard}>
                <p>Послушайте плеер.
                    <br/>
                    Выберите птицу из списка
                </p>
            </div>
        )
   }

};

export default QuizCard;

