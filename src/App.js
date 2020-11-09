import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Cv from './components/Cv';
import Portfolio from './components/Portfolio';
import Projects from './components/Projects';
import Footer from './components/Footer';
import ContactMe from './components/ContactMe';

class App extends Component {
  render() {
  return (
  <div className = 'App'>

  <Header resumeData={resumeData}/>
  <About resumeData={resumeData}/>
  <Cv resumeData={resumeData}/>
  <Portfolio resumeData={resumeData}/>
  <Projects resumeData={resumeData}/>
  <ContactMe resumeData={resumeData}/>
  <Footer resumeData={resumeData}/>
  </div>
  );
  }
  }

export default App;
