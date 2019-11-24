import React from 'react';
import './AnswerItem.css';

const AnswerItem = props => {

    const stateClass = [props.state];
    
    return(
        <li 
            className={`AnswerItem ${stateClass}`}
            onClick={() => props.onAnswerClick(props.answer.id)}
          >
            { props.answer.text }
        </li>
    );
}

export default AnswerItem;