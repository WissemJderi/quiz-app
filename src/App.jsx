import { useState } from "react";
import "./App.css";
import Option from "./components/Option";
import Question from "./components/Question";
import Score from "./components/Score";
import questionBank from "./components/QuestionBank";

function App() {
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [remainedQs, setRemainedQs] = useState(1);

  function handleNextQuestion() {
    if (currentQuestion < questionBank.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setRemainedQs(remainedQs + 1);
    } else {
      if (remainedQs < 5) {
        setRemainedQs(remainedQs + 1);
        console.log("No");
      }
    }
  }

  const handleUserAnswer = (answer) => {
    if (answer == "yes") {
      setScore(score + 1);
    }
  };
  console.log("Curr", currentQuestion);
  console.log("Q", questionBank.length - 1);

  return (
    <>
      {currentQuestion > questionBank.length - 1 ? (
        <div className="score">
          <h1>
            Your Score : <Score score={score} />
          </h1>
        </div>
      ) : (
        <>
          {" "}
          <Question currentQuestion={currentQuestion} />
          <h1>
            {remainedQs}/{questionBank.length}
          </h1>
          <Option
            currentQuestion={currentQuestion}
            handleUserAnswer={handleUserAnswer}
          />
        </>
      )}
      <button
        onClick={() => {
          handleNextQuestion();
        }}
      >
        عرض السؤال التالي
      </button>
    </>
  );
}

export default App;
