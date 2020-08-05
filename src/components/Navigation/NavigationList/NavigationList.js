import React from "react";
import classes from './NavigationList.module.scss';
import NavigationItem from "./NavigationItem/NavigationItem";

const NavigationList = props => {
    return (
        <ul className={classes.NavigationList}>
            {props.birdsType.map((item, index) => {
                return (
                    <NavigationItem
                    key={index}
                    active={item.active}
                    type={item.type}
                    />
                )
            }) }


        </ul>
    )
}

export default NavigationList;
