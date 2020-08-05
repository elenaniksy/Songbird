import React, {Component} from 'react';
import classes from './Quiz.module.scss';
import BirdAudioPlayer from '../../components/BirdAudioPlayer/BirdAudioPlayer';
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";

class Quiz extends Component {

    state = {
       score: this.props.score,
       activeSection: this.props.activeSection,
       randomNumber: Math.round(Math.random() * this.props.activeSection.birds.length),
       rightAnswer: null,
   }
    getRandomItem = () => {
        let randomIt = null;
        randomIt = this.state.activeSection.birds[this.state.randomNumber];
        return randomIt;
    }

        render() {
            return (
                <div className={classes.Quiz}>
                    <BirdAudioPlayer
                        birds={this.props.birdsType}
                        randomItem={this.getRandomItem()}
                    />
                     <ActiveQuiz/>
                </div>
            )
        }
    }

export default Quiz;