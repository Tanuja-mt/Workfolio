import React from "react";

const About =()=>{
    return(
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

    )
}
export default About;