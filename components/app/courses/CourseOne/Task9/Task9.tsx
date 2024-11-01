// crypto-triggery/components/app/courses/CourseOne/Task9/Task9.tsx
import React, { useState } from 'react';
import Test9 from './Test9';

export const taskTitle = "Understanding Gas Fees";

const Task9 = () => {
  const [showTest, setShowTest] = useState(false);

  const handleStartTest = () => {
    setShowTest(true);
  };

  return (
    <div className="p-8 bg-gradient-to-r from-slate-950 via-blue-900 to-slate-900 rounded-lg shadow-xl dark:bg-gray-800">
      {showTest ? (
        <Test9 />
      ) : (
        <>
          <h2 className="text-4xl font-extrabold mb-6 text-blue-800 dark:text-white">
            Understanding Gas Fees in Cryptocurrency
          </h2>
          <p className="text-lg text-gray-300 mb-6">
            In the world of cryptocurrency, especially on networks like Ethereum, you might come across a term called “gas fees.” Simply put, gas fees are the costs you pay to complete a transaction or perform an action on a blockchain network. But why do they exist, and how do they affect your experience? Let’s break it down.
          </p>

          <section className="mb-6">
            <h3 className="text-3xl font-semibold text-blue-700 mb-4 dark:text-blue-300">1. What is a Gas Fee?</h3>
            <p className="text-gray-300 mb-4">
              Imagine you’re driving a car. To get from one place to another, you need fuel – that’s what powers your journey. In a similar way, gas fees in the crypto world are the “fuel” required to process actions on the blockchain. When you want to send some crypto or interact with a smart contract, you’re asking the network to do some work for you, and that work requires “fuel” – which is the gas fee.
            </p>
          </section>

          <section className="mb-6">
            <h3 className="text-3xl font-semibold text-blue-700 mb-4 dark:text-blue-300">2. Why Do Gas Fees Exist?</h3>
            <p className="text-gray-300 mb-4">
              Think of a busy highway where cars need to keep moving. If everyone could drive for free, the highway might get clogged, and nobody would reach their destination quickly. Gas fees are like tolls on this highway – they ensure that the network doesn’t get overcrowded and that people who really need to get somewhere can do so by paying a bit to prioritize their “journey.” These fees encourage efficient use of the network.
            </p>
          </section>

          <section className="mb-6">
            <h3 className="text-3xl font-semibold text-blue-700 mb-4 dark:text-blue-300">3. How Gas Fees are Calculated</h3>
            <p className="text-gray-300 mb-4">
              On Ethereum, for example, each action you request (like sending a transaction or interacting with a contract) requires a certain amount of “gas.” The total gas fee is calculated based on two things: the “amount of gas” needed and the “price per unit of gas.” It’s like paying for fuel in a car: you need to know how much fuel you need for the distance and the price of fuel at the gas station.
            </p>
            <p className="text-gray-300 mb-4">
              When there is high demand on the network, the price per unit of gas can go up. This is like fuel prices increasing when there’s a big rush at the gas station. You can decide to pay a higher gas price to ensure your transaction is processed faster, or pay a lower amount and wait until the network is less busy.
            </p>
          </section>

          <section className="mb-6">
            <h3 className="text-3xl font-semibold text-blue-700 mb-4 dark:text-blue-300">4. How Gas Fees Impact Transactions</h3>
            <p className="text-gray-300 mb-4">
              Gas fees impact when and how your transaction is completed. If you’re in a hurry to get a transaction confirmed, you might choose to pay a higher gas fee to encourage miners to prioritize it. But if you’re okay with waiting, you can pay a lower gas fee. This choice is a bit like deciding to pay extra for express shipping or choosing standard shipping if you’re not in a rush.
            </p>
            <p className="text-gray-300 mb-4">
              Sometimes, gas fees can be very high during peak times, which might discourage smaller transactions. Imagine trying to buy a cup of coffee with crypto but finding that the gas fee is more expensive than the coffee itself! In such cases, people often wait for a less busy time when fees are lower.
            </p>
          </section>

          <section className="mb-6">
            <h3 className="text-3xl font-semibold text-blue-700 mb-4 dark:text-blue-300">5. Gas Limits and Optimization</h3>
            <p className="text-gray-300 mb-4">
              When you set up a transaction, you can also set a “gas limit,” which is the maximum amount of gas you’re willing to spend. It’s like deciding how much fuel you want to put in your car tank before a trip. If you set the limit too low, your transaction might not go through, similar to running out of fuel halfway. But setting it higher than needed can lead to wasted gas.
            </p>
            <p className="text-gray-300 mb-4">
              Experienced users often try to optimize gas by using efficient contracts or waiting for less busy times. This way, they can save on fees while still getting their transactions completed.
            </p>
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

export default Task9;
