// components/courses/CourseOne/Task1/Task1.tsx
import React, { useState } from 'react';
import Test1 from './Test1';
import Task2 from '../Task2/Task2';
import Image from 'next/image';

export const taskTitle = "Understanding Blockchain";


const Task1 = () => {
  const [showTest, setShowTest] = useState(false);
  const [goToTask2, setGoToTask2] = useState(false);

  const handleStartTest = () => {
    setShowTest(true);
  };

  const handleGoToNextTask = () => {
    setGoToTask2(true);
  };

  return (
    <div className="p-8 bg-gradient-to-r from-slate-950 via-blue-900 to-slate-900 rounded-lg shadow-lg dark:bg-gray-800">
      {goToTask2 ? (
        <Task2 />
      ) : (
        <>
          {!showTest ? (
            <div>
              <h2 className="text-4xl font-extrabold mb-6 text-blue-800 dark:text-white text-center">Understanding Blockchain</h2>
                            {/* Display the image below the heading */}
                            <div className="relative w-full h-64 mb-6">
                            <Image
  src="/images/blockchain/90302d46-f081-47ac-ab92-6c3bc719f334.webp"
  alt="Blockchain illustration"
  width={800} // Set your desired width
  height={400} // Set your desired height
  objectFit="contain" // Keeps the image's aspect ratio
  className="rounded-lg"
/>
              </div>

              <p className="text-lg text-gray-800 dark:text-gray-300 mb-6 pt-5">
                Blockchain is a type of decentralized ledger – an open book accessible to everyone where transactions are recorded, but not controlled by a single institution. Think of it as a public book that anyone can view, but no one can alter or erase.
              </p>
              
              <section className="mb-6">
                <h3 className="text-3xl font-semibold text-blue-700 mb-4 dark:text-blue-300">What Are Blocks and How Do They Work?</h3>
                <p className="text-gray-800 dark:text-gray-300 mb-4">
                  Blockchain is made up of blocks, which are like pages in this public ledger. Each page contains a list of transactions, such as "Account AAA transferred 100 units to Account BBB." Each transaction is digitally signed by the account owner, ensuring that only they could authorize it. Unlike in traditional banking, where a bank confirms transactions, blockchain eliminates the need for a central intermediary.
                </p>
                <p className="text-gray-800 dark:text-gray-300 mb-4">
                  Each block has a "signature" of the previous block, forming an unbroken chain – hence the term "blockchain." It functions like pages in a ledger, with each referencing the last, making the whole chain unbreakable. Even the smallest change in one block would affect the entire chain, making tampering virtually impossible.
                </p>
              </section>

              <section className="mb-6">
                <h3 className="text-3xl font-semibold text-blue-700 mb-4 dark:text-blue-300">What Security Measures Does Blockchain Use?</h3>
                <p className="text-gray-800 dark:text-gray-300 mb-4">
                  Blockchain security relies on complex mathematics and cryptography. Each transaction has a digital signature, acting like a "fingerprint" unique to that transaction. This allows others in the network to verify that the account owner authorized the transaction. Blockchain enforces these rules automatically, meaning any attempt to cheat would be immediately detected by other participants.
                </p>
              </section>

              <section className="mb-6">
                <h3 className="text-3xl font-semibold text-blue-700 mb-4 dark:text-blue-300">Blockchain as a Decentralized System</h3>
                <p className="text-gray-800 dark:text-gray-300 mb-4">
                  In traditional finance, a single institution like a bank maintains the ledger and controls transactions. Blockchain works differently – every network participant can hold a copy of the ledger and verify transactions. No one "owns" the system, making blockchain decentralized. Each participant acts like a "notary," witnessing and verifying transactions according to the rules.
                </p>
              </section>

              <section className="mb-6">
                <h3 className="text-3xl font-semibold text-blue-700 mb-4 dark:text-blue-300">How Are New Blocks Added?</h3>
                <p className="text-gray-800 dark:text-gray-300 mb-4">
                  Adding new blocks to the blockchain requires specific mechanisms to prevent chaos and ensure smooth operation. Two main methods are:
                </p>
                <ul className="list-disc list-inside text-gray-800 dark:text-gray-300 mb-4 space-y-2">
                  <li>
                    <strong>Proof of Work</strong> – This method involves solving complex mathematical puzzles. To add a new block, a computer must solve a complicated equation, requiring time and resources. This puzzle-solving ensures blocks are added at a controlled rate, maintaining order. Those who solve the puzzles are rewarded with cryptocurrency for their effort.
                  </li>
                  <li>
                    <strong>Proof of Stake</strong> – Instead of solving puzzles, participants adding new blocks must hold a significant amount of cryptocurrency within the system. The more units they own, the more rights they have to add new blocks. This motivates them to keep the system secure since they have a financial "stake" in it.
                  </li>
                </ul>
              </section>

              <section className="mb-6">
                <h3 className="text-3xl font-semibold text-blue-700 mb-4 dark:text-blue-300">Blockchain as a System of Social Trust</h3>
                <p className="text-gray-800 dark:text-gray-300 mb-4">
                  Blockchain works somewhat like a community of people collectively ensuring the system’s integrity. Imagine a group maintaining a shared ledger accessible to everyone, where each entry can be verified. Even if someone tries to cheat, other participants would notice and reject the fraudulent entry. This makes blockchain a trust system that doesn't rely on intermediaries.
                </p>
              </section>

              <section className="mb-6">
                <h3 className="text-3xl font-semibold text-blue-700 mb-4 dark:text-blue-300">Differences Between Blockchain and Typical Databases</h3>
                <p className="text-gray-800 dark:text-gray-300 mb-4">
                  In a typical database, only one person or entity controls access to the information and can modify it. In blockchain, once data is added, it’s immutable – it can’t be changed or removed, as it’s stored in a distributed system accessible to all participants. It’s like carving each piece of data in stone; once it’s there, it’s permanent and unalterable.
                </p>
              </section>

              <section className="mb-6">
                <h3 className="text-3xl font-semibold text-blue-700 mb-4 dark:text-blue-300">Practical Applications of Blockchain</h3>
                <p className="text-gray-800 dark:text-gray-300 mb-4">
                  Blockchain can be used not only for cryptocurrency but also for managing various assets, such as stocks, software licenses, and copyrights. For example, in a courier company, blockchain could track each package at every stage of its journey, ensuring complete transparency. Anyone could see where the package is, reducing the risk of loss and enabling quicker issue resolution.
                </p>
              </section>

              <section className="mb-6">
                <h3 className="text-3xl font-semibold text-blue-700 mb-4 dark:text-blue-300">Why is Blockchain Considered a Technology of the Future?</h3>
                <p className="text-gray-800 dark:text-gray-300 mb-4">
                  Blockchain could be transformative because it increases security, transparency, and reduces costs. It makes financial and administrative processes cheaper, faster, and less dependent on central institutions. Blockchain allows systems to function without relying on a single institution, which is essential in an era of increasing privacy concerns and a desire for autonomy.
                </p>
              </section>

              <section className="mb-6">
                <h3 className="text-3xl font-semibold text-blue-700 mb-4 dark:text-blue-300">Blockchain as a Digital Archive of Trust</h3>
                <p className="text-gray-800 dark:text-gray-300 mb-4">
                  Blockchain is a digital archive that guarantees all transactions are authentic. Each transaction is digitally confirmed and visible to all – like a unique "digital fingerprint" guaranteeing its validity. This provides an unprecedented level of reliability.
                </p>
              </section>

              <section className="mb-6">
                <h3 className="text-3xl font-semibold text-blue-700 mb-4 dark:text-blue-300">Challenges of Blockchain</h3>
                <p className="text-gray-800 dark:text-gray-300 mb-4">
                  Blockchain has its challenges. Proof of Work is energy-intensive and has environmental impacts. Although alternatives like Proof of Stake are more efficient, ongoing development aims to make blockchain even more eco-friendly and scalable. Optimizing this technology is essential for its future growth and adoption.
                </p>
              </section>

              <p className="text-lg text-gray-800 dark:text-gray-300 mb-6">
                In summary, blockchain is an immutable, decentralized ledger where participants can add new entries (transactions) by following established rules. Every new entry is visible to all and secured through cryptography. Blockchain offers a revolutionary approach to storing and transferring data – it’s secure, transparent, and independent, making it a potential technology of the future across various fields.
              </p>
              
              <button
                onClick={handleStartTest}
                className="mt-4 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-lg shadow-lg hover:shadow-xl hover:bg-blue-700 transition-all duration-200 ease-in-out"
              >
                Start Test
              </button>
            </div>
          ) : (
            <Test1 onSuccess={handleGoToNextTask} />
          )}
        </>
      )}
    </div>
  );
};

export default Task1;
