import { useState } from 'react';

const ResultGrid = ({ questions, answers }) => {
    const [activeQuestion, setActiveQuestion] = useState(null);

    const handleMouseEnter = (index) => {
        setActiveQuestion(index);
    };

    const handleMouseLeave = () => {
        setActiveQuestion(null);
    };

    return (
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
    );
};

export default ResultGrid;