// src/components/ModeCalculator.js
import { useState } from 'react';

const Mode = () => {
  const [input, setInput] = useState('');
  const [mode, setMode] = useState(null);

  const calculateMode = () => {
    // Convert the input string into an array of numbers
    const numbers = input.split(',').map((str) => parseInt(str.trim(), 10));

    // Calculate the mode
    const counts = {};
    let maxCount = 0;
    let modeValue = null;

    numbers.forEach((num) => {
      counts[num] = (counts[num] || 0) + 1;
      if (counts[num] > maxCount) {
        maxCount = counts[num];
        modeValue = num;
      }
    });

    setMode(modeValue);
  };

  return (
    <>
    <div className="bg-black max-w-md mx-auto mt-10 p-4 border-solid border-gray-800 border-8 rounded shadow-lg">
      <h1 className="text-white text-center text-2xl font-semibold mb-4">Mode Calculator</h1>
      <input
        type="text"
        placeholder="Enter a list of numbers (comma-separated)"
        className="mt-1 w-full p-2 rounded mb-4"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        className="bg-gray-800 hover:bg-green-800 text-white py-2 px-4 rounded"
        onClick={calculateMode}
      >
        Calculate
      </button>
      {mode !== null && (
        <p className="text-white text-lg mt-4">Mode: {mode}</p>
      )}
    </div>

<div className="text-white border-solid border-gray-800 border-8 bg-black p-4 mt-5 sm:p-6 md:p-8 lg:p-10 xl:p-12 rounded shadow-lg">
<h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-bold ">Explanation</h2>
<p className="mt-4 sm:mt-6 md:mt-8 lg:mt-10 xl:mt-9 text-lg">O1: What is Mode?</p>
<p className="mt-4 sm:mt-6 md:mt-8 lg:mt-10 xl:mt-1 text-lg">Ans: It is simply the number which appears most often.</p>
<p className="mt-4 sm:mt-6 md:mt-8 lg:mt-10 xl:mt-1 text-lg">Example: 19, 8, 29, 35, 19, 28 </p>
<p className="mt-4 sm:mt-6 md:mt-8 lg:mt-10 xl:mt-1 text-lg">19 appears twice, all the rest appear only once, so 19 is the mode</p>
<p className="mt-4 sm:mt-6 md:mt-8 lg:mt-10 xl:mt-1 text-lg">Note: We can have more than one mode.</p>

<h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl mt-5 font-bold ">Practice Questions</h2>
<p className="mt-4 sm:mt-6 md:mt-8 lg:mt-10 xl:mt-1 text-lg">Q1: Find the Mean of the following data which is 24, 24, 110, 78, 110, and, 110.</p>
<p className="mt-4 sm:mt-6 md:mt-8 lg:mt-10 xl:mt-1 text-lg">Q2: Find the Mean of the following data which is 26, 40, -40, -17, 8, and, 26.</p>
</div>
</>
  );
};

export default Mode;
