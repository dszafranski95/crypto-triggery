// crypto-triggery/components/app/courses/CourseOne/Task10/Task10.tsx
import React, { useState } from 'react';
import Test10 from './Test10';  // Import the Test10 component

export const taskTitle = "Introduction to Smart Contracts and dApps";

const Task10 = () => {
  const [showTest, setShowTest] = useState(false);

  const handleStartTest = () => {
    setShowTest(true);  // Set the state to true to render Test10
  };

  return (
    <div className="p-8 bg-gradient-to-r from-slate-950 via-blue-900 to-slate-900 rounded-lg shadow-xl dark:bg-gray-800">
      {showTest ? (
        <Test10 />  // Render Test10 if showTest is true
      ) : (
        <>
          <h2 className="text-4xl font-extrabold mb-6 text-blue-800 dark:text-white">
            Introduction to Smart Contracts and dApps
          </h2>
          <p className="text-lg text-gray-300 mb-6">
            Smart contracts and dApps are at the heart of blockchain innovation, enabling decentralized applications that function without middlemen. Let’s dive into what they are and how they work with a simple example.
          </p>

          <section className="mb-6">
            <h3 className="text-3xl font-semibold text-blue-700 mb-4 dark:text-blue-300">1. What is a Smart Contract?</h3>
            <p className="text-gray-300 mb-4">
              Imagine a vending machine. When you put in the right amount of money and press a button, the machine automatically delivers the item you selected. There’s no human needed to operate it; it follows a set of predefined rules.
            </p>
            <p className="text-gray-300 mb-4">
              A smart contract works similarly but in the digital space. It’s a piece of code on the blockchain that automatically executes actions when specific conditions are met. Once deployed, it operates without needing a middleman, enforcing agreements like a “digital vending machine.”
            </p>
          </section>

          <section className="mb-6">
            <h3 className="text-3xl font-semibold text-blue-700 mb-4 dark:text-blue-300">2. Decentralized Applications (dApps)</h3>
            <p className="text-gray-300 mb-4">
              A dApp, or decentralized application, is an application that runs on a blockchain like Ethereum using smart contracts. Unlike traditional apps, which rely on centralized servers, dApps run on a decentralized network. This makes them transparent, secure, and resistant to censorship, as they operate without a central authority.
            </p>
            <p className="text-gray-300 mb-4">
              Examples of dApps include decentralized finance platforms, games, and marketplaces, each using smart contracts to manage transactions and user interactions without intermediaries.
            </p>
          </section>

          <section className="mb-6">
            <h3 className="text-3xl font-semibold text-blue-700 mb-4 dark:text-blue-300">3. Example: A Simple Smart Contract in Solidity</h3>
            <p className="text-gray-300 mb-4">
              Let’s look at a simple Solidity code example of a smart contract that creates a basic token. Solidity is a programming language used for writing smart contracts on Ethereum. This contract will let us create a token with a limited supply.
            </p>
            <p className="text-gray-300 mb-4">
              Here’s what our simple token contract might look like:
            </p>
            <pre className="bg-gray-800 text-green-300 p-4 rounded-lg shadow-lg overflow-auto">
{`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SimpleToken {
    string public name = "MyToken";
    string public symbol = "MTK";
    uint8 public decimals = 18;
    uint256 public totalSupply;

    mapping(address => uint256) public balanceOf;

    event Transfer(address indexed from, address indexed to, uint256 value);

    constructor(uint256 _initialSupply) {
        totalSupply = _initialSupply * 10 ** uint256(decimals);
        balanceOf[msg.sender] = totalSupply; // Assign all tokens to the creator
    }

    function transfer(address _to, uint256 _value) public returns (bool success) {
        require(balanceOf[msg.sender] >= _value, "Insufficient balance");
        balanceOf[msg.sender] -= _value;
        balanceOf[_to] += _value;
        emit Transfer(msg.sender, _to, _value);
        return true;
    }
}`}
            </pre>
          </section>

          <section className="mb-6">
            <h3 className="text-3xl font-semibold text-blue-700 mb-4 dark:text-blue-300">4. How This Smart Contract Works</h3>
            <p className="text-gray-300 mb-4">
              In this example, our smart contract creates a token called “MyToken” with the symbol “MTK.” It has a limited supply, all of which is assigned to the contract creator. The contract includes a <code>transfer</code> function that allows users to send tokens to each other, with each transfer recorded on the blockchain.
            </p>
            <p className="text-gray-300 mb-4">
              Just like with our vending machine analogy, the contract follows predefined rules automatically, so once it’s deployed, no one can alter how it works.
            </p>
          </section>

          <button
            onClick={handleStartTest}  // Call handleStartTest to render Test10
            className="mt-6 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-lg shadow-lg hover:shadow-xl hover:bg-blue-700 transition-all duration-200 ease-in-out"
          >
            Go to Test
          </button>
        </>
      )}
    </div>
  );
};

export default Task10;
