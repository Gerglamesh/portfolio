import React from "react";

export default function HomeSection() {
  return (
    <section id="colorlib-hero" className="js-fullheight" data-section="home">
      <div className="flexslider js-fullheight">
        <ul className="slides">
          <li style={{ backgroundImage: "url(images/MyImages/ItalyHills2.jpg)" }}>
            <div className="overlay" />
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                  <div className="slider-text-inner js-fullheight">
                    <div className="desc">
                      <h1 style={{textShadow: "0 0 0.1em #ffffff"}}>
                        Hi! <br />
                        I'm Hampus
                      </h1>
                      <h2 style={{fontWeight: "bold", color:"white", textShadow: "0 0 0.3em #000000, 0 0 0.3em #000000"}}>
                        I'm looking for new experiences and challenges as a developer. <br/>
                        Are you my next employer? Send me an E-mail or hit me up on LinkedIn. <br/>
                        If you're uncertain, keep reading and I might just change your mind!
                      </h2>
                      {/*<p>
                        <a className="btn btn-primary btn-learn" style={{borderColor: "white", color: "white"}}>
                          Download CV <i className="icon-download4" />
                        </a>
                      </p>*/}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li style={{ backgroundImage: "url(images/MyImages/OckeroAlt.jpg)" }}>
            <div className="overlay" />
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                  <div className="slider-text-inner">
                    <div className="desc">
                      <h1 style={{textShadow: "0 0 0.1em #ffffff"}}>
                        I'm <br />a Developer
                      </h1>
                      <h2 style={{fontWeight: "bold", color:"white", textShadow: "0 0 0.3em #000000, 0 0 0.3em #000000"}}>
                        I have always loved working with computers. 
                        From my first Hello-World application to working with code 
                        in real world settings. If you'd like to see what I've been up to, 
                        check out my projects section! 
                      </h2>
                      {/*<p>
                        <a href="#work" data-nav-section="work" className="btn btn-primary btn-learn" style={{borderColor: "white",color: "white"}}>
                          View Projects <i className="icon-briefcase3" />
                        </a>
                      </p>*/}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
