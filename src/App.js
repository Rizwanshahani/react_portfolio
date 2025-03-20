import React, { useEffect } from 'react';
import Navbar from './components/navbar';
import Home from './components/home';
import Experience from './components/experience';
import Skill from './components/skill';
import Project from './components/project';
import Contact from './components/contact';
import './App.css';
import Aos from 'aos';
import "aos/dist/aos.css"
import './qry.css';

function App() {
  useEffect(()=>{
    Aos.init();
  })
  return (
    <>
    <Navbar/>
    <Home/>
    <Experience/>
    <Skill/>
    <Project/>
    <Contact/>
    </>
  );
}

export default App;
