// crypto-triggery/components/app/courses/CourseOne/Task9/Test9.tsx
import React, { useState } from 'react';

const questions = [
  {
    id: 1,
    question: "What are gas fees in the context of cryptocurrency?",
    options: [
      "A type of fuel used for cars",
      "The cost to process transactions on the blockchain",
      "A tax charged by the government",
      "The fee for converting cryptocurrency to cash"
    ],
    correctAnswer: "The cost to process transactions on the blockchain"
  },
  {
    id: 2,
    question: "Why do gas fees exist on blockchain networks?",
    options: [
      "To increase the price of cryptocurrency",
      "To prevent network congestion and prioritize transactions",
      "To discourage people from using cryptocurrency",
      "To convert cryptocurrency into government funds"
    ],
    correctAnswer: "To prevent network congestion and prioritize transactions"
  },
  {
    id: 3,
    question: "How are gas fees calculated?",
    options: [
      "Based on the amount of cryptocurrency being sent",
      "Based on the amount of gas needed and the price per unit of gas",
      "By the government",
      "They are always a fixed amount"
    ],
    correctAnswer: "Based on the amount of gas needed and the price per unit of gas"
  },
  {
    id: 4,
    question: "What is a 'gas limit'?",
    options: [
      "The maximum amount of gas you're willing to spend on a transaction",
      "The minimum amount of gas required for each transaction",
      "The amount of gas available on the blockchain",
      "The price of gas set by the government"
    ],
    correctAnswer: "The maximum amount of gas you're willing to spend on a transaction"
  },
  {
    id: 5,
    question: "If gas fees are high, what can you do to save on fees?",
    options: [
      "Wait for less busy times on the network",
      "Always pay the highest possible fee",
      "Set a low gas limit without considering network demand",
      "Send multiple transactions to reduce fees"
    ],
    correctAnswer: "Wait for less busy times on the network"
  }
];

const Test9 = ({ onSuccess }) => {
  const [userAnswers, setUserAnswers] = useState({});
  const [results, setResults] = useState({});
  const [allCorrect, setAllCorrect] = useState(false);

  const handleOptionChange = (questionId, option) => {
    setUserAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: option,
    }));
  };

  const handleSubmit = (questionId) => {
    const question = questions.find((q) => q.id === questionId);
    const isCorrect = userAnswers[questionId] === question.correctAnswer;

    setResults((prevResults) => ({
      ...prevResults,
      [questionId]: isCorrect,
    }));

    // Check if all questions are answered correctly
    const allAnswersCorrect = questions.every(
      (q) => results[q.id] || (q.id === questionId && isCorrect)
    );
    setAllCorrect(allAnswersCorrect);
  };

  return (
    <div className="p-8 bg-gradient-to-r from-slate-950 via-blue-900 to-slate-900 rounded-lg shadow-xl dark:bg-gray-800">
      <h2 className="text-4xl font-extrabold text-center text-blue-800 dark:text-white mb-8">Test Your Knowledge: Gas Fees</h2>
      {questions.map((question) => (
        <div key={question.id} className="mb-6 p-4 bg-slate-800 rounded-lg shadow-md">
          <p className="text-lg font-semibold text-white mb-4">{question.question}</p>
          <div className="space-y-2">
            {question.options.map((option, index) => (
              <label key={index} className="block text-gray-300">
                <input
                  type="radio"
                  name={`question-${question.id}`}
                  value={option}
                  checked={userAnswers[question.id] === option}
                  onChange={() => handleOptionChange(question.id, option)}
                  className="mr-2"
                />
                {option}
              </label>
            ))}
          </div>
          <button
            onClick={() => handleSubmit(question.id)}
            className="mt-4 px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-200"
          >
            Submit Answer
          </button>
          {results[question.id] !== undefined && (
            <p className={`mt-4 font-semibold ${results[question.id] ? 'text-green-400' : 'text-red-400'}`}>
              {results[question.id] ? 'Correct!' : 'Incorrect, please try again.'}
            </p>
          )}
        </div>
      ))}
      <button
        onClick={onSuccess}
        className={`mt-8 px-6 py-3 w-full text-lg font-bold text-white rounded-lg shadow-lg transition duration-200 ${
          allCorrect ? 'bg-green-600 hover:bg-green-700' : 'bg-gray-500 cursor-not-allowed'
        }`}
        disabled={!allCorrect}
      >
        Complete Task and Proceed
      </button>
    </div>
  );
};

export default Test9;
