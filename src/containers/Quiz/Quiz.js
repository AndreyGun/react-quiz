import React, {Component} from 'react';
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz';

import './Quis.css';

export default class Quiz extends Component {

    state = {
        activeQuestion: 0,
        answerState: null, // { [id]: 'succes' ? 'error' }
        quiz: [
            {   
                id: 1,
                question: 'What color is the sky?',
                rightAnswerId: 4,
                answers: [
                    {text: 'black', id: 1},
                    {text: 'red', id:2},
                    {text: 'green', id:3},
                    {text: 'blue', id:4}
                ]
            },
            {
                id: 2,
                question: 'What year was Zaporizhzhya founded ?',
                rightAnswerId: 2,
                answers: [
                    {text: '1922', id: 1},
                    {text: '952', id: 2},
                    {text: '1634', id: 3},
                    {text: '687', id: 4}
                ]
            }
        ]
    }

    onAnswerClickHandler = (answerId) => {
        console.log('answerId: ', answerId);

        const {quiz, activeQuestion } = this.state;
        const question = quiz[activeQuestion];

        if (question.rightAnswerId === answerId) {

            this.setState({
                answerState:  {[answerId]: 'succes'}
            })

            const timeout = window.setTimeout(()=>{
                if (this.isQuizFinished()) {
                    console.log('Finished');
                } else {
                    this.setState({
                        activeQuestion: this.state.activeQuestion + 1,
                        answerState: null
                    });
                }
                window.clearTimeout(timeout);
            },1000);
        } else {
            this.setState({
                answerState: {[answerId]: 'error'}
            })
        }
    }
    isQuizFinished() {
        return this.state.activeQuestion + 1 === this.state.quiz.length;
    }
    render() {
        const {quiz, activeQuestion } = this.state;
        return(
            <div className="Quiz">
                <div className="QuizWrapper">
                    <h1>Answer all questions</h1>
                    <ActiveQuiz 
                        answers={quiz[activeQuestion].answers} 
                        question={quiz[activeQuestion].question}
                        onAnswerClick={this.onAnswerClickHandler}
                        quizLength={quiz.length}
                        answerNumber={activeQuestion + 1}
                        state={this.state.answerState}
                    />
                </div>
            </div>
        );
    }
}