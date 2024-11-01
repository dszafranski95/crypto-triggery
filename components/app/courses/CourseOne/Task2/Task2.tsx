// components/app/courses/CourseOne/Task2/Task2.tsx
import React, { useState } from 'react';
import Test2 from './Test2';

export const taskTitle = "Difference - blockain between bitcoin";


const Task2 = () => {
  const [showTest, setShowTest] = useState(false);

  const handleStartTest = () => {
    setShowTest(true);
  };

  return (
    <div className="p-8 bg-gradient-to-r from-slate-950 via-blue-900 to-slate-900 rounded-lg shadow-xl dark:bg-gray-800">
      {showTest ? (
        <Test2 />
      ) : (
        <div>
          <h2 className="text-4xl font-extrabold mb-6 text-blue-800 dark:text-white">Understanding the Difference Between Blockchain and Bitcoin</h2>
          <p className="text-lg text-gray-300 mb-6">
            Think of blockchain as a road or highway and Bitcoin as one type of car that drives on this road. Blockchain is the underlying technology – a system or platform that allows various "vehicles" to travel on it. Bitcoin was the first car ever made for this specific road, but it’s not the only car that can drive on it. In fact, there are many other cars (cryptocurrencies) that use the same road (blockchain technology) but with different purposes or features.
          </p>
          <p className="text-lg text-gray-300 mb-6">
            Imagine the blockchain as a public library where everyone can check out books. Bitcoin would be one specific book in that library – it might be the most famous and widely borrowed book, but it's not the only one on the shelves. Blockchain (the library) holds and records information securely and transparently, but Bitcoin is just one "book" or "piece of information" within that library.
          </p>
          <p className="text-lg text-gray-300 mb-6">
            Another way to understand it is to think of blockchain as the internet, and Bitcoin as a popular website. The internet is the underlying technology that enables different websites to exist and function. Bitcoin was the first website that drew massive attention, but just as there are countless websites for different purposes, there are many cryptocurrencies and projects that operate on blockchain technology for different reasons.
          </p>
          <p className="text-lg text-gray-300 mb-6">
            In summary, blockchain is the foundational technology – a digital, decentralized ledger that records information transparently and securely. Bitcoin is just one application of that technology – a specific cryptocurrency that uses blockchain to enable digital transactions. While Bitcoin was the first use of blockchain, many other cryptocurrencies and decentralized applications now use blockchain technology, each with its own unique purpose.
          </p>
          
          <button
            onClick={handleStartTest}
            className="mt-6 px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition-all duration-200 ease-in-out"
          >
            Start Test
          </button>
        </div>
      )}
    </div>
  );
};

export default Task2;
