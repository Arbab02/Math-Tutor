import  { useState } from "react";


function Calculator() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleButtonClick = (value) => {
    if (value === "=") {
      try {
        setResult(eval(input));
      } catch (error) {
        setResult("Error");
      }
    } else if (value === "C") {
      setInput("");
      setResult("");
    } else {
      setInput((prevInput) => prevInput + value);
    }
  };

  return (
    <div className="float-right border-solid border-gray-800 border-8 mr-5 bg-black max-w-md mx-auto mt-8 p-4 rounded-md shadow-lg">
      <div className="mb-4">
        <input
          type="text"
          className="bg-gray-200 border rounded border-gray-400 p-2 w-64"
          value={input}
          readOnly
        />
      </div>
      <div className="mb-4">
        <input
          type="text"
          className="bg-gray-100 border rounded border-gray-400 p-2 w-64"
          value={result}
          readOnly
        />
      </div>
      <div className="grid grid-cols-4 gap-2">
        {["7", "8", "9", "+"].map((btn) => (
          <button
            key={btn}
            className="bg-gray-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => handleButtonClick(btn)}
          >
            {btn}
          </button>
        ))}
        {["4", "5", "6", "-"].map((btn) => (
          <button
            key={btn}
            className="bg-gray-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => handleButtonClick(btn)}
          >
            {btn}
          </button>
        ))}
        {["1", "2", "3", "*"].map((btn) => (
          <button
            key={btn}
            className="bg-gray-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => handleButtonClick(btn)}
          >
            {btn}
          </button>
        ))}
        {["0", "/", "C", "="].map((btn) => (
          <button
            key={btn}
            className="bg-gray-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => handleButtonClick(btn)}
          >
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Calculator;
