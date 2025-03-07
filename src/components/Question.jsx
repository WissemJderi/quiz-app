import questionBank from "./QuestionBank.jsx";

function Question({ currentQuestion }) {
  return (
    <div>
      <h1>{questionBank[currentQuestion].question}</h1>
    </div>
  );
}

export default Question;
