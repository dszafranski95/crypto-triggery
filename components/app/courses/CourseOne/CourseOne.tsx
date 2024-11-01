// components/courses/CourseOne/CourseOne.tsx
import React, { useState } from 'react';
import Basics from './Basics';

// Manually import each Task component
import Task1 from './Task1/Task1';
import Task2 from './Task2/Task2';
import Task3 from './Task3/Task3';
import Task4 from './Task4/Task4';
import Task5 from './Task5/Task5';
import Task6 from './Task6/Task6';
import Task7 from './Task7/Task7';
import Task8 from './Task8/Task8';
import Task9 from './Task9/Task9';
import Task10 from './Task10/Task10';


// Task mapping for easy selection
const taskComponents = {
  Task1,
  Task2,
  Task3,
  Task4,
  Task5,
  Task6,
  Task7,
  Task8,
  Task9,
  Task10,

};

const CourseOne = () => {
  const [selectedTask, setSelectedTask] = useState(null);

  const handleTaskSelect = (task) => {
    setSelectedTask(task);
  };

  const handleBackToBasics = () => {
    setSelectedTask(null);
  };

  // Determine the correct component to display based on the selected task
  const TaskComponent = selectedTask ? taskComponents[selectedTask] : null;

  return (
    <div>
      {TaskComponent ? (
        <div>
          {/* Display the specific task view */}
          <TaskComponent />
          <button
            onClick={handleBackToBasics}
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200"
          >
            Back to Basics
          </button>
        </div>
      ) : (
        // Display the Basics component
        <Basics onTaskSelect={handleTaskSelect} />
      )}
    </div>
  );
};

export default CourseOne;
