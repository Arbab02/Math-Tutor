

import hero from "../assets/hero.jpg";
import Accordian from "./Accordian";
import Cards from "./Cards";
import Footer from './Footer';




const Home = () => {
  

  return (
    <>
   <section className="text-white body-font">
  <div className="container mx-auto flex px-1 py-20 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-5xl  mb-4 font-medium text-white">Offering Free Of Cost Education
        <br className="hidden lg:inline-block"/> All Over the World!
      </h1>
      <p className="mb-2 leading-relaxed text-[1.2rem] ">Saylani has been providing free education all over the world. After gaining some success in this mission,
      We have know decided to offer our services through our new online platforms which will help students in their career.
      </p>
      <div className="flex justify-center">
        
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img className="object-cover object-center rounded" alt="hero"  src={hero}/>
    </div>
  </div>
</section>
<Accordian/>
<Cards/>

<Footer/>


    </>
  )
}

export default Home;