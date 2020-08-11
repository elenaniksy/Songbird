import React from "react";
import classes from './Header.module.scss';
import Navigation from "../../components/Navigation/Navigation";
import Score from "../../components/Score/Score";

const topLogo = <img src={'https://birds-quiz.netlify.app/static/media/logo.4f82cd73.svg'} alt={'main logo'}/>;

const Header = props => {

        return (
            <div className={classes.Header}>
                <div className={classes.topPanel}>
                    <div className={classes.logo}>
                        {topLogo}
                    </div>

                    <Score score={props.score}/>
                </div>

                <Navigation
                    birdsType={props.birdsType}
                />
            </div>
        )
}

export default Header;