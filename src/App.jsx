import './CSS/App.css';
import {useState} from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Tools from './components/Tools';
import Calculator from './components/Calculator';
import CircumferenceCalculator from './components/CircumferenceCalculator';
import Diameter from './components/Diameter';
import Hypotenuse from './components/Hypotenuse';
import Mean from './components/Mean';
import Median from './components/Median';
import Mode from './components/Mode';
import CircleAreaCalculator from './components/CircleAreaCalculator';
import UnitConverter from './components/UnitConverter';
import LCMCalculator from './components/LCMCalculator';
import Sam1 from './components/Sam1';
import {BrowserRouter, Route, Routes} from 'react-router-dom'


function App() {

  const [show, setShow] = useState(false)

  const toggleCalculator = () => {
    setShow(!show);
  };
  
  return (
    <>
    <BrowserRouter>
    <Navbar/>
  
  <svg xmlns="http://www.w3.org/2000/svg" fill="black" viewBox="0 0 24 24" strokeWidth={1.5} stroke="gray" className="w-10 h-10 float-right m-3 mr-6 cursor-pointer" onClick={toggleCalculator}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V13.5zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V18zm2.498-6.75h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V13.5zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V18zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V18zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zM8.25 6h7.5v2.25h-7.5V6zM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0012 2.25z" />
</svg>
  

    <Tools/>
 
    {show && <Calculator/>}
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/sam1' element={<Sam1/>}/>
      <Route path='/circumference' element={<CircumferenceCalculator/>}/>
      <Route path='/diameter' element={<Diameter/>}/>
      <Route path='/hypotenuse' element={<Hypotenuse/>}/>
      <Route path='/mean' element={<Mean/>}/>
      <Route path='/median' element={<Median/>}/>
      <Route path='/mode' element={<Mode/>}/>
      <Route path='/cirleArea' element={<CircleAreaCalculator/>}/>
      <Route path='/uc' element={<UnitConverter/>}/>
      <Route path='/lcm' element={<LCMCalculator/>}/>
  
     
</Routes>

</BrowserRouter>
    </>
  )
}

export default App
