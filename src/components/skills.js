import React, { useState } from "react";

const Skills = () => {

  const [skills , setSkills] = useState([
   {id:1, skillName:'HTML'},
   {id:2, skillName:'CSS'},
   {id:3, skillName:'javascript'},
   {id:4, skillName:'Tailwind Css'},
   {id:5, skillName:'React.js'},
   {id:6, skillName:'Angular JS'},
   {id:7, skillName:'Bootstrap'},

  ]);
  return (

      <div className="content-wrapper__inner skillSection">
        <article className="post-container post-container--single">
          <header className="post-header">
            <h1 className="post-title">Skills</h1>
          </header>
          <section className="post">
            <div className="aboutMy">Being a Technologist, I love to explore and keep myself updated with latest technologies. I am a full stack solution designer and developer. Following are some of the technologies that I use frequently:</div>
           
            <h4 id="app-development"><strong>App Development</strong></h4>
            <ul className="mySkills">
              <li>React Native (Android and IOS)</li>
            </ul>
            <h4 id="web-development"><strong>Web Development</strong></h4>
            <ul className="mySkills">
              {skills.map((skills)=>(
             <li key={skills.id} >{skills.skillName}</li>
            ))}
            </ul>
            <h4 id="build-and-deploy"><strong>Build and Deploy</strong></h4>
            <ul className="mySkills">
              <li>Docker</li>
      
            </ul>
           
          </section>
        </article>
      </div>
  )
}

export default Skills;