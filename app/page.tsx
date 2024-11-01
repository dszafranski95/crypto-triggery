"use client"

import React, { useState } from 'react';
import Link from 'next/link';

const Page = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="max-w-[1920px] mx-auto bg-black text-gray-100 text-[15px]">
      {/* Background Image */}
      <div
        className="relative lg:min-h-screen 2xl:min-h-[730px] before:absolute before:inset-0 before:w-full before:bg-black before:opacity-60"
        style={{
          backgroundImage: "url('https://readymadeui.com/dark-bg-image.webp')",
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Header */}
        <header className="py-4 px-4 sm:px-10 z-50 min-h-[70px] relative">
          <div className="lg:flex lg:items-center gap-x-2 relative">
            <div className="flex items-center shrink-0">
              <a href="#">
                <img
                  src="https://yourcryptoapp.com/crypto-trigger-logo.svg"
                  alt="Crypto Trigger Logo"
                  className="w-40"
                />
              </a>
              <button onClick={toggleMenu} className="lg:hidden ml-auto">
                <svg
                  className="w-7 h-7"
                  fill="#fff"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>

            {/* Collapsible Menu */}
            <div
              className={`${
                menuOpen ? 'block' : 'hidden'
              } lg:ml-14 lg:!block w-full lg:flex items-center gap-6 max-lg:fixed max-lg:bg-black max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50`}
            >
              <button
                onClick={toggleMenu}
                className="lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white p-3"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 fill-black"
                  viewBox="0 0 320.591 320.591"
                >
                  <path d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z" />
                  <path d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z" />
                </svg>
              </button>

              <ul className="lg:flex gap-x-6 max-lg:space-y-3">
                <li className="mb-6 hidden max-lg:block">
                  <a href="#">
                    <img
                      src="https://yourcryptoapp.com/crypto-trigger-logo.svg"
                      alt="Crypto Trigger Logo"
                      className="w-36"
                    />
                  </a>
                </li>
                <li className="max-lg:border-b max-lg:py-3 px-3">
                  <a href="#" className="hover:text-blue-600 text-blue-600 block transition-all">
                    Home
                  </a>
                </li>
                <li className="max-lg:border-b max-lg:py-3 px-3">
                  <a href="#" className="hover:text-blue-600 block transition-all">
                    Features
                  </a>
                </li>
                <li className="max-lg:border-b max-lg:py-3 px-3">
                  <a href="#" className="hover:text-blue-600 block transition-all">
                    Courses
                  </a>
                </li>
                <li className="max-lg:border-b max-lg:py-3 px-3">
                  <a href="#" className="hover:text-blue-600 block transition-all">
                    Blog
                  </a>
                </li>
                <li className="max-lg:border-b max-lg:py-3 px-3">
                  <a href="#" className="hover:text-blue-600 block transition-all">
                    About Us
                  </a>
                </li>
              </ul>

              <div className="flex xl:w-80 max-xl:w-full bg-transparent px-6 py-2.5 rounded border border-white lg:ml-auto max-lg:mt-10">
                <input
                  type="text"
                  placeholder="Search crypto insights..."
                  className="w-full bg-transparent rounded outline-none"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 192.904 192.904"
                  width="16px"
                  className="cursor-pointer fill-gray-400"
                >
                  <path d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z" />
                </svg>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <div className="max-w-5xl mx-auto text-center relative px-4 sm:px-10 mt-16">
          <h1 className="lg:text-7xl md:text-6xl text-4xl font-semibold mb-6 md:!leading-[80px]">
            Welcome to Crypto Triggery
          </h1>
          <p className="text-base text-gray-400">
            Your ultimate platform for mastering the world of cryptocurrency and trading. Learn everything you need, from the basics of blockchain to advanced trading strategies.
          </p>
          {/* Feature Stats */}
          <div className="grid sm:grid-cols-3 gap-6 items-center mt-16">
            <div className="flex flex-col items-center text-center">
              <h5 className="font-bold text-2xl text-blue-600 mb-2">50+</h5>
              <p>Crypto Courses</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <h5 className="font-bold text-2xl text-blue-600 mb-2">1,200</h5>
              <p>Happy Learners</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <h5 className="font-bold text-2xl text-blue-600 mb-2">500+</h5>
              <p>Trading Guides</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-14 flex gap-x-8 gap-y-4 justify-center max-sm:flex-col">
  <Link href="/app">
    <button className="px-6 py-3.5 rounded-md text-gray-100 bg-pink-600 hover:bg-pink-800 transition-all">
      Run App
    </button>
  </Link>
  <Link href="/read">
    <button className="bg-transparent hover:bg-blue-600 border border-blue-600 px-6 py-3.5 rounded-md text-gray-100 transition-all">
      Read more
    </button>
  </Link>
</div>
        </div>
      </div>

      {/* Additional Sections */}
      {/* You can add more sections focusing on trading tools, tips, user testimonials, etc. */}

      {/* Footer */}
      <footer className="bg-[#111] px-4 sm:px-10 py-12 mt-32">
  <div className="lg:max-w-[50%] mx-auto text-center">
    <h2 className="md:text-4xl text-3xl font-semibold md:!leading-[50px] mb-6">Newsletter</h2>
    <p className="text-gray-400">
      Subscribe to our newsletter and stay up to date with the latest news, updates, and exclusive offers.
      Get valuable insights. Join our community today!
    </p>
    <div className="bg-[#444] flex px-2 py-1 rounded-md text-left mt-10">
      <input
        type="email"
        placeholder="Enter your email"
        className="w-full outline-none bg-transparent pl-2"
      />
      <button
        type="button"
        className="px-6 py-3 rounded-md text-gray-100 bg-blue-700 hover:bg-blue-800 transition-all ml-auto"
      >
        Submit
      </button>
    </div>
  </div>
  <hr className="border-gray-400 my-12" />
  <div className="grid max-sm:grid-cols-1 max-lg:grid-cols-2 lg:grid-cols-4 gap-8">
    <div>
      <h4 className="text-lg mb-6">About Us</h4>
      <p className="text-gray-400 mb-2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean gravida,
        mi eu pulvinar cursus, sem elit interdum mauris.
      </p>
    </div>
    <div>
      <h4 className="text-lg mb-6">Services</h4>
      <ul className="space-y-4">
        <li>
          <a href="javascript:void(0)" className="text-gray-400 hover:text-blue-600 transition-all">
            Web Development
          </a>
        </li>
        <li>
          <a href="javascript:void(0)" className="text-gray-400 hover:text-blue-600 transition-all">
            Mobile App Development
          </a>
        </li>
        <li>
          <a href="javascript:void(0)" className="text-gray-400 hover:text-blue-600 transition-all">
            UI/UX Design
          </a>
        </li>
        <li>
          <a href="javascript:void(0)" className="text-gray-400 hover:text-blue-600 transition-all">
            Digital Marketing
          </a>
        </li>
      </ul>
    </div>
    <div>
      <h4 className="text-lg mb-6">Resources</h4>
      <ul className="space-y-4">
        <li>
          <a href="javascript:void(0)" className="text-gray-400 hover:text-blue-600 transition-all">
            Webinars
          </a>
        </li>
        <li>
          <a href="javascript:void(0)" className="text-gray-400 hover:text-blue-600 transition-all">
            Ebooks
          </a>
        </li>
        <li>
          <a href="javascript:void(0)" className="text-gray-400 hover:text-blue-600 transition-all">
            Templates
          </a>
        </li>
        <li>
          <a href="javascript:void(0)" className="text-gray-400 hover:text-blue-600 transition-all">
            Tutorials
          </a>
        </li>
      </ul>
    </div>
    <div>
      <h4 className="text-lg mb-6">About Us</h4>
      <ul className="space-y-4">
        <li>
          <a href="javascript:void(0)" className="text-gray-400 hover:text-blue-600 transition-all">
            Our Story
          </a>
        </li>
        <li>
          <a href="javascript:void(0)" className="text-gray-400 hover:text-blue-600 transition-all">
            Mission and Values
          </a>
        </li>
        <li>
          <a href="javascript:void(0)" className="text-gray-400 hover:text-blue-600 transition-all">
            Team
          </a>
        </li>
        <li>
          <a href="javascript:void(0)" className="text-gray-400 hover:text-blue-600 transition-all">
            Testimonials
          </a>
        </li>
      </ul>
    </div>
  </div>
</footer>


    </div>
  );
};

export default Page;
