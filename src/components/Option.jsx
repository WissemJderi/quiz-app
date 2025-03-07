import React, { useState, useEffect } from "react";
import questionBank from "./QuestionBank.jsx";

function Option({ currentQuestion, handleUserAnswer }) {
  const [selectedOption, setSelectedOption] = useState("");
  const question = questionBank[currentQuestion];

  useEffect(() => {
    // Reset the selected option when the question changes
    setSelectedOption("");
  }, [currentQuestion]);

  function handleAnswer(event) {
    const selectedOption = event.target.value;
    setSelectedOption(selectedOption);
    if (selectedOption === question.answer) {
      handleUserAnswer("yes");
      console.log("yes");
    } else {
      handleUserAnswer("no");
      console.log(selectedOption);
    }
  }

  return (
    <div>
      <h3>{question.question}</h3>
      {question.options.map((option, index) => (
        <div className="options" key={index}>
          <input
            type="radio"
            id={`option-${index}`}
            name="option"
            value={option}
            checked={selectedOption === option}
            onChange={handleAnswer}
          />
          <label htmlFor={`option-${index}`}>{option}</label>
        </div>
      ))}
    </div>
  );
}

export default Option;
