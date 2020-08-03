import React from 'react';
import classes from './Navigation.module.scss';
import NavigationList from "./NavigationList/NavigationList";

const Navigation = props => {
    return (
        <div className={classes.Navigation}>
            <NavigationList
            birdsType={props.birdsType}
            />
        </div>

    )
}

export default Navigation;