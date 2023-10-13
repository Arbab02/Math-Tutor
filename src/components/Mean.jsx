import { useState } from 'react';

function Mean() {
  const [numbers, setNumbers] = useState('');
  const [result, setResult] = useState(null);

  const calculateMean = () => {
    const numberArray = numbers.split(',').map((num) => parseFloat(num.trim()));
    const sum = numberArray.reduce((acc, val) => acc + val, 0);

    if (!isNaN(sum)) {
      const mean = sum / numberArray.length;
      setResult(mean.toFixed(2));
    } else {
      setResult('Invalid input');
    }
  };

  return (
    <>
    <div className="bg-black max-w-md mx-auto mt-10 p-4 border-solid border-gray-800 border-8 rounded shadow-lg">
      <h1 className="text-white text-center text-2xl font-bold mb-4">Mean Calculator</h1>

      <div className="mb-4">
        <input
          type="text"
          id="numbers"
          className="mt-1 w-full p-2 rounded"
          placeholder="Enter numbers (comma-separated)"
          value={numbers}
          onChange={(e) => setNumbers(e.target.value)}
        />
      </div>

      <button
        className="bg-gray-800 text-white py-2 px-4 rounded hover:bg-green-800"
        onClick={calculateMean}
      >
        Calculate
      </button>

      {result !== null && (
        <div className="mt-4">
          <p className="font-semibold text-white">Mean:</p>
          <p className="text-xl text-white">{result}</p>
        </div>
      )}
    </div>

<div className="text-white border-solid border-gray-800 border-8 bg-black p-4 mt-5 sm:p-6 md:p-8 lg:p-10 xl:p-12 rounded shadow-lg">
<h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-bold ">Explanation</h2>
<p className="mt-4 sm:mt-6 md:mt-8 lg:mt-10 xl:mt-9 text-lg">O1: What is Mean?</p>
<p className="mt-4 sm:mt-6 md:mt-8 lg:mt-10 xl:mt-1 text-lg">Ans: It is the sum divided by the count.</p>
<p className="mt-4 sm:mt-6 md:mt-8 lg:mt-10 xl:mt-1 text-lg">Example 1: What is the Mean of these numbers?</p>
<p className="mt-4 sm:mt-6 md:mt-8 lg:mt-10 xl:mt-1 text-lg">6, 11, 7</p>
<p className="mt-4 sm:mt-6 md:mt-8 lg:mt-10 xl:mt-1 text-lg">a. Add the numbers: 6 + 11 + 7 = 24</p>
<p className="mt-4 sm:mt-6 md:mt-8 lg:mt-10 xl:mt-1 text-lg">b. Divide by how many numbers (there are 3 numbers): 24 / 3 = 8</p>
<p className="mt-4 sm:mt-6 md:mt-8 lg:mt-10 xl:mt-1 text-lg">The Mean is 8</p>

<h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl mt-5 font-bold ">Practice Questions</h2>
<p className="mt-4 sm:mt-6 md:mt-8 lg:mt-10 xl:mt-1 text-lg">Q1: Find the Mean of the following data which is 16, 23, 24, and, 13.</p>
<p className="mt-4 sm:mt-6 md:mt-8 lg:mt-10 xl:mt-1 text-lg">Q2: Find the Mean of the following data which is 30, 24, -17, 8 and, 7.</p>
<p className="mt-4 sm:mt-6 md:mt-8 lg:mt-10 xl:mt-1 text-lg">Q3: Find the Mean of the following data which is 100, -24, 24, 110, -8 and, 88.</p>
</div>
</>
  );
}

export default Mean;
