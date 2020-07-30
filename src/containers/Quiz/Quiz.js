import React, {Component} from 'react';
import classes from './Quiz.module.scss';

class Quiz extends Component {
    render() {
        return (
            <div className={classes.Quiz}>
                {this.props.children}
            </div>

        )
    }
}

export default Quiz;