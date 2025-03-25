import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


const Skills = () => {
  return (
    <div class="content-wrapper__inner skillSection">
      <article class="post-container post-container--single">
        <header class="post-header">
          <h1 class="post-title">Skills</h1>
        </header>
        <section class="post">
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
            <li>UWP (Windows 10)</li>
            <li>WPF (Win32)</li>
            <li>Xamarin (Android and IOS)</li>
            <li>React Native (Android and IOS)</li>
          </ul>
          <h4 id="web-development"><strong>Web Development</strong></h4>
          <ul>
            <li>React.js</li>
            <li>Blazor</li>
            <li>Angular JS</li>
            <li>Bootstrap</li>
          </ul>
          <h4 id="backend-services"><strong>Backend Services</strong></h4>
          <ul>
            <li>C# (.NET Core)</li>
            <li>Java</li>
            <li>Spring</li>
            <li>Node.js</li>
          </ul>
          <h4 id="cloud"><strong>Cloud</strong></h4>
          <ul>
            <li>Azure</li>
            <li>OpenStack</li>
          </ul>

          <h4 id="build-and-deploy"><strong>Build and Deploy</strong></h4>

          <ul>
            <li>Docker</li>
            <li>E2E DevOps</li>
            <li>Eureka</li>
            <li>Kubernetes</li>
            <li>OpenStack</li>
          </ul>

          <h4 id="security"><strong>Security</strong></h4>

          <ul>
            <li>JWT</li>
            <li>OAuth</li>
            <li>OpenID</li>
            <li>LDAP</li>
            <li>Cryptography</li>
          </ul>

          <h4 id="storage"><strong>Storage</strong></h4>

          <ul>
            <li>Mongo DB</li>
            <li>Oracle</li>
            <li>Docker Volume</li>
          </ul>

          <h4 id="performance-optimization"><strong>Performance Optimization</strong></h4>

          <ul>
            <li>YourKit</li>
            <li>JMeter</li>
          </ul>

          <h4 id="design-patterns-and-methodology"><strong>Design patterns and methodology</strong></h4>

          <ul>
            <li>Microservices architecture</li>
            <li>SOA</li>
            <li>Event driven architecture</li>
            <li>Agile</li>
          </ul>

          <h4 id="other-technologies"><strong>Other technologies</strong></h4>

          <ul>
            <li>Conceptwave</li>
          </ul>

        </section>

      </article>
    </div>
  )
}

export default Skills;