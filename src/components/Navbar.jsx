// import {useState} from 'react'
import {NavLink, Link} from 'react-router-dom'
import logo from "../assets/logo.png";

const Navbar = () => {
  
  return (
    <>
    <header className="text-white body-font bg-black">
  <div className="container mx-auto flex flex-wrap  flex-col md:flex-row items-center">
   <img src={logo} className='w-full md:w-1/2 lg:w-1/2 xl:w-1/6' alt=""  />
    <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
      <NavLink to='/'><a className="mr-5 hover:text-green-400 docs-creator">Home</a></NavLink>
      <Link to='/sam1'><a className="mr-5 hover:text-green-400 docs-creator">Courses</a></Link>
    </nav>
    <button className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-green-800 rounded text-base mt-4 md:mt-0">Visit SMIT&#8594;
    </button>
  </div>
</header>


    </>
  )
}

export default Navbar;
