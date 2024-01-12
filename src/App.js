import React, { useState, useEffect } from "react";
import { i18n } from './i18n';
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import Resume from "./components/Resume/ResumeNew";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [load, upadateLoad] = useState(true);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('');

  const handleLanguageSelect = (language) => {
    // Al seleccionar un idioma, actualizar el estado y guardar en localStorage
    localStorage.setItem('selectedLanguage', language);
    // Cerrar el pop-up
    setShowPopup(false);
    i18n.changeLanguage(language);
    console.log('lenguage pop up', showPopup)
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      localStorage.removeItem('selectedLanguage')
      upadateLoad(false);
    }, 1200);

    const storedLanguage = localStorage.getItem('selectedLanguage');

    if (!storedLanguage) {
      // Si no se ha seleccionado, mostrar el pop-up
      setShowPopup(true);
    }

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      {showPopup ? (
        <div className="lenguage-container">
          <div className="lenguage-card">
            <h1 style={{ display: 'flex', justifyContent: 'center', paddingBottom: '5px' }}>
              Lenguage
            </h1>
            <button className="lenguage-btn" onClick={() => handleLanguageSelect('es')}>Español</button>
            <button className="lenguage-btn" onClick={() => handleLanguageSelect('en')}>English</button>
          </div>
        </div>
      ): (
        <div className="App" id={load ? "no-scroll" : "scroll"}>
          <Navbar />
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="*" element={<Navigate to="/"/>} />
          </Routes>
          <Footer />
        </div>        
      )}

    </Router>
  );
}

export default App;
