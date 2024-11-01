// crypto-triggery/components/app/courses/CourseOne/Task10/Test10.tsx
import React, { useState } from 'react';

export const testTitle = "Smart Contracts and dApps Quiz";

const Test10 = ({ onBackToTask }) => {
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(null);

  const handleAnswerChange = (question, answer) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [question]: answer,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const correctAnswers = {
      1: "vending machine",
      2: "code executed on a blockchain",
      3: "Decentralized Applications",
      4: "immutable",
    };

    let score = 0;
    Object.keys(correctAnswers).forEach((question) => {
      if (answers[question] === correctAnswers[question]) {
        score += 1;
      }
    });
    setScore(score);
  };

  return (
    <div className="p-8 bg-gradient-to-r from-slate-950 via-blue-900 to-slate-900 rounded-lg shadow-xl dark:bg-gray-800">
      <h2 className="text-3xl font-extrabold mb-6 text-blue-800 dark:text-white">
        {testTitle}
      </h2>

      {score === null ? (
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-300">
              1. What analogy best explains how a smart contract works?
            </h3>
            <div>
              <label className="block text-gray-300">
                <input
                  type="radio"
                  name="question1"
                  value="bank"
                  onChange={() => handleAnswerChange(1, "bank")}
                />
                A bank with a vault
              </label>
              <label className="block text-gray-300">
                <input
                  type="radio"
                  name="question1"
                  value="vending machine"
                  onChange={() => handleAnswerChange(1, "vending machine")}
                />
                A vending machine
              </label>
              <label className="block text-gray-300">
                <input
                  type="radio"
                  name="question1"
                  value="library"
                  onChange={() => handleAnswerChange(1, "library")}
                />
                A library catalog
              </label>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-300">
              2. What is a smart contract?
            </h3>
            <div>
              <label className="block text-gray-300">
                <input
                  type="radio"
                  name="question2"
                  value="legal agreement"
                  onChange={() => handleAnswerChange(2, "legal agreement")}
                />
                A legal agreement
              </label>
              <label className="block text-gray-300">
                <input
                  type="radio"
                  name="question2"
                  value="code executed on a blockchain"
                  onChange={() => handleAnswerChange(2, "code executed on a blockchain")}
                />
                Code executed on a blockchain
              </label>
              <label className="block text-gray-300">
                <input
                  type="radio"
                  name="question2"
                  value="document storage system"
                  onChange={() => handleAnswerChange(2, "document storage system")}
                />
                A document storage system
              </label>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-300">
              3. What does “dApp” stand for?
            </h3>
            <div>
              <label className="block text-gray-300">
                <input
                  type="radio"
                  name="question3"
                  value="Digital Applications"
                  onChange={() => handleAnswerChange(3, "Digital Applications")}
                />
                Digital Applications
              </label>
              <label className="block text-gray-300">
                <input
                  type="radio"
                  name="question3"
                  value="Decentralized Applications"
                  onChange={() => handleAnswerChange(3, "Decentralized Applications")}
                />
                Decentralized Applications
              </label>
              <label className="block text-gray-300">
                <input
                  type="radio"
                  name="question3"
                  value="Data Apps"
                  onChange={() => handleAnswerChange(3, "Data Apps")}
                />
                Data Apps
              </label>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-300">
              4. Which of these describes a key feature of smart contracts?
            </h3>
            <div>
              <label className="block text-gray-300">
                <input
                  type="radio"
                  name="question4"
                  value="editable"
                  onChange={() => handleAnswerChange(4, "editable")}
                />
                Editable
              </label>
              <label className="block text-gray-300">
                <input
                  type="radio"
                  name="question4"
                  value="centralized"
                  onChange={() => handleAnswerChange(4, "centralized")}
                />
                Centralized
              </label>
              <label className="block text-gray-300">
                <input
                  type="radio"
                  name="question4"
                  value="immutable"
                  onChange={() => handleAnswerChange(4, "immutable")}
                />
                Immutable
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="mt-6 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-lg shadow-lg hover:shadow-xl hover:bg-blue-700 transition-all duration-200 ease-in-out"
          >
            Submit Answers
          </button>
        </form>
      ) : (
        <div>
          <h3 className="text-2xl font-semibold text-green-500 mb-4">
            Your Score: {score} / 4
          </h3>
          <button
            onClick={onBackToTask}
            className="mt-6 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-lg shadow-lg hover:shadow-xl hover:bg-blue-700 transition-all duration-200 ease-in-out"
          >
            Back to Task
          </button>
        </div>
      )}
    </div>
  );
};

export default Test10;
