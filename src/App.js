import React from 'react';

export default function App() {
    //State to tell if you're on the title page or not

    const startQuiz = () => {
        console.log('start quiz!');
    }

    return (
        <div>
            <h1 className='title-page__header'>
                Quizzical
            </h1>
            <button 
                className='title-page__start-btn'
                onClick={startQuiz}
            >
                Start Quiz
            </button>
        </div>
    );
}