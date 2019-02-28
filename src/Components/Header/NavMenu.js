import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class NavMenu extends Component {
  state = {
    activeItem: 'home'
  }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name  });
  }

  render() {
    const { activeItem } = this.state
    return (
      <Menu
        secondary
        fluid
        inverted
        style={{marginTop: '10px', padding: '0px 20px'}}
      >
        <Menu.Item 
          name="home"
          as={Link} to='/'
          active={activeItem === 'home'} 
          onClick={this.handleItemClick}
        />
        <Menu.Item 
          name='contact'
          as={Link} to='/contact'
          active={activeItem === 'contact'}
          onClick={this.handleItemClick}
        />
        <Menu.Item 
          name='github'
          as={'a'} 
          href='http://www.github.com/diddy225'
          rel="noopener noreferrer"
          target="_blank"
          active={activeItem === 'github'}
          onClick={this.handleItemClick}
        />
        <Menu.Item 
          name='resume'
          as={Link} to='/resume'
          active={activeItem === 'resume'}
          onClick={this.handleItemClick}
        />
        <Menu.Item 
          position="right"
          as={Link} to='/'
          name='MATTHEW J CARPENTER'
        />
      </Menu>
    )
  }
}

export default NavMenu