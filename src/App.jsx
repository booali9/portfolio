import Navbar from './component/Navbar';
import Hero from './component/Hero';
import About from './component/About';
import Icons from './component/Icons';
import Experience from './component/Experience';
import Work from './component/Work';
import './App.css';
import Contact from './component/Contact';


function App() {
  return (
    <div>

     <div className="container mx-auto px-8 page"></div>

      <Navbar/>
      <Hero/>
    <About/>
    <Icons/>
    <Experience/>
    <Work/>
    <Contact/>
   
    
   
    </div>
  );
}

export default App;
