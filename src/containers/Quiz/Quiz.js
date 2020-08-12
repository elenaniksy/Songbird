import React, {Component} from 'react';
import classes from './Quiz.module.scss';
import BirdAudioPlayer from '../../components/BirdAudioPlayer/BirdAudioPlayer';
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";
import Button from "../../UI/Button/Button";
import Header from "../Header/Header";
import FinishedQuiz from "../../components/FinishedQuiz/FinishedQuiz";

class Quiz extends Component {

    constructor (props) {
        super(props);
        this.state = {
            birdsType: this.props.birdsType,
            isFinished: true,
            maxScore: 30,
            score: 0,
            points: 5,
            activeSectionIndex: 0,
            activeSection: this.props.birdsType[0],
            randomItem: this.props.birdsType[0].birds[Math.floor(Math.random() * 6)],
            answerState: null, //{[name]: 'success' Vs 'error'}
            result: null, // {[key] : bird property},
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
    nextLevelHandler = () => {
        if(this.state.rightAnswer) {
            this.setState({
                activeSectionIndex: this.state.activeSectionIndex + 1,
                activeSection: this.state.birdsType[this.state.activeSectionIndex + 1],
                rightAnswer: false,
                result: null,
                answerState: null,
                randomItem: this.state.birdsType[this.state.activeSectionIndex + 1].birds[Math.floor(Math.random() * 6)],
                points: 5,
            });
        }

    }

        render() {

            return (
                <div className={classes.Quiz}>
                    <Header
                        birdsType={this.props.birdsType}
                        score={this.state.score}
                        sectionIndex={this.state.activeSectionIndex}
                    />

                    {
                        this.state.isFinished ?
                            <FinishedQuiz
                                score={this.state.score}
                                maxscore={this.state.maxScore}
                                rightAnswer={this.state.rightAnswer}
                            /> :
                          <div>
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
                            nextLevel={this.nextLevelHandler}
                            > Next Level
                            </Button>
                          </div>
                    }






                </div>

            )
        }
    }

export default Quiz;