import React from 'react';
import classes from './Button.module.scss';

const Button = props => {
    const cls = [
        classes.Button,
        classes[props.rigthAnswer]
    ]

    return (
        <button
            type={'success'}
            className={cls.join(' ')}
            onClick={props.nextLevel}

        >
            {props.children}
        </button>
    )
}

export default Button;