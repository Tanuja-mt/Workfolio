import './App.css';
import React, { useState } from "react";
import profileImg from './assets/images/profile-photo.jpg';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { FaTwitter, FaLinkedin, FaFacebookF, FaGithub } from 'react-icons/fa';
import { CgHello } from 'react-icons/cg';
import Skills from './skills';
import About from './about';


function App() {
  const [isExpanded, setIsExpanded] = useState(false);
  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div className="App">
      <header className={isExpanded ? "header expanded" : "header"}>
        <div className="panel-main">
          <div className="panel">
            <div className="pannelContainer">
              <a href="">
                <img src={profileImg} />
                <span>Tanuja Tiwari</span>
              </a>
              <div className="profession">Frontend Developer Since 3 Years</div>
              <ul class="navigation">
                <li class="navigation__item">
                <Link to="/about" class="blog-button" onClick={handleClick}>About</Link>
                  </li>
                <li class="navigation__item">
                  <Link to="/skills" class="blog-button" onClick={handleClick}>Skills</Link>
                </li>
              </ul>
              <ul class="navigationList">
                <li class="navigationBtn">
                  <a href="http://twitter.com/" title="@tanuja on Twitter" target="_blank">
                    <FaTwitter size={22} color="#fff" />
                  </a>
                </li>
                <li class="navigationBtn">
                  <a href="www.linkedin.com/in/tanujatiwarii" title="tanuja.ac on Facebook" target="_blank">
                    <FaLinkedin size={22} color="#fff" />
                  </a>
                </li>
                <li class="navigationBtn">
                  <a href="https://www.linkedin.com/in/" title="tanuja on LinkedIn" target="_blank">
                    <FaFacebookF size={22} color="#fff" />
                  </a>
                </li>
                <li class="navigationBtn">
                  <a href="https://www.github.com/Tanuja-mt" title="tanuja on GitHub" target="_blank">
                    <FaGithub size={22} color="#fff" />
                  </a>
                </li>

              </ul>
            </div>
          </div>
        </div>
        <div class="panel-cover--overlay"></div>
      </header>
   
      <Routes>
        <Route path="/skills" element={<Skills />} />
        <Route path="/about" element={<About />} />

      </Routes>
    </div>
  );
}

export default App;
