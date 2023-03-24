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

    return (
        <div>
            <h2 className="approved-text">APROBADO</h2>
            <p className="congratulations-text">
                ¡Felicidades, Aforcita! Todos confiábamos en ti... ni LinkedIn ni
                hostias, acabas de aprobar el mejor y más complicado examen del mundo.
                Saca clip y pide un aumento ya. Porque has aprobado, ¿verdad? Este es el
                único mensaje configurado.
            </p>
            <p className="score-text">
                Has acertado {totalCorrect} preguntas de {totalQuestions}
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