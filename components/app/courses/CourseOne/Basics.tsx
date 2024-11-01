import React from 'react';
import { taskTitle as Task1Title } from './Task1/Task1';
import { taskTitle as Task2Title } from './Task2/Task2';
import { taskTitle as Task3Title } from './Task3/Task3';
import { taskTitle as Task4Title } from './Task4/Task4';
import { taskTitle as Task5Title } from './Task5/Task5';
import { taskTitle as Task6Title } from './Task6/Task6';
import { taskTitle as Task7Title } from './Task7/Task7';
import { taskTitle as Task8Title } from './Task8/Task8';
import { taskTitle as Task9Title } from './Task9/Task9';
import { taskTitle as Task10Title } from './Task10/Task10';

const Basics = ({ onTaskSelect }) => {
  // Map each task to its custom title
  const tasks = [
    { name: 'Task1', title: Task1Title },
    { name: 'Task2', title: Task2Title },
    { name: 'Task3', title: Task3Title },
    { name: 'Task4', title: Task4Title },
    { name: 'Task5', title: Task5Title },
    { name: 'Task6', title: Task6Title },
    { name: 'Task7', title: Task7Title },
    { name: 'Task8', title: Task8Title },
    { name: 'Task9', title: Task9Title },
    { name: 'Task10', title: Task10Title },

  ];

  return (
    <div className="p-6 bg-white rounded-lg shadow-md dark:bg-gray-800">
      <h2 className="text-3xl font-bold mb-4 dark:text-white">Crypto Basics Tasks</h2>
      <ul className="list-disc space-y-2">
        {tasks.map((task, index) => (
          <li key={index}>
            <button
              onClick={() => onTaskSelect(task.name)}
              className="text-blue-600 hover:underline dark:text-blue-400"
            >
              {task.title}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Basics;
