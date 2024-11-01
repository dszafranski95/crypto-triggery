// components/app/courses/CourseOne/Task5/Task5.tsx
import React, { useState } from 'react';
import Test5 from './Test5';
import Image from 'next/image';

export const taskTitle = "Difference Between Traditional Banks and Blockchain";


const Task5 = () => {
  const [showTest, setShowTest] = useState(false);

  const handleStartTest = () => {
    setShowTest(true);
  };

  return (
    <div className="p-8 bg-gradient-to-r from-slate-950 via-blue-900 to-slate-900 rounded-lg shadow-xl dark:bg-gray-800">
      {showTest ? (
        <Test5 />
      ) : (
        <>
          <h2 className="text-4xl font-extrabold mb-6 text-blue-800 dark:text-white text-center">
            Understanding the Difference Between Traditional Banks and Blockchain
          </h2>
          <Image
            src="/images/blockchain/rn7q1she3ei61.webp" // Update this to the correct path for your image
            alt="Blockchain vs Banks illustration"
            width={800}
            height={400}
            objectFit="contain"
            className="rounded-lg mb-6"
          />
          <p className="text-lg text-gray-300 mb-6">
            This section explains the core difference between a traditional banking (centralized) system and the decentralized nature of blockchain. Let's break it down using simple metaphors.
          </p>

          <section className="mb-6">
            <h3 className="text-3xl font-semibold text-blue-700 mb-4 dark:text-blue-300">
              Traditional Approach: Centralized System (like a Bank)
            </h3>
            <p className="text-gray-300 mb-4">
              Imagine a traditional bank as a <span className="font-bold">giant, secure vault</span> inside a bank building. This vault stores all records, such as account balances, transactions, and loans. Only the bank has the key, which means it controls access and modifications to these records.
            </p>
            <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
              <li>
                <span className="font-bold">Single Source of Truth:</span> The bank is the sole authority. All customers must trust the bank to manage records accurately and securely.
              </li>
              <li>
                <span className="font-bold">Centralized Control:</span> If the bank’s systems are hacked or go offline, no one can access their funds, and trust in the system can be compromised.
              </li>
              <li>
                <span className="font-bold">Trust-Based:</span> You rely on the bank to keep your information secure, accurate, and private.
              </li>
            </ul>
          </section>

          <section className="mb-6">
            <h3 className="text-3xl font-semibold text-blue-700 mb-4 dark:text-blue-300">
              Blockchain Approach: Decentralized System
            </h3>
            <p className="text-gray-300 mb-4">
              Now, imagine if <span className="font-bold">everyone had a copy of the vault</span> in their own home. Every time a transaction occurs, everyone updates their vault simultaneously. This way, even if one person’s vault is compromised, the others remain intact and ensure the records are still accurate.
            </p>
            <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
              <li>
                <span className="font-bold">Distributed Copies:</span> Every participant in the blockchain network has a full copy of the transaction records, meaning there's no central point of failure.
              </li>
              <li>
                <span className="font-bold">No Central Control:</span> There's no need to trust a single organization. Instead, trust is spread across the entire network. If one record is tampered with, the other copies will detect the discrepancy.
              </li>
              <li>
                <span className="font-bold">Transparency and Security:</span> Since everyone has a copy, it’s nearly impossible to alter a record without everyone else noticing, which makes the system highly secure and transparent.
              </li>
            </ul>
          </section>

          <section className="mb-6">
            <h3 className="text-3xl font-semibold text-blue-700 mb-4 dark:text-blue-300">
              Key Analogy: A Group Project
            </h3>
            <p className="text-gray-300 mb-4">
              Imagine you're working on a group project with friends. In the traditional bank approach, one friend (let's call them Alex) has the only copy of the project document. Everyone must trust Alex to update it, share it as needed, and not lose it. If Alex’s computer crashes or if they accidentally delete the file, the whole project could be lost.
            </p>
            <p className="text-gray-300 mb-4">
              In the blockchain approach, <span className="font-bold">each friend has their own identical copy</span> of the project. Every time someone makes a change, everyone else automatically updates their copy, ensuring consistency. If one person's file is lost, the project is safe because others have copies.
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

export default Task5;
