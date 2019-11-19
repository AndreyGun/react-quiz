import React from 'react';
import './ActiveQuiz.css';

const ActiveQuiz = props => {
    return(
        <div className="ActiveQuiz">
            <p className="Question">
                <span>
                    <strong>2.</strong>&nbsp;
                    How are you?
                </span>

                <small>4 from 12</small>
            </p>

            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
            </ul>

        </div>
    );
}

export default ActiveQuiz;