// Lesson1.js
import React from 'react';

const Lesson2 = () => {
  return (
    <div className="p-5 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Lesson Two</h1>
      <div className="mt-4">
        <video className="w-full" controls>
          <source src={`path/to/video/.mp4`} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default Lesson2;
