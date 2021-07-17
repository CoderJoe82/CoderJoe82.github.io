import "./app.small.css";
import React, { Component } from "react";
import iconImage from "../../assets/images/portfolioiconimage.png";

class LandingPageSmall extends Component {
  render() {
    return (
      <div id="LandingPageSmall">
        <div id="sectionOne">
          <h1>My Mission Statement:</h1>
          <br />
          <p>
            Dreaming of helping people bridge connections Through experience and
            code. Find more about me below.
          </p>
        </div>
        <div id="sectionTwo">
          <img src={iconImage} alt="imageIcon" id = "imageIcon" />
          <h1>Hello!</h1>
          <p id="bioTextSmall">
            My name is Joseph! I'm a coder with a customer service background
            who enjoys helping people and hopes to bring that forward in writing
            code. <br />
            Some of my work can be seen below!
          </p>
        </div>
        <div id="sectionThree">
          <ul id ="projectListsSmall">
            <li>
              <a href="https://CoderJoe82.github.io/Calculator" rel = "noreferrer" target = "_blank">Redux Calculator</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default LandingPageSmall;
