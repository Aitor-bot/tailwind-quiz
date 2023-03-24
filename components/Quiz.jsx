import { useState } from 'react';
import Question from './Question';
import ResultGrid from './ResultGrid';

const Quiz = ({ questions }) => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showResults, setShowResults] = useState(false);
    const [answers, setAnswers] = useState([]);

    const handleAnswer = (isCorrect, selectedOption) => {
        if (isCorrect) {
            setScore(score + 1);
        }

        setAnswers([...answers, { isCorrect, userAnswer: selectedOption }]);

        if (currentQuestion + 1 < questions.length) {
            setCurrentQuestion(currentQuestion + 1
            );
        } else {
            setShowResults(true);
        }
    };

    return (

        <div className="quiz-container">
            {showResults ? (
                <div className="results-container">
                    <ResultGrid questions={questions} answers={answers} />
                </div>
            ) : (
                <Question
                    question={questions[currentQuestion]}
                    handleAnswer={handleAnswer}
                />
            )}
        </div>
    );
};
export default Quiz;