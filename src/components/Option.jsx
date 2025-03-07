import React from "react";
import questionBank from "./QuestionBank.jsx";

function Option(props) {
  const question = questionBank[props.currentQuestion];

  function handleAnswer(event) {
    const selectedOption = event.target.value;
    if (selectedOption === question.answer) {
      props.handleUserAnswer("yes");
      console.log("yes");
    } else {
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
            onChange={handleAnswer}
          />
          <label htmlFor={`option-${index}`}>{option}</label>
        </div>
      ))}
    </div>
  );
}

export default Option;
