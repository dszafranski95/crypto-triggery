// components/app/courses/CourseOne/Task2/Test2.tsx
import React, { useState } from 'react';

const questions = [
  { id: 1, question: "What is the main difference between blockchain and Bitcoin?", correctAnswer: "Blockchain is the technology, Bitcoin is a cryptocurrency" },
  { id: 2, question: "What metaphor describes blockchain as a road?", correctAnswer: "Highway" },
  { id: 3, question: "In the library metaphor, what does Bitcoin represent?", correctAnswer: "A book" },
  { id: 4, question: "What is blockchain often compared to in the context of the internet?", correctAnswer: "The internet" },
  { id: 5, question: "Is Bitcoin the only use of blockchain?", correctAnswer: "No" },
  { id: 6, question: "Which came first: blockchain or Bitcoin?", correctAnswer: "Blockchain" },
  { id: 7, question: "Can other cryptocurrencies besides Bitcoin use blockchain?", correctAnswer: "Yes" },
  { id: 8, question: "What role does Bitcoin play in the highway analogy?", correctAnswer: "A car" },
  { id: 9, question: "In the library analogy, what does the blockchain represent?", correctAnswer: "The library" },
  { id: 10, question: "What does Bitcoin enable within the blockchain?", correctAnswer: "Digital transactions" },
];

const Test2 = ({ onSuccess }) => {
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
      <h2 className="text-4xl font-extrabold text-center text-white mb-8">Test for Understanding Blockchain vs Bitcoin</h2>
      
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

export default Test2;
