import React from "react";
import "./App.css";
import spotify from "./spotify.png";
import github from "./githubGrey.png";
import linkedin from "./linkedinGrey.png";
import resume from "./resumeGrey.png";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <div className="title">
          <h1>nathan embaye</h1>
        </div>
        <div className="body">
          <p>
            Public policy junkie and software engineer. I enjoy turning elusive
            business requirements into performant, scalable code. Currently, I
            do just that at Canada's{" "}
            <a href="https://www.bankofcanada.ca/core-functions/">
              Central Bank
            </a>
            .
            <br />
            <br />
            When I'm not developing I like to lift,{" "}
            <a href="https://riosmauricio.com/wp-content/uploads/2020/07/Basic-Economics-5th-Edition-Thomas-Sowell.pdf">
              read{" "}
            </a>
            and frequent comedy clubs. Feel free to check out my latest project,
            a COVID-19 relief initiative:{" "}
            <a href="https://github.com/nathanembaye/DekiProject">
              Deki Ottawa
            </a>
            .
          </p>
        </div>
        <div className="social">
          <a href="https://www.linkedin.com/in/nathanembaye/">
            <img className="linkedin" src={linkedin} />
          </a>
          <a href="https://github.com/nathanembaye">
            <img className="github" src={github} />
          </a>
          <a href="https://github.com/nathanembaye">
            <img className="spotify" src={spotify} />
          </a>
          <a href={process.env.PUBLIC_URL + "/Resume.pdf"} target="_blank">
            <img className="spotify" src={resume} />
          </a>
        </div>
      </div>
    );
  }
}

export default App;
