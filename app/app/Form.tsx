// /app/Form.tsx
"use client";

import React from 'react';
import CenterApp from '@/components/app/CenterApp';

const Form = () => {
  return (
    <div className="max-w-4xl mx-auto py-24"> {/* Adjust the padding to avoid overlap */}


      {/* CenterApp Component Rendered Below */}
      <div className="mt-12">
        <CenterApp />
      </div>
    </div>
  );
};

export default Form;
