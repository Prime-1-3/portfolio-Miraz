import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import NavbarComponent from './components/navbar/Nav';
import FooterComponent from './components/footer/Footer';
import Home from './page/Home/HomePage';
import About from './components/about/aboutme/About';
import EducationJourney from './components/about/milestone/EducationJourney';
import PersonalSkill from './components/about/skills/PersonalSkill';
import TechnicalSkill from './components/about/skills/TechnicalSkill';
import Err404 from './page/notfound';
import LearningJourney from './components/about/milestone/LearningJourney';

function App() {
  return (
    <Router>
      <div className="App">
        <NavbarComponent />
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<About />} />
            <Route path="personal-skill" element={<PersonalSkill />} />
            <Route path="technical-skill" element={<TechnicalSkill />} />
            <Route path="learning-journey" element={<LearningJourney />} />
            <Route path="education-journey" element={<EducationJourney />} />
          </Route>
          <Route path="*" element={<Err404 />} />
        </Routes>
        <FooterComponent />
      </div>
    </Router>
  );
}

export default App;
