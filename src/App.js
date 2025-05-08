import { useState } from 'react';
import { AnimatePresence } from "motion/react"

// import components
import Slider from './components/Slider';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Experience from './components/Experience';
import Project from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

// import css files
import './App.css';
import './assets/css/responsive.css'


function App() {
  const [isClosed, setIsClosed] = useState(true)

  const renderNavBar = () => {
      setIsClosed(!isClosed)
  }

  const closeNavBar = () => {
    setIsClosed(true)
  }

  return (
    <>
    <div className="App">
      <div className='menu-btn' onClick={renderNavBar}>
          {isClosed ? <i className='fa-solid fa-bars menu-icon'></i> : <i className='fa-solid fa-xmark menu-icon'></i>}
      </div>
      <AnimatePresence className="navbar-main">
        {isClosed ? null : <Navbar onClick={closeNavBar} />}
      </AnimatePresence>
       <Slider />
       <About />
       <Skills />
       <Education />
       <Experience />
       <Project />
       <Contact />
       <Footer />
    </div>
    </>
  );
}

export default App;
