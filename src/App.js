import React, { Component } from "react";
import LandingPageLarge from "./components/AppLarge/app.large";
import { Breakpoint } from "react-socks";

class App extends Component {
  render() {
    return (
      <Breakpoint large up>
        <LandingPageLarge />
      </Breakpoint>
    );
  }
}

export default App;
