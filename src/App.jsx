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
  const [over, setOver] = useState(false);

  function handleNextQuestion() {
    if (currentQuestion < questionBank.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setRemainedQs(remainedQs + 1);
    } else {
      setOver(!over);
    }
  }
  function restart() {
    setCurrentQuestion(0);
    setScore(0);
    setOver(!over);
    setRemainedQs(1);
  }

  const handleUserAnswer = (answer) => {
    if (answer == "yes") {
      setScore(score + 1);
    }
  };

  return (
    <>
      {over ? (
        <div className="score">
          <h1>
            عدد الإجابات الصحيحة <Score score={score} />
          </h1>
        </div>
      ) : (
        <>
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

      {over ? (
        <button
          onClick={() => {
            restart();
          }}
        >
          إعادة الأسئلة
        </button>
      ) : (
        <button
          onClick={() => {
            handleNextQuestion();
          }}
        >
          عرض السؤال التالي
        </button>
      )}
    </>
  );
}

export default App;
