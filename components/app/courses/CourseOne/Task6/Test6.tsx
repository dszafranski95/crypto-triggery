// crypto-triggery/components/app/courses/CourseOne/Task6/Test6.tsx
import React, { useState } from 'react';

const questions = [
  {
    id: 1,
    question: "What is a centralized system similar to?",
    options: ["A marketplace with many stalls", "A single, big store with one manager", "A network of independent nodes", "A community-driven platform"],
    correctAnswer: "A single, big store with one manager",
  },
  {
    id: 2,
    question: "In a decentralized system, who controls the information?",
    options: ["A central authority", "Each individual in the network", "A single organization", "The government"],
    correctAnswer: "Each individual in the network",
  },
  {
    id: 3,
    question: "Why is decentralization important in cryptocurrency?",
    options: [
      "It allows one person to control the entire network",
      "It spreads power across the network, reducing risks of failure or corruption",
      "It makes the system slower",
      "It increases government control",
    ],
    correctAnswer: "It spreads power across the network, reducing risks of failure or corruption",
  },
  {
    id: 4,
    question: "Which of the following is an example of a decentralized system?",
    options: ["Bitcoin", "A traditional bank", "Social media platforms", "A centralized payment system"],
    correctAnswer: "Bitcoin",
  },
  {
    id: 5,
    question: "What is one potential weakness of centralized systems?",
    options: [
      "They are more resistant to corruption",
      "They rely on a single point of control, which can fail",
      "They are harder to regulate",
      "They distribute power across a network",
    ],
    correctAnswer: "They rely on a single point of control, which can fail",
  },
];

const Test6 = ({ onSuccess }) => {
  const [answers, setAnswers] = useState({});
  const [results, setResults] = useState({});
  const [allCorrect, setAllCorrect] = useState(false);

  const handleAnswerSelection = (questionId, answer) => {
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
      <h2 className="text-4xl font-extrabold text-center text-white mb-8">
        Test Your Knowledge: Centralization vs. Decentralization
      </h2>

      {questions.map((question) => (
        <div key={question.id} className="mb-8 p-6 bg-gradient-to-r from-blue-800 to-blue-600 rounded-lg shadow-md text-white">
          <p className="text-2xl font-semibold mb-4">{question.question}</p>
          <div className="space-y-2">
            {question.options.map((option) => (
              <button
                key={option}
                onClick={() => handleAnswerSelection(question.id, option)}
                className={`w-full px-4 py-3 rounded-lg text-left transition duration-200 ${
                  answers[question.id] === option
                    ? 'bg-blue-500 text-white shadow-md'
                    : 'bg-blue-400 text-blue-100 hover:bg-blue-500 hover:text-white'
                }`}
              >
                {option}
              </button>
            ))}
          </div>
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

export default Test6;
