import { useState, useEffect } from "react";
import "./quiz.css";
import LazyImage from "../components/quiz/lazyimage";
import Intro from "../components/quiz/intro";
import Result from "../components/quiz/result";

const TOTAL_QUESTIONS = 10;

function Quiz() {
  const [quizData, setQuizData] = useState([]);
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    fetch("/quiz.json")
      .then((response) => response.json())
      .then((data) => setQuizData(data))
      .catch((error) => console.error("Error loading quiz data:", error));
  }, []);

  const handleAnswer = (answer) => {
    const correctAnswer = quizData[currentQuestion].correctAnswer === answer;

    setAnswers([
      ...answers,
      {
        question: currentQuestion,
        answer,
        correct: correctAnswer,
        title: quizData[currentQuestion].title,
        artist: quizData[currentQuestion].artist,
        year: quizData[currentQuestion].year,
        url: quizData[currentQuestion].url,
      },
    ]);
    handleNextQuestion();
  };

  const handleNextQuestion = () => {
    if (currentQuestion + 1 < TOTAL_QUESTIONS) {
      setCurrentQuestion((prevQuestion) => prevQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const startQuiz = () => {
    setQuizStarted(true);
  };

  if (quizData.length === 0) {
    return <div>Loading...</div>;
  }

  if (showResult) {
    const correctAnswers = answers.filter((a) => a.correct).length;
    return (
      <Result
        correctAnswers={correctAnswers}
        totalQuestions={TOTAL_QUESTIONS}
        answers={answers}
      />
    );
  }

  if (!quizStarted) {
    return <Intro totalQuestions={TOTAL_QUESTIONS} startQuiz={startQuiz} />;
  }

  const currentData = quizData[currentQuestion];

  return (
    <div className="quiz">
      <h1>Which one was made by a human?</h1>
      <p>Click the image you think is made by a human.</p>
      <div className="question">
        <div className="images">
          {currentData.putOriginal == "left" ? (
            <LazyImage
              onClick={() => handleAnswer("left")}
              src={currentData.src}
              alt={`Question ${currentQuestion + 1} - Image 1`}
            />
          ) : (
            <LazyImage
              onClick={() => handleAnswer("left")}
              src={currentData.srcAi}
              alt={`Question ${currentQuestion + 1} - Image 1`}
            />
          )}
          {currentData.putOriginal == "left" ? (
            <LazyImage
              onClick={() => handleAnswer("right")}
              src={currentData.srcAi}
              alt={`Question ${currentQuestion + 1} - Image 2`}
            />
          ) : (
            <LazyImage
              onClick={() => handleAnswer("right")}
              src={currentData.src}
              alt={`Question ${currentQuestion + 1} - Image 2`}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Quiz;
