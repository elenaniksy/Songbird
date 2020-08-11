import React, {Component} from 'react';
import classes from './Quiz.module.scss';
import BirdAudioPlayer from '../../components/BirdAudioPlayer/BirdAudioPlayer';
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";
import Button from "../../UI/Button/Button";

class Quiz extends Component {
    constructor (props) {
        super(props);
        this.state = {
            score: this.props.score,
            points: 5,
            activeSection: this.props.activeSection,
            randomNumber: Math.floor(Math.random() * this.props.activeSection.birds.length),
            answerState: null, //{[name]: 'success' Vs 'error'}
            result: null,
            rightAnswer: null,
        }
        this.RandomItem = this.state.activeSection.birds[this.state.randomNumber];
    }

    onAnswerClickHandler = (answerName, birdItem) => {

        this.setState({
            points: this.state.points - 1,
        });

        if(answerName === this.RandomItem.name) {
            this.setState({
                score: this.state.score + this.state.points,
                answerState:{[answerName]: 'success'},
                rightAnswer: true,
                result: {
                    name: this.RandomItem.name,
                    image: this.RandomItem.image,
                    audio: this.RandomItem.audio,
                    latin: this.RandomItem.latin,
                    description: this.RandomItem.description,
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
    }


        render() {
            return (
                <div className={classes.Quiz}>
                    <BirdAudioPlayer
                        birds={this.props.birdsType}
                        randomItem={this.RandomItem}
                        result={this.state.result}
                        rightAnswer={this.state.rightAnswer}
                    />

                     <ActiveQuiz
                         activeSection={this.state.activeSection}
                         score={this.state.score}
                         randomItem={this.RandomItem}
                         onAnswerClick={this.onAnswerClickHandler}
                         answerState={this.state.answerState}
                         result={this.state.result}
                     />

                     <Button />
                </div>

            )
        }
    }

export default Quiz;