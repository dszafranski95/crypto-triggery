// CenterApp.tsx
"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

// Import the individual components
import Dashboard from '@/components/app/dashboard/Dashboard';
import CourseOne from '@/components/app/courses/CourseOne/CourseOne';
import Billing from '@/components/app/courses/CourseOne/billings/Billing';
import Invoice from '@/components/app/courses/CourseOne/invoice/Invoice';
import Kanban from '@/components/app/kanban/Kanbax';

const CenterApp = () => {
  // State management for theme, sidebar, dropdown, and active content
  const [isDark, setIsDark] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Dropdown state
  const [activeContent, setActiveContent] = useState('Dashboard'); // Active content state

  useEffect(() => {
    // Check local storage for the theme or use media query
    const getInitialTheme = () => {
      const savedTheme = window.localStorage.getItem('dark');
      return savedTheme ? JSON.parse(savedTheme) : window.matchMedia('(prefers-color-scheme: dark)').matches;
    };

    setIsDark(getInitialTheme());
    setIsSidebarOpen(window.innerWidth >= 1024);
  }, []);

  // Toggle between light and dark mode
  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    window.localStorage.setItem('dark', JSON.stringify(newTheme));
  };

  // Toggle sidebar visibility
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  // Toggle dropdown visibility
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  // Handle screen resize to control sidebar visibility
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1024) {
        setIsSidebarOpen(false);
      } else {
        setIsSidebarOpen(true);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Function to render content based on active selection
  const renderContent = () => {
    switch (activeContent) {
      case 'Dashboard':
        return <Dashboard />;
      case 'Basics':
        return <CourseOne />;
      case 'Billing':
        return <Billing />;
      case 'Invoice':
        return <Invoice />;
      case 'Kanban':
        return <Kanban />;
      default:
        return <div className="text-2xl font-bold">Select an Option from the Sidebar</div>;
    }
  };

  return (
    <div className={`${isDark ? 'dark' : ''}`}>
      {/* Mobile Menu Button */}
      <button
        onClick={toggleSidebar}
        className="fixed top-4 left-4 z-50 p-3 rounded-md bg-gray-800 text-white lg:hidden"
        aria-label="Toggle Sidebar"
      >
        <svg
          className="w-6 h-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>

      <div className="flex min-h-screen antialiased text-gray-900 bg-gray-100 dark:bg-dark dark:text-light pt-20">
        {/* Sidebar */}
        <aside
          className={`fixed top-0 lg:top-20 left-0 z-40 w-64 h-full transition-transform ${
            isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
          } bg-gray-50 dark:bg-gray-800 lg:translate-x-0 lg:h-full`}
        >
          <div className="h-full px-3 py-4 overflow-y-auto">
            <ul className="space-y-2 font-medium">
              <li>
                <button
                  onClick={() => setActiveContent('Dashboard')}
                  className={`flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group ${
                    activeContent === 'Dashboard' && 'bg-gray-200 dark:bg-gray-700'
                  }`}
                >
                  <svg
                    className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 21"
                  >
                    <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                    <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                  </svg>
                  <span className="ms-3">Dashboard</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={toggleDropdown} // Toggle the dropdown visibility
                  className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  aria-controls="dropdown-example"
                  aria-expanded={isDropdownOpen}
                >
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 18 21"
                  >
                    <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z" />
                  </svg>
                  <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">Course 1</span>
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>
                <ul
                  id="dropdown-example"
                  className={`${isDropdownOpen ? 'block' : 'hidden'} py-2 space-y-2`}
                >
                  <li>
                    <button
                      onClick={() => setActiveContent('Basics')}
                      className={`flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 ${
                        activeContent === 'Basics' && 'bg-gray-200 dark:bg-gray-700'
                      }`}
                    >
                      Basics
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => setActiveContent('Billing')}
                      className={`flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 ${
                        activeContent === 'Billing' && 'bg-gray-200 dark:bg-gray-700'
                      }`}
                    >
                      Billing
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => setActiveContent('Invoice')}
                      className={`flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 ${
                        activeContent === 'Invoice' && 'bg-gray-200 dark:bg-gray-700'
                      }`}
                    >
                      Invoice
                    </button>
                  </li>
                </ul>
              </li>
              <li>
                <button
                  onClick={() => setActiveContent('Kanban')}
                  className={`flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group ${
                    activeContent === 'Kanban' && 'bg-gray-200 dark:bg-gray-700'
                  }`}
                >
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 18 18"
                  >
                    <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
                  </svg>
                  <span className="flex-1 ms-3 whitespace-nowrap">Kanban</span>
                </button>
              </li>
            </ul>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default CenterApp;
