import { useState } from 'react';
import { motion } from "motion/react"

// import components
import Slider from './components/Slider';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Experience from './components/Experience';
import Project from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';

// import css files
import './App.css';
import './assets/css/responsive.css'


function App() {
  const [isClosed, setIsClosed] = useState(true)
  const renderNavBar = () => {
      if(isClosed){
        setIsClosed(false)
      }
      if(!isClosed){
        setIsClosed(true)
      }
  }
  return (
    <div className="App">
      <div className='menu-btn' onClick={renderNavBar}>
        <i className='fa-solid fa-bars'></i>
      </div>
       <Slider />
       <About />
       <Skills />
       <Education />
       <Experience />
       <Project />
       <Contact />
       <Footer />
       {isClosed ? <div className=''>nothing</div> : <h3>navbar</h3>}
    </div>
  );
}

export default App;
