import React from "react";

export default function Sidebar() {
  return (
    <div>
      <div>
        <nav
          href="#navbar"
          className="js-colorlib-nav-toggle colorlib-nav-toggle"
          data-toggle="collapse"
          data-target="#navbar"
        >
          <i />
        </nav>
        <aside id="colorlib-aside" className="border js-fullheight">
          <div className="text-center">
            <div
              className="author-img"
              style={{ backgroundImage: "url(images/MyImages/MeProfile.jpg)", borderRadius: "4px" }}
            />
            <h1 id="colorlib-logo">
              <a href="index.html">Hampus Kjellstrand</a>
            </h1>
            <span className="email">
              <i className="icon-mail"></i> hampe.kjellstrand@gmail.com
            </span>
            <p>
              <small>
                Fullstack Developer Student <br /> @ Teknikhögskolan
              </small>
            </p>
          </div>
          <nav id="colorlib-main-menu" role="navigation" className="navbar">
            <div id="navbar" className="collapse">
              <ul>
                <li className="active">
                  <a href="#home" data-nav-section="home">
                    Introduction
                  </a>
                </li>
                <li>
                  <a href="#work" data-nav-section="work">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#about" data-nav-section="about">
                    About
                  </a>
                </li>
                {/*<li><a href="#" data-nav-section="projects">Projects</a></li>
                  <li><a href="#" data-nav-section="blog">Blog</a></li>*/}
                <li>
                  <a href="#timeline" data-nav-section="timeline">
                    Timeline
                  </a>
                </li>
                <li>
                  <a href="#skills" data-nav-section="skills">
                    Skills
                  </a>
                </li>
              </ul>
            </div>
          </nav>
          <nav id="colorlib-main-menu">
            <ul>
              <li>
                  <p>
                    <small>Find me on:</small>
                  </p>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/hampus-kjellstrand-480b3b196/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="icon-linkedin2" />
                  {" LinkedIn"}
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Gerglamesh"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="icon-github"></i>
                  {" GITHUB"}
                </a>
              </li>
            </ul>
          </nav>
          <div className="colorlib-footer"></div>
        </aside>
      </div>
    </div>
  );
}
