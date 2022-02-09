import React from 'react';

export default function StartButton(props) {
  return(
      <div>
          <h1 className='title-page__header'>
                Quizzical
            </h1>
            <button 
                className='title-page__start-btn'
                onClick={props.startQuiz}
            >
                Start Quiz
            </button>
      </div>
  );
}
