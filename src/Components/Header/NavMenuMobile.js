import React, { Component } from "react";
import { Sidebar, Menu, Icon } from "semantic-ui-react";
import { Link } from 'react-router-dom'

class NavMenuMobile extends Component {
  state = {
    visable: false
  };

  handleHideClick = () => this.setState({ visible: false });
  handleShowClick = () => this.setState({ visible: true });
  handleSidebarHide = () => this.setState({ visible: false });

  render() {
    const { visible } = this.state;
    return (
      <div>
          <nav style={{float:'right', padding: '10px 5px'}}>
          <Icon
            disabled={!visible}
            className="menu-icon-left"
            onClick={this.handleHideClick}
            size={"huge"}
            name={"angle double left"}
            inverted
          />
          <Icon
            disabled={visible}
            className="menu-icon-right"
            onClick={this.handleShowClick}
            name={"angle double right"}
            inverted
            size={"huge"}
          />
          </nav>
          <Sidebar
            as={Menu}
            animation="overlay"
            icon="labeled"
            onHide={this.handleSidebarHide}
            vertical
            inverted
            visible={visible}
            width="thin"
          >
            <Menu.Item as={Link} to='/'>
              <Icon name="home" />
              Home
            </Menu.Item>
            <Menu.Item as={Link} to='/contact'>
              <Icon name="address book outline" />
              Contact Me
            </Menu.Item>
            <Menu.Item 
              as={'a'}
              href='http://www.github.com/diddy225'
              rel="noopener noreferrer"
              target="_blank"
            >
              <Icon name="github" />
              Github
            </Menu.Item>
            <Menu.Item as={Link} to='/resume'>
              <Icon name="newspaper outline" />
              Resume
            </Menu.Item>
          </Sidebar>
      </div>
    );
  }
}

export default NavMenuMobile