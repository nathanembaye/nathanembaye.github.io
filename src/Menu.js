import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

export default class Menu extends React.Component {
  render() {
    return (
          <div className="menu">
            <ul>
              <li><Link to="/">home</Link></li>
              <li><Link to="/about">about</Link></li>
              <li><h2>λ</h2><Link to="/notes">notes</Link></li>
              <li><a href={process.env.PUBLIC_URL + "/Resume.pdf"}>resume</a></li>
              <li><Link to="mailto:nathanembaye26@gmail.com">contact</Link></li>
            </ul>
      </div>
    );
  }
}