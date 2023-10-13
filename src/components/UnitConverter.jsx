import { useState } from "react";

function UnitConverter() {
  const [inputValue, setInputValue] = useState("");
  const [selectedUnit, setSelectedUnit] = useState("meters");
  const [result, setResult] = useState("");

  const convertUnits = () => {
    if (selectedUnit === "meters") {
      setResult(inputValue * 3.28084);
    } else {
      setResult(inputValue / 3.28084);
    }
  };

  return (
    <>
    <div className="bg-black max-w-md mx-auto mt-10 p-4  border-solid border-gray-800 border-8 rounded shadow-lg">
      <h1 className="text-white text-center text-2xl font-semibold mb-4">Unit Converter</h1>
      <div className="mb-4  ">
        <input
          type="number"
          className="w-70 p-2 mt-1 rounded"
          placeholder="Enter value"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <select
          className="ml-2 p-2 border rounded"
          value={selectedUnit}
          onChange={(e) => setSelectedUnit(e.target.value)}
        >
          <option value="meters">Meters</option>
          <option value="feet">Feet</option>
        </select>
      </div>
      <button
        className="bg-gray-800 hover:bg-green-800 text-white py-2 px-4 rounded"
        onClick={convertUnits}
      >
        Convert
      </button>
      {result && (
        <p className="mt-4 text-white">
          Result: {result} {selectedUnit === "meters" ? "feet" : "meters"}
        </p>
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

export default UnitConverter;
