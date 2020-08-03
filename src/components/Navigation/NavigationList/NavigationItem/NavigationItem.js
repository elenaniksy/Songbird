import React from 'react';
import classes from './NavigationItem.module.scss';

const NavigationItem = props => {
    const cls = [classes.NavigationItem];

    if(props.active) {
        cls.push(classes.active)
    } else {
        cls.push(classes.unActive)
    }

    return (
        <li className={cls.join(' ')}>
            {props.type}
        </li>
    )
}

export default NavigationItem;