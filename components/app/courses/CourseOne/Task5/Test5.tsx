// components/app/courses/CourseOne/Task5/Test5.tsx
import React, { useState } from 'react';

const questions = [
  {
    id: 1,
    question: "In a traditional banking system, who controls the records?",
    correctAnswer: "A central authority",
  },
  {
    id: 2,
    question: "What makes blockchain more secure compared to traditional banks?",
    correctAnswer: "Everyone has a copy of the records",
  },
  {
    id: 3,
    question: "What happens if one record in the blockchain is tampered with?",
    correctAnswer: "The other copies will detect the discrepancy",
  },
  {
    id: 4,
    question: "How is a blockchain network similar to a group project?",
    correctAnswer: "Each participant has their own copy of the document",
  },
  {
    id: 5,
    question: "What is a key advantage of blockchain's distributed copies?",
    correctAnswer: "No single point of failure",
  },
];

const Test5 = ({ onSuccess }) => {
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
    const isCorrect =
      answers[questionId]?.trim().toLowerCase() === question.correctAnswer.toLowerCase();

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
    if (allCorrect && onSuccess) {
      onSuccess();
    }
  };

  return (
    <div className="p-10 bg-gradient-to-r from-slate-950 via-blue-900 to-slate-900 rounded-lg shadow-xl dark:bg-gray-800">
      <h2 className="text-4xl font-extrabold text-center text-white mb-8">
        Test Your Knowledge: Traditional Banks vs Blockchain
      </h2>

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

export default Test5;
