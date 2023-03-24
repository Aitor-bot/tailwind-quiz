import { useState } from 'react';

const Question = ({ question, handleAnswer }) => {
    const [selectedOption, setSelectedOption] = useState(null);

    const onOptionClick = (option) => {
        setSelectedOption(option);
    };

    const onNextClick = () => {
        handleAnswer(selectedOption === question.correctAnswer);
        setSelectedOption(null);
    };

    return (
        <div>
            <h2 className="quiz-question">{question.questionText}</h2>
            <div className="quiz-options">
                {question.options.map((option, index) => (
                    <div
                        key={index}
                        className={`quiz-option ${selectedOption === index ? 'selected' : ''
                            }`}
                        onClick={() => onOptionClick(index)}
                    >
                        {option}
                    </div>
                ))}
            </div>
            <button
                className="quiz-button"
                onClick={onNextClick}
                disabled={selectedOption === null}
            >
                Siguiente
            </button>
        </div>
    );
};

export default Question;
