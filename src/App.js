import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './Header/header';
import AboutMe from './Pages/AboutMe/aboutMe';
import Portfolio from './Pages/Portfolio/portfolio';
import ContactMe from './Pages/ContactMe/contactMe';
import Resume from './Pages/Resume/resume';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route exact path='/aboutMe' element={<AboutMe />}/>
        <Route exact path='/portfolio' element={<Portfolio />}/>
        <Route exact path='/contactMe' element={<ContactMe />}/>
        <Route exact path='/resume' element={<Resume />}/>
      </Routes>
    </Router>
  );
}


export default App;
