// components/Dashboard.tsx
import React from 'react';

const Dashboard = () => {
  const userInfo = {
    avatar: 'https://via.placeholder.com/150', // Sample Avatar URL
    username: 'JohnDoe123',
    email: 'johndoe@example.com',
    plan: 'Free Plan',
    tasksCompleted: 8,
    totalTasks: 15,
    achievements: [
      'First Login',
      'Completed 5 Tasks',
      'First Achievement Unlocked',
      'Joined Community Forum',
    ],
  };

  const educationalContent = [
    {
      title: 'How to Get Started with Our Platform',
      description: 'A comprehensive guide to help you begin using our platform effectively.',
    },
    {
      title: 'Advanced Task Management Tips',
      description: 'Learn how to manage your tasks efficiently with our advanced features.',
    },
    {
      title: 'Achievement Strategies',
      description: 'Discover strategies to unlock achievements faster and track your progress.',
    },
  ];

  return (
    <div className="p-6 bg-white rounded-lg shadow-md dark:bg-gray-800">
      {/* User Info */}
      <div className="flex items-center space-x-6">
        <img
          className="w-16 h-16 rounded-full border border-gray-300 dark:border-gray-600"
          src={userInfo.avatar}
          alt="User Avatar"
        />
        <div>
          <h2 className="text-2xl font-bold dark:text-white">{userInfo.username}</h2>
          <p className="text-gray-600 dark:text-gray-400">{userInfo.email}</p>
          <p className="text-sm text-gray-500 dark:text-gray-500">Plan: {userInfo.plan}</p>
        </div>
      </div>

      {/* Task Summary */}
      <div className="mt-6">
        <h3 className="text-xl font-semibold dark:text-white">Task Summary</h3>
        <p className="text-gray-700 dark:text-gray-400">
          You have completed <span className="font-bold">{userInfo.tasksCompleted}</span> out of{' '}
          <span className="font-bold">{userInfo.totalTasks}</span> tasks.
        </p>
        <div className="w-full bg-gray-200 rounded-full h-3 mt-3 dark:bg-gray-700">
          <div
            className="bg-blue-600 h-3 rounded-full"
            style={{
              width: `${(userInfo.tasksCompleted / userInfo.totalTasks) * 100}%`,
            }}
          ></div>
        </div>
      </div>

      {/* Achievements */}
      <div className="mt-6">
        <h3 className="text-xl font-semibold dark:text-white">Achievements</h3>
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-400">
          {userInfo.achievements.map((achievement, index) => (
            <li key={index}>{achievement}</li>
          ))}
        </ul>
      </div>

      {/* Educational Content */}
      <div className="mt-6">
        <h3 className="text-xl font-semibold dark:text-white">Educational Content for Users</h3>
        <div className="grid grid-cols-1 gap-4 mt-4 md:grid-cols-2 lg:grid-cols-3">
          {educationalContent.map((content, index) => (
            <div
              key={index}
              className="p-4 bg-gray-100 rounded-lg shadow-md dark:bg-gray-700"
            >
              <h4 className="text-lg font-bold dark:text-white">{content.title}</h4>
              <p className="text-gray-600 dark:text-gray-400">{content.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
