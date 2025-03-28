import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
const Skills = () => {
  return (
    <div className="content-wrapper__inner skillSection">
      <article className="post-container post-container--single">
        <header className="post-header">
          <h1 className="post-title">Skills</h1>
        </header>
        <section className="post">
          <p>Being a Technologist, I love to explore and keep myself updated with latest technologies. I am a full stack solution designer and developer. Following are some of the technologies that I use frequently:</p>
          <h4 id="ai-and-machine-learning"><strong>AI and Machine Learning</strong></h4>
          <ul>
            <li>Python</li>
          </ul>
          <h4 id="automation"><strong>Automation</strong></h4>
          <ul>
            <li>Process Automation</li>
            <li>Workflow Automation</li>
          </ul>
          <h4 id="app-development"><strong>App Development</strong></h4>
          <ul>
            <li>React Native (Android and IOS)</li>
          </ul>
          <h4 id="web-development"><strong>Web Development</strong></h4>
          <ul>
            <li>React.js</li>
            <li>Angular JS</li>
            <li>Bootstrap</li>
          </ul>
          <h4 id="build-and-deploy"><strong>Build and Deploy</strong></h4>
          <ul>
            <li>Docker</li>
            <li>E2E DevOps</li>
            <li>Eureka</li>
            <li>Kubernetes</li>
            <li>OpenStack</li>
          </ul>
          <h4 id="design-patterns-and-methodology"><strong>Design patterns and methodology</strong></h4>
          <ul>
            <li>Microservices architecture</li>
            <li>SOA</li>
            <li>Event driven architecture</li>
            <li>Agile</li>
          </ul>
        </section>
      </article>
    </div>
  )
}

export default Skills;