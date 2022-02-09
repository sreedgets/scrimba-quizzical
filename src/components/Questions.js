import React from 'react';

export default function Questions(props) {
    let questionList = props.questions.map(question => {
        return(
            <div>
                <p>{decodeURIComponent(question.question)}</p>
                <ul>
                    <li>
                        {decodeURIComponent(question.correct_answer)}
                    </li>
                </ul>
            </div>
        ); 
    });

    return( 
        <div>
            {questionList}
        </div>
    );
}
