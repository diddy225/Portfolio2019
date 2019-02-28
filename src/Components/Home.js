import React, { Component } from "react";
import { Responsive } from "semantic-ui-react";
import Jumbotron from "./Header/Jumbotron";
import JumbotronMobile from "./Header/JumbotronMobile"

class Home extends Component {
  state = {};

  render() {
    return (
      <div>
        <Responsive
          as={Jumbotron}
          minWidth={Responsive.onlyComputer.minWidth}
          maxWidth={Responsive.onlyComputer.maxWidth}
        />
        <Responsive
          as={JumbotronMobile}
          minWidth={Responsive.onlyMobile.minWidth}
          maxWidth={Responsive.onlyTablet.maxWidth}
        />
      </div>
    );
  }
}

export default Home;
