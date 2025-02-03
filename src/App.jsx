
import React, { useState, useEffect } from 'react';
import Navbar from './components/navbar'
import Hero from './pages/hero'
import  About from './pages/about'
import  Projects from "./pages/projects";
import contact from './pages/contact';
import './App.css'
import Contact from './pages/contact';

function App() {
    useEffect(() => {
    window.location.href = "https://my-portfolio-v3-dusky.vercel.app/";
  }, []);
  return (
    <div>
      <div className='paddingX marginY'>
      <Navbar />
      </div>

      <div className='paddingX marginY'>
      <Hero/>
      </div>

      <div className='paddingX marginY'>
      <About/>
      </div>

      <div className='paddingX marginY'>
      <Projects/>
      </div>

      <div className='paddingX marginY'>
      <Contact/>
      </div>
    </div>
  )
}

export default App
