import React from "react";
import classes from './FinishedQuiz.module.scss';
import Button from "../../UI/Button/Button";

const FinishedQuiz = props => {
    return (
        <div className={classes.FinishedQuiz}>
            <div className={classes.Wrapper}>
                <h1>Поздравляем!</h1>
                <p>
                    Вы прошли викторину и набрали {props.score} из {props.maxscore} возможных баллов
                </p>

                {
                    props.score < props.maxscore
                        ?
                        <Button
                            rigthAnswer={props.rightAnswer}
                            onClick={props.onClick}
                        >
                            Попробовать ещё раз!
                        </Button>
                        : null

                }
            </div>
        </div>
    )
}

export default FinishedQuiz;