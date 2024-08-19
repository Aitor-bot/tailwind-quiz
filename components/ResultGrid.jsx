import { useState } from 'react';

const ResultGrid = ({ questions, answers }) => {
    const [activeQuestion, setActiveQuestion] = useState(null);

    const handleMouseEnter = (index) => {
        setActiveQuestion(index);
    };

    const handleMouseLeave = () => {
        setActiveQuestion(null);
    };

    const totalCorrect = answers.filter((answer) => answer.isCorrect).length;
    const totalQuestions = questions.length;
    const score = (totalCorrect / totalQuestions) * 10;
    const roundedScore = Math.round(score * 10) / 10;

    const statusText = roundedScore >= 5 ? "¡Felicidades!" : "Oh, no...";



    return (
        <div>
            <h2 className="status-text">{statusText}</h2>
            <p className="congratulations-text">
            </p>
            <p className="score-text">
                Tu nota es: {roundedScore} <br></br>
            </p>

            <div className="result-grid">
                {questions.map((question, index) => (
                    <div
                        key={index}
                        className={`result-item ${answers[index].isCorrect ? 'correct' : 'incorrect'
                            }`}
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={() => handleMouseLeave()}
                    >
                        {index + 1}
                        {activeQuestion === index && (
                            <div className="result-tooltip">
                                <div className="tooltip-question">{question.questionText}</div>
                                <div className="tooltip-answer">
                                    Tu respuesta:{' '}
                                    {question.options[answers[index].userAnswer]}
                                </div>
                                {!answers[index].isCorrect && (
                                    <div className="tooltip-correct-answer">
                                        Respuesta correcta: {question.options[question.correctAnswer]}
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ResultGrid;