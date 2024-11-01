// crypto-triggery/components/app/courses/CourseOne/Task8/Test8.tsx
import React, { useState } from 'react';

const questions = [
  {
    id: 1,
    question: "What is mining in the context of cryptocurrency?",
    options: [
      "A process of solving complex mathematical puzzles to validate transactions.",
      "A method to lock up funds in a wallet to earn interest.",
      "A technique to create new cryptocurrencies out of thin air.",
      "A process to increase the transaction fees on the network."
    ],
    correctAnswer: "A process of solving complex mathematical puzzles to validate transactions."
  },
  {
    id: 2,
    question: "Which of the following is true about staking?",
    options: [
      "Staking requires high computational power to solve puzzles.",
      "Staking is based on locking up a certain amount of cryptocurrency as a form of security.",
      "Staking can only be done with Bitcoin.",
      "Staking always requires physical hardware to operate."
    ],
    correctAnswer: "Staking is based on locking up a certain amount of cryptocurrency as a form of security."
  },
  {
    id: 3,
    question: "What is a major environmental benefit of staking over mining?",
    options: [
      "Staking generates more electricity.",
      "Staking consumes far less energy compared to mining.",
      "Staking requires more powerful computers than mining.",
      "Staking is only performed by individuals in rural areas."
    ],
    correctAnswer: "Staking consumes far less energy compared to mining."
  },
  {
    id: 4,
    question: "Why did Ethereum transition from Proof of Work to Proof of Stake?",
    options: [
      "To reduce its energy consumption.",
      "To make transactions slower.",
      "To increase the amount of computational power required.",
      "To increase the transaction fees on the network."
    ],
    correctAnswer: "To reduce its energy consumption."
  },
  {
    id: 5,
    question: "In Proof of Stake, what determines who gets to validate the next block?",
    options: [
      "The amount of cryptocurrency they have staked.",
      "The speed of their computer.",
      "The number of puzzles they solve.",
      "The length of time they have held the cryptocurrency."
    ],
    correctAnswer: "The amount of cryptocurrency they have staked."
  }
];

const Test8 = ({ onSuccess }) => {
  const [answers, setAnswers] = useState({});
  const [results, setResults] = useState({});
  const [allCorrect, setAllCorrect] = useState(false);

  const handleSelectAnswer = (questionId, answer) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: answer,
    }));
  };

  const handleSubmit = (questionId) => {
    const question = questions.find((q) => q.id === questionId);
    const isCorrect = answers[questionId] === question.correctAnswer;

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
      <h2 className="text-4xl font-extrabold text-center text-white mb-8">Test on Mining and Staking</h2>
      
      {questions.map((question) => (
        <div key={question.id} className="mb-8 p-6 bg-gradient-to-r from-blue-800 to-blue-600 rounded-lg shadow-md text-white">
          <p className="text-2xl font-semibold mb-4">{question.question}</p>
          
          {question.options.map((option) => (
            <div key={option} className="mb-2">
              <label className="flex items-center space-x-3">
                <input
                  type="radio"
                  name={`question-${question.id}`}
                  value={option}
                  checked={answers[question.id] === option}
                  onChange={() => handleSelectAnswer(question.id, option)}
                  className="form-radio h-5 w-5 text-blue-500"
                />
                <span className="text-lg text-gray-200">{option}</span>
              </label>
            </div>
          ))}

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

export default Test8;
