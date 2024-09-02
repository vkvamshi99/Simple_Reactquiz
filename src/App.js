import React, { useState } from "react";
import quizData from "./data/quizData.js";

function Quiz() {
  const [username, setUsername] = useState("");
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleUsernameSubmit = (e) => {
    e.preventDefault();
    setQuizStarted(true);
  };

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quizData.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      {!quizStarted ? (
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-xl text-center">
          <h1 className="text-2xl font-bold mb-4">Welcome to the Quiz</h1>
          <form onSubmit={handleUsernameSubmit}>
            <input
              type="text"
              placeholder="Enter your name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="p-2 border border-gray-300 rounded-lg w-full mb-4"
              required
            />
            <button
              type="submit"
              className="bg-blue-500 text-white p-2 rounded-lg w-full hover:bg-blue-600"
            >
              Start Quiz
            </button>
          </form>
        </div>
      ) : (
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-xl">
          {showScore ? (
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-4">Quiz Completed</h2>
              <p className="text-lg">
                {username}, you scored{" "}
                <span className="font-bold">{score}</span> out of{" "}
                <span className="font-bold">{quizData.length}</span>
              </p>
            </div>
          ) : (
            <>
              <div className="mb-6">
                <div className="text-sm text-gray-600 mb-2">
                  Question {currentQuestion + 1} of {quizData.length}
                </div>
                <div className="text-xl font-semibold text-gray-800">
                  {quizData[currentQuestion].question}
                </div>
              </div>
              <div className="grid grid-cols-1 gap-4">
                {quizData[currentQuestion].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() =>
                      handleAnswerOptionClick(
                        option === quizData[currentQuestion].correctAnswer
                      )
                    }
                    className="bg-blue-500 text-white p-4 rounded-lg hover:bg-blue-600"
                  >
                    {option}
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default Quiz;
