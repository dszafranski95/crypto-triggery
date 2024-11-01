// crypto-triggery/components/app/courses/CourseOne/Task8/Task8.tsx
import React, { useState } from 'react';
import Test8 from './Test8';

export const taskTitle = "Introduction to Mining and Staking";

const Task8 = () => {
  const [showTest, setShowTest] = useState(false);

  const handleStartTest = () => {
    setShowTest(true);
  };

  return (
    <div className="p-8 bg-gradient-to-r from-slate-950 via-blue-900 to-slate-900 rounded-lg shadow-xl dark:bg-gray-800">
      {showTest ? (
        <Test8 />
      ) : (
        <>
          <h2 className="text-4xl font-extrabold mb-6 text-blue-800 dark:text-white">
            Introduction to Mining and Staking
          </h2>
          <p className="text-lg text-gray-300 mb-6">
            When it comes to cryptocurrencies, new transactions need to be validated and recorded on the blockchain. But who does the validation, and how are they rewarded? This is where mining and staking come in – two different methods used to secure networks and confirm transactions.
          </p>

          <section className="mb-6">
            <h3 className="text-3xl font-semibold text-blue-700 mb-4 dark:text-blue-300">1. Mining (Proof of Work)</h3>
            <p className="text-gray-300 mb-4">
              Imagine mining as a puzzle-solving competition. In the Proof of Work (PoW) system, like the one Bitcoin uses, computers (called "miners") compete to solve complex mathematical puzzles. These puzzles require a lot of computational power, like running on a treadmill set at high speed. The first miner to solve the puzzle gets to add a new block of transactions to the blockchain and earns a reward – usually in the form of cryptocurrency.
            </p>
            <p className="text-gray-300 mb-4">
              Think of miners as security guards, each working hard to secure the network. Only the guard who finishes their "puzzle" first gets paid, but their effort benefits everyone by keeping the network safe and reliable.
            </p>
            <p className="text-gray-300 mb-4">
              <strong>Why is it called "Proof of Work"?</strong> Because miners have to "prove" they did the work (solving the puzzle) to earn the reward. This method is energy-intensive because miners consume a lot of power to solve puzzles. That’s why you might hear concerns about the environmental impact of mining.
            </p>
          </section>

          <section className="mb-6">
            <h3 className="text-3xl font-semibold text-blue-700 mb-4 dark:text-blue-300">2. Staking (Proof of Stake)</h3>
            <p className="text-gray-300 mb-4">
              Staking is a bit different. Instead of solving puzzles, Proof of Stake (PoS) relies on users “staking” or locking up a certain amount of cryptocurrency they own to participate in the network. Think of it as a lottery where, instead of buying tickets, participants lock up some of their assets for a chance to be chosen to validate a block of transactions.
            </p>
            <p className="text-gray-300 mb-4">
              Imagine a bank vault where people deposit their money for safekeeping. The bank chooses a few people with high deposits to help secure and manage the vault. In return, those people earn interest on their deposits. Similarly, stakers earn rewards for helping secure the network by putting their crypto at stake.
            </p>
            <p className="text-gray-300 mb-4">
              <strong>Why is it called "Proof of Stake"?</strong> Because users must "prove" they have staked a certain amount of cryptocurrency to participate in the validation process. Unlike PoW, staking is energy-efficient because it doesn’t require intensive calculations.
            </p>
          </section>

          <section className="mb-6">
            <h3 className="text-3xl font-semibold text-blue-700 mb-4 dark:text-blue-300">3. Ethereum's Transition to Proof of Stake</h3>
            <p className="text-gray-300 mb-4">
              Ethereum, one of the most popular cryptocurrencies, used to use Proof of Work but recently transitioned to Proof of Stake to become more energy-efficient. Now, instead of miners, Ethereum has validators who stake their Ether (ETH) to secure the network.
            </p>
            <p className="text-gray-300 mb-4">
              This change helps reduce Ethereum’s energy consumption significantly. Think of it as switching from driving a gas-powered car (PoW) to an electric car (PoS) – both get you to your destination, but one does so with much less environmental impact.
            </p>
          </section>

          <section className="mb-6">
            <h3 className="text-3xl font-semibold text-blue-700 mb-4 dark:text-blue-300">4. Differences Between Mining and Staking</h3>
            <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
              <li>
                <strong>Energy Consumption:</strong> Mining (PoW) uses a lot of energy due to its intensive computations, while staking (PoS) is much more eco-friendly.
              </li>
              <li>
                <strong>Equipment Needed:</strong> Miners need powerful computers, whereas stakers only need to lock up their coins in a compatible wallet.
              </li>
              <li>
                <strong>Reward System:</strong> In mining, only the fastest miner gets rewarded, but in staking, rewards are distributed among stakers based on the amount they’ve staked.
              </li>
            </ul>
          </section>

          <button
            onClick={handleStartTest}
            className="mt-6 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-lg shadow-lg hover:shadow-xl hover:bg-blue-700 transition-all duration-200 ease-in-out"
          >
            Go to Test
          </button>
        </>
      )}
    </div>
  );
};

export default Task8;
