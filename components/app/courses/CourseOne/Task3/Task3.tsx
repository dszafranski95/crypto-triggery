// components/app/courses/CourseOne/Task3/Task3.tsx
import React, { useState } from 'react';
import Test3 from './Test3';
import Image from 'next/image';

export const taskTitle = "How blockchain transactions work";


const Task3 = () => {
  const [showTest, setShowTest] = useState(false);

  const handleStartTest = () => {
    setShowTest(true);
  };

  return (
    <div className="p-8 bg-gradient-to-r from-slate-950 via-blue-900 to-slate-900 rounded-lg shadow-xl dark:bg-gray-800">
      {showTest ? (
        <Test3 />
      ) : (
        <>
          <h2 className="text-4xl font-extrabold mb-6 text-blue-800 dark:text-white">
            How Blockchain Transactions Work
          </h2>
          <Image
  src="/images/blockchain/4a0lycj3ydi61.webp"
  alt="Blockchain illustration"
  width={800} // Set your desired width
  height={400} // Set your desired height
  objectFit="contain" // Keeps the image's aspect ratio
  className="rounded-lg"
/>
          <p className="text-lg text-gray-300 mb-6">
            Here’s a step-by-step guide to how a transaction works in blockchain:
          </p>

          <section className="mb-6">
            <h3 className="text-3xl font-semibold text-blue-700 mb-4 dark:text-blue-300">1. Initiating a Transaction</h3>
            <p className="text-gray-300 mb-4">
              A user initiates a transaction, which could be the transfer of funds or another type of data to be recorded on the blockchain.
            </p>
          </section>

          <section className="mb-6">
            <h3 className="text-3xl font-semibold text-blue-700 mb-4 dark:text-blue-300">2. Creating a Transaction Block</h3>
            <p className="text-gray-300 mb-4">
              After initiation, the transaction is bundled into a block. This block represents the transaction and includes essential information such as sender and receiver details, and the amount involved.
            </p>
          </section>

          <section className="mb-6">
            <h3 className="text-3xl font-semibold text-blue-700 mb-4 dark:text-blue-300">3. Distributing the Block</h3>
            <p className="text-gray-300 mb-4">
              The block is then sent to all nodes (computers) in the blockchain network. Each node receives a copy of the block so that validation can begin.
            </p>
          </section>

          <section className="mb-6">
            <h3 className="text-3xl font-semibold text-blue-700 mb-4 dark:text-blue-300">4. Validating the Transaction</h3>
            <p className="text-gray-300 mb-4">
              Nodes (participants in the network) validate the transaction to ensure it complies with blockchain protocols. This validation process might involve methods like Proof of Work (PoW), where nodes solve complex mathematical problems to confirm the transaction.
            </p>
          </section>

          <section className="mb-6">
            <h3 className="text-3xl font-semibold text-blue-700 mb-4 dark:text-blue-300">5. Rewarding Validators</h3>
            <p className="text-gray-300 mb-4">
              Nodes that successfully validate the transaction are rewarded. Rewards are often given in cryptocurrency, incentivizing network participants to help verify transactions.
            </p>
          </section>

          <section className="mb-6">
            <h3 className="text-3xl font-semibold text-blue-700 mb-4 dark:text-blue-300">6. Adding the Block to the Chain</h3>
            <p className="text-gray-300 mb-4">
              Once validated, the block is added to the existing blockchain. This step makes the transaction permanent and tamper-proof, ensuring it’s securely recorded.
            </p>
          </section>

          <section className="mb-6">
            <h3 className="text-3xl font-semibold text-blue-700 mb-4 dark:text-blue-300">7. Completing the Transaction</h3>
            <p className="text-gray-300 mb-4">
              After the block is added to the chain, the transaction is officially complete. All network participants can now see that the transaction occurred and that its data is secure and immutable.
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

export default Task3;
