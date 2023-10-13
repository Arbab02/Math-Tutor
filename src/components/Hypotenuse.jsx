import { useState } from 'react';

function HypotenuseCalculator() {
  const [sideA, setSideA] = useState('');
  const [sideB, setSideB] = useState('');
  const [result, setResult] = useState(null);

  const calculateHypotenuse = () => {
    const a = parseFloat(sideA);
    const b = parseFloat(sideB);

    if (!isNaN(a) && !isNaN(b)) {
      const hypotenuse = Math.sqrt(a * a + b * b);
      setResult(hypotenuse.toFixed(2));
    } else {
      setResult('Please enter valid numbers.');
    }
  };

  const clearFields = () => {
    setSideA('');
    setSideB('');
    setResult(null);
  };

  return (
    <div className="bg-black max-w-md mx-auto mt-10 p-4 border-solid border-gray-800 border-8  rounded shadow-lg">
      <div className="bg-black p-4 rounded-lg">
      <h1 className="text-white text-center text-2xl font-bold mb-4">Hypotenuse Calculator</h1>
        <label className="text-white mr-2">Side A:</label>
        <input
          type="number"
          className="mt-1 w-full p-2 rounded"
          value={sideA}
          onChange={(e) => setSideA(e.target.value)}
        />
     
      <div className="mb-4 mt-4">
        <label className="text-white mr-2">Side B:</label>
        <input
          type="number"
          className="mt-1 w-full p-2 rounded"
          value={sideB}
          onChange={(e) => setSideB(e.target.value)}
        />
      </div>
      
      <div className="grid grid-cols-2 gap-2">
      <button
            className="bg-gray-300 p-2 rounded"
            onClick={clearFields}
          >
            Clear
          </button>
          <button
            className="bg-gray-800 text-white p-2 rounded"
            onClick={calculateHypotenuse}
          >
            Calculate
          </button>
      </div>
      </div>
      {result !== null && (
        <div className="text-xl font-semibold text-white text-center">
          Hypotenuse: {result}
        </div>
      )}
    </div>
  );
}

export default HypotenuseCalculator;
