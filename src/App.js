import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import NavbarComponent from './components/navbar/Nav';
import FooterComponent from './components/footer/Footer';
import Home from './page/Home/HomePage';
import About from './components/about/aboutme/About';
// import EducationJourney from './components/about/milestone/EducationJourney';
// import ExperienceJourney from './components/about/milestone/ExperienceJourney';
// import TechnicalJourney from './components/about/milestone/TechnicalJourney';
// import PersonalSkill from './components/about/skills/PersonalSkill';
// import TechnicalSkill from './components/about/skills/TechnicalSkill';
import Err404 from './page/notfound';

function App() {
  return (
    <Router>
      <div className="App">
        <NavbarComponent />
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<About />} />
            {/* <Route path="personal-skill" element={<PersonalSkill />} />
            <Route path="technical-skill" element={<TechnicalSkill />} />
            <Route path="technical-journey" element={<TechnicalJourney />} />
            <Route path="education-journey" element={<EducationJourney />} />
            <Route path="experience-journey" element={<ExperienceJourney />} /> */}
          </Route>
          <Route path="*" element={<Err404 />} />
        </Routes>
        <FooterComponent />
      </div>
    </Router>
  );
}

export default App;
