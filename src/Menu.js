import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

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
      </div>
    );
  }
}