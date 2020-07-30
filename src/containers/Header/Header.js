import React, {Component} from "react";
import classes from './Header.module.scss';

class Header extends Component {
    render() {
        return (
            <div className={classes.Header}>
                <div className={classes.topPanel}>
                    <div className={classes.logo}>v</div>
                    <h5>Score: 5 из 30</h5>
                </div>


            </div>
        )
    }
}

export default Header;