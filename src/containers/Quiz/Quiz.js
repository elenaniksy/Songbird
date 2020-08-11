import React, {Component} from 'react';
import classes from './Quiz.module.scss';
import BirdAudioPlayer from '../../components/BirdAudioPlayer/BirdAudioPlayer';
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";
import Button from "../../UI/Button/Button";
import Header from "../Header/Header";

class Quiz extends Component {
    constructor (props) {
        super(props);
        this.state = {
            birdsType: this.props.birdsType,
            isFinished: false,
            score: 0,
            points: 5,
            activeSection: this.props.activeSection,
            randomItem: this.props.activeSection.birds[this.props.randomNumber],
            randomNumber: this.props.randomNumber,
            answerState: null, //{[name]: 'success' Vs 'error'}
            result: null,
            rightAnswer: false,
        }
    }


    onAnswerClickHandler = (answerName, birdItem) => {
        if(!this.state.rightAnswer) {

            this.setState({
                points: this.state.points - 1,
            });
            if(answerName === this.state.randomItem.name) {
                this.setState({
                    score: this.state.score + this.state.points,
                    answerState:{[answerName]: 'success'},
                    rightAnswer: true,
                    result: {
                        name: this.state.randomItem.name,
                        image: this.state.randomItem.image,
                        audio: this.state.randomItem.audio,
                        latin: this.state.randomItem.latin,
                        description: this.state.randomItem.description,
                    }
                });

            } else {
                this.setState({
                    answerState: {[answerName]: 'error'},
                    rightAnswer: false,
                    result: {
                        name: birdItem.name,
                        latin: birdItem.latin,
                        image: birdItem.image,
                        audio: birdItem.audio,
                        description: birdItem.description
                    }
                });
            }
        } else {

            return;
        }

    }

        render() {
            return (
                <div className={classes.Quiz}>
                    <Header
                        activeSection={this.state.activeSection}
                        birdsType={this.props.birdsType}
                        score={this.state.score}
                    />

                    <BirdAudioPlayer
                        birds={this.props.birdsType}
                        randomItem={this.state.randomItem}
                        result={this.state.result}
                        rightAnswer={this.state.rightAnswer}
                    />

                     <ActiveQuiz
                         activeSection={this.state.activeSection}
                         randomItem={this.state.randomItem}
                         onAnswerClick={this.onAnswerClickHandler}
                         answerState={this.state.answerState}
                         result={this.state.result}
                     />
                     <Button
                         rigthAnswer={this.state.rightAnswer}
                     />
                </div>

            )
        }
    }

export default Quiz;