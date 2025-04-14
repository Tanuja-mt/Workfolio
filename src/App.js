import './App.css';
import React, { useState } from "react";
import profileImg from './assets/images/profile-photo.jpg';
import { Routes, Route, Link } from 'react-router-dom';
import { FaTwitter, FaLinkedin, FaFacebookF, FaGithub } from 'react-icons/fa';

// import Home from './components/Home';
import Skills from './components/skills';
import About from './components/about';

function App() {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = () => {
    setIsExpanded(true); // expand when navigating
  };

  return (
    <div className="App">
      <header className={isExpanded ? "header expanded" : "header"}>
        <div className="panel-main">
          <div className="panel">
            <div className="pannelContainer">
              <a href="#">
                <img src={profileImg} alt="Profile" />
                <span>Tanuja Tiwari</span>
              </a>
              <div className="profession">Frontend Developer Since 3 Years</div>
              <ul className="navigation">
                <li className="navigation__item">
                  <Link to="/about" className="blog-button" onClick={handleClick}>About</Link>
                </li>
                <li className="navigation__item">
                  <Link to="/skills" className="blog-button" onClick={handleClick}>Skills</Link>
                </li>
              </ul>
              <ul className="navigationList">
                <li className="navigationBtn">
                  <a href="http://twitter.com/" title="@tanuja on Twitter" target="_blank" rel="noopener noreferrer">
                    <FaTwitter size={22} color="#fff" />
                  </a>
                </li>
                <li className="navigationBtn">
                  <a href="https://www.linkedin.com/in/tanujatiwarii" title="Tanuja on LinkedIn" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin size={22} color="#fff" />
                  </a>
                </li>
                <li className="navigationBtn">
                  <a href="https://www.facebook.com/" title="Tanuja on Facebook" target="_blank" rel="noopener noreferrer">
                    <FaFacebookF size={22} color="#fff" />
                  </a>
                </li>
                <li className="navigationBtn">
                  <a href="https://www.github.com/Tanuja-mt" title="Tanuja on GitHub" target="_blank" rel="noopener noreferrer">
                    <FaGithub size={22} color="#fff" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="panel-cover--overlay"></div>
      </header>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
      </Routes>
    </div>
  );
}

export default App;
