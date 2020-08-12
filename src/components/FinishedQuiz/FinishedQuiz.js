import React from "react";
import classes from './FinishedQuiz.module.scss';
import Button from "../../UI/Button/Button";

const FinishedQuiz = props => {
    return (
        <div className={classes.FinishedQuiz}>
            <h1>Поздравляем!</h1>
            <p>
                Вы прошли викторину и набрали {props.score} из {props.maxscore} возможных баллов
            </p>

            <Button
            rigthAnswer={props.rightAnswer}
            >
                Попробовать ещё раз!
            </Button>

        </div>
    )
}

export default FinishedQuiz;