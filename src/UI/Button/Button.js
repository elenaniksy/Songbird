import React from 'react';
import classes from './Button.module.scss';

const Button = props => {
    const cls = [
        classes.Button,
        classes[props.rigthAnswer]
    ]

    const nextLevelHandler = () => {

    }

    return (
        <button
            type={'success'}
            className={cls.join(' ')}
            onclick={nextLevelHandler()}

        >
            Next Level
        </button>
    )
}

export default Button;