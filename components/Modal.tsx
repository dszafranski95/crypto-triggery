// components/Modal.tsx
import React from 'react';

const Modal = ({ children }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
        {children}
      </div>
    </div>
  );
};

export default Modal;
