// components/app/courses/CourseOne/TaskView.tsx
import React from 'react';

const TaskView = ({ taskName }) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md dark:bg-gray-800">
      <h2 className="text-3xl font-bold mb-4 dark:text-white">{taskName}</h2>
      <p className="text-gray-700 dark:text-gray-400">
        This is a detailed view for {taskName}. Here you can provide specific content or educational
        material for this task.
      </p>
    </div>
  );
};

export default TaskView;
