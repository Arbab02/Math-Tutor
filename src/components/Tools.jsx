
import {Link} from 'react-router-dom'

const Tools = () => {

  return (
    <>
    <header className="text-white body-font bg-gray-900">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center ">
    
    <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-900	flex flex-wrap items-center text-base justify-center">
      <Link to='/circumference'><a className="mr-5 hover:text-green-400 docs-creator">Circumference</a></Link>
      <Link to='/diameter'><a className="mr-5 hover:text-green-400 docs-creator">Diamater</a></Link>
      <Link to='/hypotenuse'><a className="mr-5 hover:text-green-400 docs-creator">Hypotenuse</a></Link>
      <Link to='/mean'><a className="mr-5 hover:text-green-400 docs-creator">Mean</a></Link>
      <Link to='/median'><a className="mr-5 hover:text-green-400 docs-creator">Median</a></Link>
      <Link to='/mode'><a className="mr-5 hover:text-green-400 docs-creator">Mode</a></Link>
      <Link to='/cirleArea'><a className="mr-5 hover:text-green-400 docs-creator">Cirle Area</a></Link>
      <Link to='/uc'><a className="mr-5 hover:text-green-400 docs-creator">Unit Converter</a></Link>
      <Link to='/lcm'><a className="mr-5 hover:text-green-400 docs-creator">LCM</a></Link>
      
    </nav>
   
  </div>
</header>
    </>
  )
}

export default Tools;