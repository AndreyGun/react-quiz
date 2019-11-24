import React from 'react';
import AnswersList from './AnswersList/AnswersList';

import './ActiveQuiz.css';

const ActiveQuiz = props => {
    return(
        <div className="ActiveQuiz">
            <p className="Question">
                <span>
                    <strong>2.</strong>&nbsp;
                    {props.question}
                </span>

                <small>4 from 12</small>
            </p>
            <AnswersList 
                answers={props.answers}
                onAnswerClick={props.onAnswerClick}
            />

        </div>
    );
}

export default ActiveQuiz;