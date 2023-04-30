import React from "react";
import "./App.css";
import { Link } from "react-router-dom";
import nathan from "./nathan.jpg";
import github from "./githubGrey.png";
import github2 from "./github2.png";
import linkedin from "./linkedinGrey.png";
import linkedin2 from "./linkedin2.png";

export default class Menu extends React.Component {

  render() {
    return (
          <div className="menu">
            <ul>
              <li><Link to="/">home</Link></li>
              <li><Link style={window.location.href.includes("about") ? { color: '#e0218a' } : {}} to="/about">about</Link></li>
              <li><h2>λ</h2><Link style={!window.location.href.includes("about") ? { color: '#e0218a' } : {}} to="/notes">notes</Link></li>
              <li><a href={process.env.PUBLIC_URL + "/Resume.pdf"}>resume</a></li>
              <li><a style={window.location.href.includes("contact") ? { color: '#e0218a' } : {}} href="mailto:nathanembaye26@gmail.com">contact</a></li>            
            </ul>
            <div>
              {window.location.href.includes("about") ?
            <div className="about">
                  <div className="aboutPhoto">
                    <img alt="cant show" src={nathan}></img>
                  </div>
                  <div className="aboutText">
                    <h2>about</h2>
                    <p>Public policy junkie and software engineer. I enjoy turning elusive business requirements into performant, scalable code. Currently I do just that at Canada's central bank.</p>
                    <div className="aboutIcon">
                      <a href="https://www.linkedin.com/in/nathanembaye/">
                        <img onMouseOver={e => e.currentTarget.src = linkedin2} onMouseLeave={e => e.currentTarget.src = linkedin} alt='' src={linkedin}/>
                      </a>
                      <a href="https://github.com/nathanembaye">
                        <img onMouseOver={e => e.currentTarget.src = github2} onMouseLeave={e => e.currentTarget.src = github} alt='' src={github} />
                      </a>
                    </div>
                  </div>
              </div>: <div></div>}
          </div>
      </div>
    );
  }
}
