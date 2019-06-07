import React from "react";
import { Container } from "semantic-ui-react";
import NavMenu from "./NavMenu";
import NameTitle from "./NameTitle";
import "./header.css";

const Jumbotron = () => (
  <Container className="containerStyle" fluid>
    <NavMenu />
    <NameTitle />
  </Container>
);

export default Jumbotron;
