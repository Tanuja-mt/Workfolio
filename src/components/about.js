import React, { useState } from "react";
import { NavLink } from 'react-router-dom';

const About =()=>{

  const [hobby , setHobby] = useState([
    {id : 1 , hobbyType : "Spending quality time with family"},
    {id : 2 , hobbyType : "Traveling and immersing myself in new places and cultures"},
    {id : 3 , hobbyType : "Exploring photography as a creative outlet"},
    {id : 4 , hobbyType : "Practicing meditation for clarity and mindfulness"},
    {id : 5 , hobbyType : "Brainstorming ideas and connecting with new people"},
    {id : 6 , hobbyType : "Reading a wide range of non-fiction"},


  ])

  
    return(


      <div className="aboutSection">
        <div className="content-wrapper">
          <div className="content-wrapper-inner">
            <article className="post-container post-container--single">
              <header className="post-header">
                <div className="post-meta">
                  <time datatype="2018-10-01 15:04" className="post-meta__date date">25 march 2025</time>
                  <span className="post-meta__tags">on <a href="/tags/#about">about</a> </span>
                </div>
                <h1 className="post-title">About Me</h1>
              </header>
              <section className="post">
                <div className='aboutMy'>
                  I hold a Diploma in Information Technology from Govt. Polytechnic College, Kashipur (Uttarakhand), and bring over 3 years of professional experience in Frontend Development. My journey in tech has been driven by a deep passion for building intuitive, responsive user interfaces and staying current with the latest tools and trends in web development.
                  I thrive in fast-paced environments where continuous learning and problem-solving are part of the daily rhythm. Whether it’s refining UI/UX, diving into new frameworks, or optimizing performance, I’m always eager to grow and contribute meaningfully to impactful projects.
                </div>
                <h4 id="my-personal-interests"><strong>Personal Interests</strong></h4>
                <div className='aboutMy'>When I'm away from technology, I find joy in:</div>
                <ul className="mySkills">
                {hobby.map((hobby) => (
                  <li key={hobby.id}>{hobby.hobbyType}</li>
                ))}

                </ul>
              </section>
            </article>
          </div>
          <footer className="footer">
            <span className="footer__copyright aboutMy">© 2025 Tanuja Tiwari. All rights reserved.</span>
          </footer>
          <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
          <script type="text/javascript" src="/js/main.js?1630478474814671744"></script>
        </div>
      </div>

    )
}
export default About;