import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import NavbarComponent from './components/navbar/Nav';
import FooterComponent from './components/footer/Footer';
import Home from './page/Home/HomePage';

function App() {
  return (
    <Router>
      <div className="App">
        <NavbarComponent />
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
        <FooterComponent />
      </div>
    </Router>
  );
}

export default App;
