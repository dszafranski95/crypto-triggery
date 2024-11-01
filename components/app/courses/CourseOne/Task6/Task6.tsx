// crypto-triggery/components/app/courses/CourseOne/Task6/Task6.tsx
import React, { useState } from 'react';
import Test6 from './Test6';

export const taskTitle = "Understanding Centralization vs. Decentralization";


const Task6 = () => {
  const [showTest, setShowTest] = useState(false);

  const handleStartTest = () => {
    setShowTest(true);
  };

  return (
    <div className="p-8 bg-gradient-to-r from-slate-950 via-blue-900 to-slate-900 rounded-lg shadow-xl dark:bg-gray-800">
      {showTest ? (
        <Test6 />
      ) : (
        <>
          <h2 className="text-4xl font-extrabold mb-6 text-blue-800 dark:text-white">
            Understanding Centralization vs. Decentralization
          </h2>
          
          <p className="text-lg text-gray-300 mb-6">
            To understand the difference between centralization and decentralization, think of them like different ways of managing and sharing information or control. Let’s break it down with some simple examples.
          </p>

          <section className="mb-6">
            <h3 className="text-3xl font-semibold text-blue-700 mb-4 dark:text-blue-300">Centralization: The One-Stop Shop</h3>
            <p className="text-gray-300 mb-4">
              Imagine a central bank. It’s like a big, central store that holds all the money and decides the rules for everyone. In this system, a single entity (the bank) is in control. If you want to deposit or withdraw money, you have to go through that one central bank.
            </p>
            <p className="text-gray-300 mb-4">
              Centralized systems work similarly: one central authority or organization manages and controls the entire system. This is how traditional banks, companies, and even some governments operate. They’re the gatekeepers who make the rules, store the data, and control access.
            </p>
            <p className="text-gray-300 mb-4">
              In a centralized system, if the central authority fails or makes a mistake, it affects everyone who depends on it. Think of it like a single traffic light controlling a busy intersection. If the light breaks, everyone gets stuck or chaos ensues.
            </p>
          </section>

          <section className="mb-6">
            <h3 className="text-3xl font-semibold text-blue-700 mb-4 dark:text-blue-300">Decentralization: The Power of Many</h3>
            <p className="text-gray-300 mb-4">
              Now, imagine a community where every person has their own store, and people trade directly with each other. There’s no central store or authority—people trust each other and follow agreed-upon rules. This is similar to decentralization.
            </p>
            <p className="text-gray-300 mb-4">
              In a decentralized system, there isn’t a single entity in control. Instead, many individuals (or computers, called nodes) hold copies of the information and share control. This is how blockchain works—every participant has a copy of the transaction ledger, and decisions are made collectively.
            </p>
            <p className="text-gray-300 mb-4">
              Decentralization is like having multiple traffic lights at an intersection that coordinate with each other. Even if one light fails, the others continue to function, allowing traffic to keep moving. It’s more resilient and doesn’t rely on one single point of control.
            </p>
          </section>

          <section className="mb-6">
            <h3 className="text-3xl font-semibold text-blue-700 mb-4 dark:text-blue-300">Why Decentralization Matters in Crypto</h3>
            <p className="text-gray-300 mb-4">
              In the world of cryptocurrency, decentralization is key. Instead of relying on a bank to manage your money, cryptocurrencies like Bitcoin and Ethereum allow people to hold and transfer funds without needing a central authority. Every transaction is verified by a network of users (nodes), making it secure and transparent.
            </p>
            <p className="text-gray-300 mb-4">
              With decentralization, power is spread across the network. It means that no one person or organization has control over the entire system. This reduces the risk of corruption, censorship, or failure due to a single point of weakness.
            </p>
          </section>

          <section className="mb-6">
            <h3 className="text-3xl font-semibold text-blue-700 mb-4 dark:text-blue-300">Examples of Centralized vs. Decentralized Systems</h3>
            <p className="text-gray-300 mb-4">
              - **Centralized**: Social media platforms like Facebook and Instagram, where the company owns the data and controls the content.
            </p>
            <p className="text-gray-300 mb-4">
              - **Decentralized**: Bitcoin, where there’s no central bank controlling the currency. Instead, transactions are verified by the network and recorded on a shared ledger.
            </p>
          </section>

          <p className="text-lg text-gray-300 mb-6">
            In summary, centralization is like one big store with a single manager, while decentralization is like a marketplace where everyone owns their own stall and follows community rules. Decentralized systems are generally more transparent, resilient, and resistant to control by a single entity.
          </p>
          
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

export default Task6;
