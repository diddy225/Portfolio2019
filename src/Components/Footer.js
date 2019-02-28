import React from "react";
import { Header, Icon } from "semantic-ui-react";
const style = {
  backgroundColor: "#000",
  height: "150px",
  textAlign: 'center',
  paddingTop: '50px'
};
const Footer = () => {
  const linkedinUrl = 'https://www.linkedin.com/in/matthew-carpenter-23125081/'
  const githubUrl = 'https://www.github.com/diddy225'
  return (
    <div style={style}>
        <a href={githubUrl} target="_blank" rel="noopener noreferrer">
          <Icon size="big" name="github" />
        </a>
        <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
          <Icon size="big" name="linkedin"/>
        </a>
        <Header style={{color: '#fff'}}as='h5'>
          <Icon name="copyright outline"/>
          2019 Matthew Carpenter Made in Atlanta
        </Header>
    </div>
  );
};

export default Footer;
