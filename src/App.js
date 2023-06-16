import React from 'react';
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';

import Header from './Header/header';
import AboutMe from './Pages/AboutMe/aboutMe';
import Portfolio from './Pages/Portfolio/portfolio';
import ContactMe from './Pages/ContactMe/contactMe';
import Resume from './Pages/Resume/resume';
import Footer from './Footer/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<AboutMe />} index />
        <Route exact path='/about' element={<AboutMe />} />
        <Route exact path='/portfolio' element={<Portfolio />} />
        <Route exact path='/contact' element={<ContactMe />} />
        <Route exact path='/resume' element={<Resume />} />
      </Routes>
      <Footer />
    </Router>
  );
}


export default App;
