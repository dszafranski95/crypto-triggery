// crypto-triggery\components\app\courses\CourseOne\Task4\Test4.tsx
// crypto-triggery\components\app\courses\CourseOne\Task4\Test4.tsx
import React, { useState } from 'react';

const questions = [
  { id: 1, question: "What is a cryptocurrency coin?", correctAnswer: "Independent currency with its own blockchain" },
  { id: 2, question: "What is a token?", correctAnswer: "A digital pass that operates on an existing blockchain" },
  { id: 3, question: "What is an altcoin?", correctAnswer: "An alternative to Bitcoin" },
  { id: 4, question: "Give an example of a cryptocurrency that acts like digital gold.", correctAnswer: "Bitcoin" },
  { id: 5, question: "Which cryptocurrency platform supports a variety of applications, not just digital money?", correctAnswer: "Ethereum" },
  { id: 6, question: "What does a smart contract do?", correctAnswer: "Automatically executes agreements based on conditions" },
  { id: 7, question: "What is a practical example of a smart contract?", correctAnswer: "Digital rental agreement" },
  { id: 8, question: "Name a token that operates on the Ethereum blockchain.", correctAnswer: "Uniswap" },
  { id: 9, question: "Do tokens have their own blockchain?", correctAnswer: "No" },
  { id: 10, question: "Why are smart contracts important?", correctAnswer: "They eliminate intermediaries and automate processes" },
];

const Test4 = ({ onSuccess }) => {
  const [answers, setAnswers] = useState({});
  const [results, setResults] = useState({});
  const [allCorrect, setAllCorrect] = useState(false);

  const handleInputChange = (questionId, value) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: value,
    }));
  };

  const handleSubmit = (questionId) => {
    const question = questions.find((q) => q.id === questionId);
    const isCorrect = answers[questionId]?.trim().toLowerCase() === question.correctAnswer.toLowerCase();

    setResults((prevResults) => ({
      ...prevResults,
      [questionId]: isCorrect,
    }));

    // Check if all questions have been answered correctly
    if (Object.values({ ...results, [questionId]: isCorrect }).every((result) => result)) {
      setAllCorrect(true);
    }
  };

  const handleGoNext = () => {
    if (allCorrect) {
      onSuccess();
    }
  };

  return (
    <div className="p-10 bg-gradient-to-r from-slate-950 via-blue-900 to-slate-900 rounded-lg shadow-xl dark:bg-gray-800">
      <h2 className="text-4xl font-extrabold text-center text-white mb-8">Test for Understanding Coins, Tokens, and Smart Contracts</h2>
      
      {questions.map((question) => (
        <div key={question.id} className="mb-8 p-6 bg-gradient-to-r from-blue-800 to-blue-600 rounded-lg shadow-md text-white">
          <p className="text-2xl font-semibold mb-4">{question.question}</p>
          
          <input
            type="text"
            value={answers[question.id] || ''}
            onChange={(e) => handleInputChange(question.id, e.target.value)}
            className="w-full px-4 py-3 rounded-lg text-gray-900 bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
            placeholder="Type your answer here"
          />
          
          <button
            onClick={() => handleSubmit(question.id)}
            className="mt-4 px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition duration-200 shadow-lg"
          >
            Confirm Answer
          </button>

          {results[question.id] !== undefined && (
            <p className={`mt-4 font-semibold text-lg ${results[question.id] ? 'text-green-300' : 'text-red-300'}`}>
              {results[question.id] ? '✅ Correct!' : '❌ Incorrect, please try again.'}
            </p>
          )}
        </div>
      ))}

      <button
        onClick={handleGoNext}
        className={`mt-10 px-8 py-4 w-full text-lg font-bold text-white rounded-lg shadow-lg transition duration-200 ${
          allCorrect ? 'bg-green-600 hover:bg-green-700' : 'bg-gray-500 cursor-not-allowed'
        }`}
        disabled={!allCorrect}
      >
        Complete Task and Proceed
      </button>
    </div>
  );
};

export default Test4;
