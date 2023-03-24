import { useState } from 'react';
import Question from './Question';

const Quiz = ({ questions }) => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showResults, setShowResults] = useState(false);

    const handleAnswer = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1);
        }
        if (currentQuestion + 1 < questions.length) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            setShowResults(true);
        }
    };

    return (
        <div className="quiz-container">
            {showResults ? (
                <div className="results-container">
                    <h2 className="results-title">Resultados</h2>
                    <p className="results-text">
                        Acertaste {score} de {questions.length} preguntas.
                    </p>
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
