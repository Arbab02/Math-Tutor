// src/components/CircleAreaCalculator.js
import { useState } from 'react';

const CircleAreaCalculator = () => {
  const [radius, setRadius] = useState('');
  const [area, setArea] = useState(null);

  const calculateArea = () => {
    const numericRadius = parseFloat(radius);

    if (!isNaN(numericRadius)) {
      const circleArea = Math.PI * numericRadius * numericRadius;
      setArea(circleArea.toFixed(2));
    } else {
      setArea(null);
    }
  };

  return (
    <>
    <div className="bg-black max-w-md mx-auto mt-10 p-4 border-solid border-gray-800 border-8 rounded shadow-lg">
      <h1 className="text-white text-center text-2xl font-semibold mb-4">Circle Area Calculator</h1>
      <input
        type="text"
        placeholder="Enter the radius of the circle"
        className="mt-1 w-full p-2 rounded mb-4"
        value={radius}
        onChange={(e) => setRadius(e.target.value)}
      />
      <button
        className="bg-gray-800 hover:bg-green-800 text-white py-2 px-4 rounded"
        onClick={calculateArea}
      >
        Calculate
      </button>
      {area !== null && (
        <p className="text-white text-lg mt-4">Area: {area} square units</p>
      )}
    </div>

<div className="text-white border-solid border-gray-800 border-8 bg-black p-4 mt-5 sm:p-6 md:p-8 lg:p-10 xl:p-12 rounded shadow-lg">
<h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-bold ">Explanation</h2>
<p className="mt-4 sm:mt-6 md:mt-8 lg:mt-10 xl:mt-9 text-lg">O1: What is a Circle?</p>
<p className="mt-4 sm:mt-6 md:mt-8 lg:mt-10 xl:mt-1 text-lg">Ans: Circle is a closed two-dimensional figure in which the set of all the points in the plane is equidistant from a given point called “centre”. </p>
<p className="mt-4 sm:mt-6 md:mt-8 lg:mt-10 xl:mt-4 text-lg">O2: How to calculate area of a circle?</p>
<p className="mt-4 sm:mt-6 md:mt-8 lg:mt-10 xl:mt-1 text-lg">Ans: Area of a circle can be calculated by using the formulas: Area = π * r<sup>2</sup>, where <strong>r</strong> is the radius. Area = (π/4) * d<sup>2</sup>, where <strong>d</strong> is the diameter.</p>
<p className="mt-4 sm:mt-6 md:mt-8 lg:mt-10 xl:mt-1 text-lg">Q3: What is the meaning of this sign π? </p>
<p className="mt-4 sm:mt-6 md:mt-8 lg:mt-10 xl:mt-1 text-lg">Ans: PI is an irrational number that has a numerical value of 3.141… and is represented by the symbol π. It expresses the ratio of the circumference to the diameter of a circle.</p>

<h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl mt-5 font-bold ">Practice Questions</h2>
<p className="mt-4 sm:mt-6 md:mt-8 lg:mt-10 xl:mt-1 text-lg">Q1: Find the Area if the radius is 24.</p>
<p className="mt-4 sm:mt-6 md:mt-8 lg:mt-10 xl:mt-1 text-lg">Q2: Find the Area if the radius is 37.5.</p>

</div>
</>
  );
};

export default CircleAreaCalculator;
