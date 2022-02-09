import React, {useState, useEffect} from 'react';
import StartButton from './components/StartButton';
import Questions from './components/Questions';

export default function App() {
    let [questions, setQuestions] = useState([]);
    let [quizStart, setQuizStart] = useState(true);

    useEffect(() => {
        fetch('https://opentdb.com/api.php?amount=5&encode=url3986', {mode: 'cors'})
            .then(res => res.json())
            .then(data => setQuestions(data.results));
    }, []);

    const startQuiz = () => {
        /* setQuizStart(true); */
        console.log(questions);
    }

    return (
        <div>
            {
                quizStart === false
                ? <StartButton startQuiz={startQuiz} />
                : <Questions questions={questions} />
            }
        </div>
    );
}