import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './Home'
import HomeInfo from './HomeInfo/HomeInfo'
import ContactForm from './ContactForm'
import Resume from './Resume'
import Footer from './Footer'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/" component={Home}/>
          <Route exact path="/" component={HomeInfo}/>
          <Route exact path="/contact" component={ContactForm}/>
          <Route exact path="/resume" component={Resume} />
          <Route path='/' component={Footer} />
        </div>
      </Router>
    );
  }
}

export default App;
