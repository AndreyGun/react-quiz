import React, {Component} from 'react';
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz';

import './Quis.css';

export default class Quiz extends Component {

    state = {
        quiz: [
            {
                question: 'What is sky color?',
                rightAnswerId: 4,
                answers: [
                    {text: 'black', id: 1},
                    {text: 'red', id:2},
                    {text: 'green', id:3},
                    {text: 'blue', id:4}
                ]
            }
        ]
    }

    onAnswerClickHandler = (answerId) => {
        console.log('answerId: ', answerId);
    }

    render() {
        return(
            <div className="Quiz">
                <div className="QuizWrapper">
                    <h1>Answer all questions</h1>
                    <ActiveQuiz 
                        answers={this.state.quiz[0].answers} 
                        question={this.state.quiz[0].question}
                        onAnswerClick={this.onAnswerClickHandler}
                    />
                </div>
            </div>
        );
    }
}