// crypto-triggery/components/app/courses/CourseOne/Task7/Task7.tsx
import React, { useState } from 'react';
import Test7 from './Test7';

export const taskTitle = "What is a Wallet and How Does it Work?";

const Task7 = () => {
  const [showTest, setShowTest] = useState(false);

  const handleStartTest = () => {
    setShowTest(true);
  };

  return (
    <div className="p-8 bg-gradient-to-r from-slate-950 via-blue-900 to-slate-900 rounded-lg shadow-xl dark:bg-gray-800">
      {showTest ? (
        <Test7 />
      ) : (
        <>
          <h2 className="text-4xl font-extrabold mb-6 text-blue-800 dark:text-white">
            What is a Crypto Wallet and How Does it Work?
          </h2>
          <p className="text-lg text-gray-300 mb-6">
            In the world of cryptocurrency, a wallet is essential. A crypto wallet is a digital tool that allows users to securely store, send, and receive cryptocurrencies. Think of it as your own digital bank account where you manage your crypto assets. But unlike traditional wallets, crypto wallets do not store the actual currency itself; they store cryptographic keys that provide access to your digital assets on the blockchain.
          </p>

          <section className="mb-6">
            <h3 className="text-3xl font-semibold text-blue-700 mb-4 dark:text-blue-300">1. Private Keys and Public Keys</h3>
            <p className="text-gray-300 mb-4">
              Crypto wallets operate using a pair of cryptographic keys: a private key and a public key. The public key is like your bank account number – you can share it with others to receive funds. The private key, however, is like the PIN to your account – it gives you access to your funds and must be kept secret.
            </p>
            <p className="text-gray-300 mb-4">
              When you create a wallet, a private key is generated first, and from that private key, a public key is derived. Together, these keys allow you to interact with the blockchain and manage your cryptocurrency. Losing your private key means losing access to your funds, as no central authority can recover it for you.
            </p>
          </section>

          <section className="mb-6">
            <h3 className="text-3xl font-semibold text-blue-700 mb-4 dark:text-blue-300">2. Types of Wallets</h3>
            <p className="text-gray-300 mb-4">
              Crypto wallets come in various types, each with its own strengths and weaknesses. Here’s an overview:
            </p>
            <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
              <li>
                <strong>Hot Wallets:</strong> These are wallets that are connected to the internet, such as mobile apps, web wallets, and desktop wallets. Hot wallets are convenient and easy to access but are more vulnerable to hacking since they are always online.
              </li>
              <li>
                <strong>Cold Wallets:</strong> These wallets are not connected to the internet, like hardware wallets and paper wallets. Cold wallets offer higher security because they are offline, making them less susceptible to cyber-attacks.
              </li>
              <li>
                <strong>Hardware Wallets:</strong> A type of cold wallet that stores private keys on a physical device. Hardware wallets are considered one of the most secure ways to store crypto because they are immune to online attacks.
              </li>
              <li>
                <strong>Paper Wallets:</strong> A paper wallet involves printing out your private and public keys on a piece of paper. It’s secure as long as the paper is safely stored, but if the paper is lost or damaged, access to your funds is lost.
              </li>
              <li>
                <strong>Web Wallets:</strong> Hosted by a third-party service, web wallets are accessible through browsers. While convenient, you must trust the service provider, as they may control your private keys.
              </li>
            </ul>
          </section>

          <section className="mb-6">
            <h3 className="text-3xl font-semibold text-blue-700 mb-4 dark:text-blue-300">3. How Transactions Work with Wallets</h3>
            <p className="text-gray-300 mb-4">
              When you send cryptocurrency to someone, your wallet uses your private key to sign the transaction, proving that you own the funds being transferred. This transaction is then broadcast to the blockchain, where it’s verified and recorded. The recipient’s wallet will receive the cryptocurrency once the transaction is confirmed by the network.
            </p>
            <p className="text-gray-300 mb-4">
              A key part of this process is ensuring that your private key is secure. If someone gains access to your private key, they can steal your funds. That's why it’s essential to keep your private key private.
            </p>
          </section>

          <section className="mb-6">
            <h3 className="text-3xl font-semibold text-blue-700 mb-4 dark:text-blue-300">4. Seed Phrases and Recovery</h3>
            <p className="text-gray-300 mb-4">
              Many wallets generate a seed phrase, a series of random words that act as a backup for your wallet. If you lose your wallet or private key, the seed phrase can restore access to your funds. Think of it as a master key – anyone who has the seed phrase can access your wallet, so it’s crucial to store it safely.
            </p>
            <p className="text-gray-300 mb-4">
              Most seed phrases are 12-24 words long and must be written down exactly as provided. It’s recommended not to store this phrase digitally, as online storage can be hacked.
            </p>
          </section>

          <section className="mb-6">
            <h3 className="text-3xl font-semibold text-blue-700 mb-4 dark:text-blue-300">5. Security Tips for Wallets</h3>
            <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
              <li>
                <strong>Keep Your Private Key Secure:</strong> Never share your private key or seed phrase with anyone. Treat it like your bank account PIN.
              </li>
              <li>
                <strong>Use Cold Storage for Large Amounts:</strong> Store the majority of your crypto in a cold wallet, only keeping small amounts in hot wallets for daily use.
              </li>
              <li>
                <strong>Enable Two-Factor Authentication (2FA):</strong> For extra security, enable 2FA on wallets and exchanges to add a layer of protection.
              </li>
              <li>
                <strong>Beware of Phishing Scams:</strong> Always double-check URLs and never click on suspicious links. Phishing scams can trick you into giving away your private keys.
              </li>
              <li>
                <strong>Regularly Update Software:</strong> Keep your wallet software up-to-date to protect against vulnerabilities and security threats.
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

export default Task7;
