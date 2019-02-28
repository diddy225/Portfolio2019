import React, { Component } from "react";
import { Sidebar } from 'semantic-ui-react'
import NameTitle from './NameTitle'
import NavMenuMobile from './NavMenuMobile'
import "./jumbotronMobile.css";


class JumbotronMobile extends Component {
  state = {

  };

  render() {
    return (
      <Sidebar.Pushable className="containerStyle" fluid>
        <NavMenuMobile/>
        <NameTitle />
      </Sidebar.Pushable>
    );
  }
}

export default JumbotronMobile;
