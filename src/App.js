import React, { Component } from "react";
import "./App.css";
import iconImage from './assets/images/portfolioiconimage.png'

class LandingPageLarge extends Component {
  handleScrollIntoView = () => {
    document.getElementById("section2").scrollIntoView();
  };

  render() {
    return (
      <div id="landingPageLarge">
        <div id="section1">
          <span className = "section1Text">Dreaming of helping people bridge connections</span> <br />
          <span className = "section1Text">Through experience and code.</span> <br />
          <span className = "section1Text">Find more about me below.</span>
        </div>
        <div id="section2">
          <img src={iconImage} id="portIcon" alt="icon" />
          <div id="aboutText">
            <h1 id="aboutTextHello">Hello!</h1>
            <div id="aboutTextText">
              My name is Joseph! I'm a coder with a customer service background
              who enjoys helping people and hopes to bring that forward in
              writing code.
              <br />
              <br />
              Some of my work can be seen below!
            </div>
          </div>
        </div>
        <div id="section3">
          <div className = "projectLists">
            <ul>
              <li><a href = "https://CoderJoe82.github.io/Calculator" rel = "noreferrer" target = "_blank">Redux Calculator</a></li>
            </ul>
          </div>
          <div className = "projectLists"></div>
          <div className = "projectLists"></div>
        </div>
      </div>
    );
  }
}

export default LandingPageLarge;
