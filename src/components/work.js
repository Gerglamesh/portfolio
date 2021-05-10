import React from "react";
import TicTacToe from "../Projects/TicTacToe/ticTacToe";

export default function ExperienceSection() {
  return (
    <section className="colorlib-work" data-section="work">
      <div className="colorlib-narrow-content">
        <div className="row">
          <div
            className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
            data-animate-effect="fadeInLeft"
          >
            <span className="heading-meta">My Work</span>
            <h2 className="colorlib-heading animate-box">Projects</h2>
            <p>This section is under development. I'm in the process of 
            migrating and fixing up my projects to display them here.
            In the meantime, have a bit of fun playing my TicTacToe project below!
            (Play with a friend or try beating the AI at increasing levels, if you dare!)</p>
          </div>
        </div>
        <TicTacToe />
      </div>
    </section>
  );
}

/*
<div className="row">
          <div
            className="col-md-6 animate-box"
            data-animate-effect="fadeInLeft"
          >
            <div
              className="project"
              style={{ backgroundImage: "url(images/img-1.jpg)" }}
            >
              <div className="desc">
                <div className="con">
                  <h3>
                    <a href="work.html">Work 01</a>
                  </h3>
                  <span>Website</span>
                  <p className="icon">
                    <span>
                      <a href="#">
                        <i className="icon-share3" />
                      </a>
                    </span>
                    <span>
                      <a href="#">
                        <i className="icon-eye" /> 100
                      </a>
                    </span>
                    <span>
                      <a href="#">
                        <i className="icon-heart" /> 49
                      </a>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-md-6 animate-box"
            data-animate-effect="fadeInRight"
          >
            <div
              className="project"
              style={{ backgroundImage: "url(images/img-2.jpg)" }}
            >
              <div className="desc">
                <div className="con">
                  <h3>
                    <a href="work.html">Work 02</a>
                  </h3>
                  <span>Animation</span>
                  <p className="icon">
                    <span>
                      <a href="#">
                        <i className="icon-share3" />
                      </a>
                    </span>
                    <span>
                      <a href="#">
                        <i className="icon-eye" /> 100
                      </a>
                    </span>
                    <span>
                      <a href="#">
                        <i className="icon-heart" /> 49
                      </a>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 animate-box" data-animate-effect="fadeInTop">
            <div
              className="project"
              style={{ backgroundImage: "url(images/img-3.jpg)" }}
            >
              <div className="desc">
                <div className="con">
                  <h3>
                    <a href="work.html">Work 03</a>
                  </h3>
                  <span>Illustration</span>
                  <p className="icon">
                    <span>
                      <a href="#">
                        <i className="icon-share3" />
                      </a>
                    </span>
                    <span>
                      <a href="#">
                        <i className="icon-eye" /> 100
                      </a>
                    </span>
                    <span>
                      <a href="#">
                        <i className="icon-heart" /> 49
                      </a>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-md-6 animate-box"
            data-animate-effect="fadeInBottom"
          >
            <div
              className="project"
              style={{ backgroundImage: "url(images/img-4.jpg)" }}
            >
              <div className="desc">
                <div className="con">
                  <h3>
                    <a href="work.html">Work 04</a>
                  </h3>
                  <span>Application</span>
                  <p className="icon">
                    <span>
                      <a href="#">
                        <i className="icon-share3" />
                      </a>
                    </span>
                    <span>
                      <a href="#">
                        <i className="icon-eye" /> 100
                      </a>
                    </span>
                    <span>
                      <a href="#">
                        <i className="icon-heart" /> 49
                      </a>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-md-6 animate-box"
            data-animate-effect="fadeInLeft"
          >
            <div
              className="project"
              style={{ backgroundImage: "url(images/img-5.jpg)" }}
            >
              <div className="desc">
                <div className="con">
                  <h3>
                    <a href="work.html">Work 05</a>
                  </h3>
                  <span>Graphic, Logo</span>
                  <p className="icon">
                    <span>
                      <a href="#">
                        <i className="icon-share3" />
                      </a>
                    </span>
                    <span>
                      <a href="#">
                        <i className="icon-eye" /> 100
                      </a>
                    </span>
                    <span>
                      <a href="#">
                        <i className="icon-heart" /> 49
                      </a>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-md-6 animate-box"
            data-animate-effect="fadeInRight"
          >
            <div
              className="project"
              style={{ backgroundImage: "url(images/img-6.jpg)" }}
            >
              <div className="desc">
                <div className="con">
                  <h3>
                    <a href="work.html">Work 06</a>
                  </h3>
                  <span>Web Design</span>
                  <p className="icon">
                    <span>
                      <a href="#">
                        <i className="icon-share3" />
                      </a>
                    </span>
                    <span>
                      <a href="#">
                        <i className="icon-eye" /> 100
                      </a>
                    </span>
                    <span>
                      <a href="#">
                        <i className="icon-heart" /> 49
                      </a>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 animate-box">
            <p>
              <a href="#" className="btn btn-primary btn-lg btn-load-more">
                Load more <i className="icon-reload" />
              </a>
            </p>
          </div>
        </div>
        */
