import { useState } from 'react';

const Question = ({ question, handleAnswer }) => {
    const [selectedOption, setSelectedOption] = useState(null);

    const handleSubmit = () => {
        const isCorrect = selectedOption === question.correctAnswer;
        handleAnswer(isCorrect, selectedOption);
        setSelectedOption(null);
    };
    return (
        <div className="question-container">
            <h2 className="quiz-question">{question.questionText}</h2>
            <div className="quiz-options">
                {question.options.map((option, index) => (
                    <div
                        key={index}
                        className={`quiz-option ${selectedOption === index ? 'selected' : ''
                            }`}
                        onClick={() => setSelectedOption(index)}
                    >
                        {option}
                    </div>
                ))}
            </div>
            <button
                className="quiz-button"
                disabled={selectedOption === null}
                onClick={handleSubmit}
            >
                Siguiente
            </button>
        </div>
    );
};

export default Question;