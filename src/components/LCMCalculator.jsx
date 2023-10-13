// src/LCMCalculator.js
import  { useState } from 'react';

const LCMCalculator = () => {
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [result, setResult] = useState('');

  const calculateLCM = () => {
    const num1 = parseInt(number1);
    const num2 = parseInt(number2);
    if (!isNaN(num1) && !isNaN(num2)) {
      // Calculate LCM using the formula: LCM = (num1 * num2) / GCD(num1, num2)
      const gcd = findGCD(num1, num2);
      const lcm = (num1 * num2) / gcd;
      setResult(`LCM(${num1}, ${num2}) = ${lcm}`);
    } else {
      setResult('Please enter valid numbers.');
    }
  };

  const findGCD = (a, b) => {
    if (b === 0) {
      return a;
    } else {
      return findGCD(b, a % b);
    }
  };

  return (
    <div className="bg-black max-w-md mx-auto mt-10 p-4 border-solid border-gray-800 border-8 rounded shadow-lg">
      <h1 className="text-2xl font-bold mb-4 text-center text-white">LCM Calculator</h1>
      <div className="flex flex-col space-y-2">
        <input
          type="text"
          placeholder="Enter number 1"
          value={number1}
          onChange={(e) => setNumber1(e.target.value)}
          className="p-2 rounded-md"
        />
        <input
          type="text"
          placeholder="Enter number 2"
          value={number2}
          onChange={(e) => setNumber2(e.target.value)}
          className="p-2 rounded-md"
        />
        <button
          onClick={calculateLCM}
          className="bg-gray-800 text-white p-2 rounded-md hover:bg-green-800"
        >
          Calculate LCM
        </button>
        <p className="mt-2 text-center text-white">{result}</p>
      </div>
    </div>
  );
};

export default LCMCalculator;
