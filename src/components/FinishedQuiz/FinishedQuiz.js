import React from 'react';
import './FinishedQuiz.css';

const FinishedQuiz = props => {
    return(
        <div className="FinishedQuiz">
            <ul>
                {
                    props.quiz.map((quizItem, index) => {
                        const cls = [
                            'fa',
                            props.results[quizItem.id] === 'error' ? 'fa-times' : 'fa-check',
                            props.results[quizItem.id]
                        ]
                        console.log("props.results");
                        console.log(props.results);
                        return(
                            <li key={index}>
                                <strong>{index + 1}</strong>.&nbsp;
                                {quizItem.question}
                                <i className={cls.join(' ')} />
                            </li>
                        );
                    })
                }
                {/* <li>
                    <strong>1.</strong>
                    How are you ?
                    <i className={'fa fa-times succes'}/>
                </li>
                <li>
                    <strong>2.</strong>
                    How are you ?
                    <i className={'fa fa-check error'}/>
                </li> */}
            </ul>

            <p>4 from 10 correct answers</p>

            <div>
                <button>repeat</button>
            </div>
        </div>
    );
}

export default FinishedQuiz;