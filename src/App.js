import './App.css';
import React, { useState } from "react";
import profileImg from './assets/images/profile-photo.jpg';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { FaTwitter, FaLinkedin, FaFacebookF, FaGithub } from 'react-icons/fa';
import { CgHello } from 'react-icons/cg';

function App() {
  const [isExpanded, setIsExpanded] = useState(false);
  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };

  const detail = {
  }
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
                <li class="navigation__item"><a onClick={handleClick} class="blog-button">About
                  Me</a></li>
                {/* <Link to="/AboutFun">About</Link> */}

                <li class="navigation__item"><a href="/skills/" title="link to Skills" class="blog-button">Skills</a></li>
              </ul>
              <ul class="navigationList">
                <li class="navigationBtn">
                  <a href="http://twitter.com/" title="@tanuja on Twitter" target="_blank">
                    <FaTwitter size={22} color="#fff" />
                    {/* <span class="label">Twitter</span> */}
                  </a>
                </li>
                <li class="navigationBtn">
                  <a href="www.linkedin.com/in/tanujatiwarii" title="tanuja.ac on Facebook" target="_blank">
                    <FaLinkedin size={22} color="#fff" />
                    {/* <span class="label">Facebook</span> */}
                  </a>
                </li>
                <li class="navigationBtn">
                  <a href="https://www.linkedin.com/in/" title="tanuja on LinkedIn" target="_blank">
                    <FaFacebookF size={22} color="#fff" />
                    {/* <span class="label">LinkedIn</span> */}
                  </a>
                </li>
                <li class="navigationBtn">
                  <a href="https://www.github.com/Tanuja-mt" title="tanuja on GitHub" target="_blank">
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
      <div className="aboutSection">
        <div class="content-wrapper">
          <div class="content-wrapper-inner">
            <article class="post-container post-container--single">
              <header class="post-header">
                <div class="post-meta">
                  <time datetime="2018-10-01 15:04" class="post-meta__date date">25 march 2025</time>
                  <span class="post-meta__tags">on <a href="/tags/#about">about</a> </span>
                </div>
                <h1 class="post-title">About Me</h1>
              </header>
              <section class="post">
                <div className='aboutMy'>
                  I hold a diploma in information techology from Govt. Polytechnic College Kashipur, Uttarakhand. With 3 years of professional experience in Frontend Development, I have been continuously honing my skills and staying up-to-date with the latest technologies. I am passionate about learning, problem-solving, and evolving in this ever-changing tech landscape
                </div>
                <h4 id="my-personal-interests"><strong>My Personal Interests</strong></h4>
                <div className='aboutMy'>When I am not with technology, I enjoy my time doing any of the following:</div>
                <ul>
                  <li>Spending time with family</li>
                  <li>Travelling and Exploring new places and cultures</li>
                  <li>Photography</li>
                  <li>Meditation</li>
                  <li>Reading anything but not fiction</li>
                  <li>Brainstorming and Meeting new people</li>
                </ul>
              </section>
            </article>
          </div>
          <footer class="footer">
            <span class="footer__copyright aboutMy">© 2025 Tanuja Tiwari. All rights reserved.</span>
          </footer>
          <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
          <script type="text/javascript" src="/js/main.js?1630478474814671744"></script>
        </div>
      </div>
    </div>
  );
}

export default App;
