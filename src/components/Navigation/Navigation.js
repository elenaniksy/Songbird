import React from 'react';
import classes from './Navigation.module.scss';
import NavigationList from "./NavigationList/NavigationList";

const Navigation = props => {
    return (
        <div className={classes.Navigation}>
            <NavigationList
            birdsType={props.birdsType}
            sectionIndex={props.sectionIndex}
            />
        </div>

    )
}

export default Navigation;