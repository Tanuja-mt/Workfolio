import './App.css';
import React, { useState } from "react";
import profileImg from './assets/images/profile-photo.jpg';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import {FaTwitter,FaLinkedin,FaFacebookF,FaGithub } from 'react-icons/fa';
import { CgHello } from 'react-icons/cg';
 
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
              <div className="profession">Frontend Developer Sinc 3 Years</div>
              <ul class="navigation">
                <li class="navigation__item"><a onClick={handleClick} class="blog-button">About
                  Me</a></li>
                {/* <Link to="/AboutFun">About</Link> */}

                <li class="navigation__item"><a href="/skills/" title="link to Skills" class="blog-button">Skills</a></li>
              </ul>
              <ul class="navigationList">
                <li class="navigationBtn">
                  <a href="http://twitter.com/anshulrohilla" title="@anshulrohilla on Twitter" target="_blank">
                    <FaTwitter size={22} color="#fff" />
                    {/* <span class="label">Twitter</span> */}
                  </a>
                </li>
                <li class="navigationBtn">
                  <a href="www.linkedin.com/in/tanujatiwarii" title="anshulrohilla.ac on Facebook" target="_blank">
                    <FaLinkedin size={22} color="#fff" />
                    {/* <span class="label">Facebook</span> */}
                  </a>
                </li>
                <li class="navigationBtn">
                  <a href="https://www.linkedin.com/in/anshulrohilla" title="anshulrohilla on LinkedIn" target="_blank">
                    <FaFacebookF size={22} color="#fff" />
                    {/* <span class="label">LinkedIn</span> */}
                  </a>
                </li>
                <li class="navigationBtn">
                  <a href="https://www.github.com/anshul-rohilla" title="anshul-rohilla on GitHub" target="_blank">
                    <FaGithub size={22} color="#fff" />
                    {/* <span class="label">GitHub</span> */}
                  </a>
                </li>

              </ul>
            </div>
          </div>
        </div>
        <div class="panel-cover--overlay"></div>

      </header>
      <div className='aboutSection'>
        {/* <h1 className='heading'>About Me</h1> */}

      </div>
    </div>
  );
}

export default App;
