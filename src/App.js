import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Navbar, Nav, NavItem, MenuItem, NavDropdown } from 'react-bootstrap';


class App extends Component {
  render() {
    return (
      <div className="App">
          <Navbar>
              <Navbar.Header>
                  <Navbar.Brand>
                      <a href="#">Blog</a>
                  </Navbar.Brand>
            </Navbar.Header>
            <Nav>
            <NavItem eventKey={1}>Link</NavItem>
            <NavItem eventKey={2}>Link</NavItem>
            <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                <MenuItem eventKey={3.1}>Action</MenuItem>
                <MenuItem eventKey={3.2}>Action 2</MenuItem>
                <MenuItem eventKey={3.3}>Action 3</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={3.4}>Separate link</MenuItem>
            </NavDropdown>
            </Nav>
          </Navbar>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
