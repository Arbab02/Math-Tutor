
import { useState } from 'react';

function Median() {
  const [input, setInput] = useState('');
  const [median, setMedian] = useState(null);

  const calculateMedian = () => {
    const numbers = input.split(',').map(Number).filter(Boolean);
    numbers.sort((a, b) => a - b);

    if (numbers.length === 0) {
      setMedian('Please enter valid numbers.');
    } else if (numbers.length % 2 === 0) {
      const mid = numbers.length / 2;
      const medianValue = (numbers[mid - 1] + numbers[mid]) / 2;
      setMedian(`Median: ${medianValue}`);
    } else {
      const mid = Math.floor(numbers.length / 2);
      setMedian(`Median: ${numbers[mid]}`);
    }
  };

  return (
    <>
    <div className="bg-black max-w-md mx-auto mt-10 p-4 border-solid border-gray-800 border-8 rounded shadow-lg">
      <h1 className="text-white text-center text-2xl font-semibold mb-4">Median Calculator</h1>
     
        <input
          type="text"
          placeholder="Enter numbers (comma-separated)"
          className="mt-1 w-full p-2 rounded mb-4"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          onClick={calculateMedian}
          className="bg-gray-800 hover:bg-green-800 text-white py-2 px-4 rounded"
        >
          Calculate
        </button>
      </div>
      {median && <p className="text-white text-xl">{median}</p>}
  

  <div className="text-white border-solid border-gray-800 border-8 bg-black p-4 mt-5 sm:p-6 md:p-8 lg:p-10 xl:p-12 rounded shadow-lg">
    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-bold ">Explanation</h2>
    <p className="mt-4 sm:mt-6 md:mt-8 lg:mt-10 xl:mt-9 text-lg">O1: What is Median?</p>
    <p className="mt-4 sm:mt-6 md:mt-8 lg:mt-10 xl:mt-1 text-lg">Ans: The Median is the <strong>middle</strong> of a sorted list of numbers.</p>
    <p className="mt-4 sm:mt-6 md:mt-8 lg:mt-10 xl:mt-1 text-lg">Example: 10,11,13,<strong>17</strong>,18,21,22</p>
    <p className="mt-4 sm:mt-6 md:mt-8 lg:mt-10 xl:mt-4 text-lg">O2: How to Find the Median Value?</p>
    <p className="mt-4 sm:mt-6 md:mt-8 lg:mt-10 xl:mt-1 text-lg">Ans: To find the Median, place the numbers or data in value order and find the middle value.</p>
    <p className="mt-4 sm:mt-6 md:mt-8 lg:mt-10 xl:mt-1 text-lg">Example1: find the Median of 12, 3 and 5</p>
    <p className="mt-4 sm:mt-6 md:mt-8 lg:mt-10 xl:mt-1 text-lg">Put them in order:</p>
    <p className="mt-4 sm:mt-6 md:mt-8 lg:mt-10 xl:mt-1 text-lg">3, 5, 12</p>
    <p className="mt-4 sm:mt-6 md:mt-8 lg:mt-10 xl:mt-1 text-lg">The middle is 5, so the median is 5.</p>
    <p className="mt-4 sm:mt-6 md:mt-8 lg:mt-10 xl:mt-1 text-lg">Example2: find the Median of 11, 12, 8 and 7</p>
    <p className="mt-4 sm:mt-6 md:mt-8 lg:mt-10 xl:mt-1 text-lg">Put them in order:</p>
    <p className="mt-4 sm:mt-6 md:mt-8 lg:mt-10 xl:mt-1 text-lg">7, 8, 11, 12</p>
    <p className="mt-4 sm:mt-6 md:mt-8 lg:mt-10 xl:mt-1 text-lg">The middle is 9.5 between 8 & 11, so the median is 9.5.</p>
    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl mt-5 font-bold ">Practice Questions</h2>
    <p className="mt-4 sm:mt-6 md:mt-8 lg:mt-10 xl:mt-1 text-lg">Q1: Find the Median of the following data which is 16, 23, 24, and, 13.</p>
    <p className="mt-4 sm:mt-6 md:mt-8 lg:mt-10 xl:mt-1 text-lg">Q2: Find the Median of the following data which is 30, 24, 17, 8 and, 7.</p>
    <p className="mt-4 sm:mt-6 md:mt-8 lg:mt-10 xl:mt-1 text-lg">Q3: Find the Median of the following data which is 100, 24, 24, 110, 8 and, 88.</p>
</div>

    </>
  );
}
export default Median;
