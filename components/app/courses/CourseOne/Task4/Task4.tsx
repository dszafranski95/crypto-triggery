// components/app/courses/CourseOne/Task4/Task4.tsx
import React, { useState } from 'react';
import Test4 from './Test4';

export const taskTitle = "Difference Between Coins and Tokens";


const Task4 = () => {
  const [showTest, setShowTest] = useState(false);

  const handleStartTest = () => {
    setShowTest(true);
  };

  return (
    <div className="p-8 bg-gradient-to-r from-slate-950 via-blue-900 to-slate-900 rounded-lg shadow-xl dark:bg-gray-800">
      {showTest ? (
        <Test4 />
      ) : (
        <>
          <h2 className="text-4xl font-extrabold mb-6 text-blue-800 dark:text-white">
            Understanding the Difference Between Coins and Tokens
          </h2>
          <p className="text-lg text-gray-300 mb-6">
            In the world of cryptocurrencies, there's often confusion between coins and tokens. Here’s a simple breakdown to help understand the difference:
          </p>

          <section className="mb-6">
            <h3 className="text-3xl font-semibold text-blue-700 mb-4 dark:text-blue-300">1. Coins: Independent Currencies with Their Own Roads</h3>
            <p className="text-gray-300 mb-4">
              Think of coins as independent cities that have built their own roads, power supplies, and infrastructure from scratch. Each of these "cities" represents a standalone blockchain that operates independently and has its own set of rules and goals. Some well-known examples include Bitcoin, Ethereum, and Cardano.
            </p>
            <p className="text-gray-300 mb-4">
              <strong>Bitcoin:</strong> This is like the first city with its own infrastructure, acting as digital “gold” for trading or saving. 
            </p>
            <p className="text-gray-300 mb-4">
              <strong>Ethereum:</strong> A city with roads that support various applications, not just digital money.
            </p>
            <p className="text-gray-300 mb-4">
              <strong>Altcoins:</strong> Coins that are alternatives to Bitcoin, such as Litecoin (faster) and Cardano (eco-friendly).
            </p>
          </section>

          <section className="mb-6">
            <h3 className="text-3xl font-semibold text-blue-700 mb-4 dark:text-blue-300">2. Tokens: Digital Passes Within a Larger Ecosystem</h3>
            <p className="text-gray-300 mb-4">
              Tokens are like digital passes or event tickets that operate inside a larger city (blockchain). They don’t have their own infrastructure but use that of a bigger city.
            </p>
            <p className="text-gray-300 mb-4">
              <strong>Example:</strong> Uniswap (UNI) and Tether (USDT) are tokens on Ethereum, using Ethereum's infrastructure without needing their own blockchains.
            </p>
          </section>

          <section className="mb-6">
            <h3 className="text-3xl font-semibold text-blue-700 mb-4 dark:text-blue-300">3. Smart Contracts: Automated Digital Agreements</h3>
            <p className="text-gray-300 mb-4">
              Think of smart contracts as digital vending machines. They automatically execute agreements when specific conditions are met, eliminating intermediaries.
            </p>
            <p className="text-gray-300 mb-4">
              <strong>Example:</strong> In a rental contract, you pay, and the smart contract automatically grants access to the property without needing a middleman.
            </p>
          </section>

          <button
            onClick={handleStartTest}
            className="mt-6 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-lg shadow-lg hover:shadow-xl hover:bg-blue-700 transition-all duration-200 ease-in-out"
          >
            Proceed to Test
          </button>
        </>
      )}
    </div>
  );
};

export default Task4;
