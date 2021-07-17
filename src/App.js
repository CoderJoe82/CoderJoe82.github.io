import React, { Component } from "react";
import LandingPageLarge from "./components/AppLarge/app.large";
import { Breakpoint } from "react-socks";
import LandingPageSmall from "./components/AppSmall/app.small";

class App extends Component {
  render() {
    return (
      <div id="App">
        <Breakpoint large up>
          <LandingPageLarge />
        </Breakpoint>
        <Breakpoint small down>
          <LandingPageSmall />
        </Breakpoint>
      </div>
    );
  }
}

export default App;
