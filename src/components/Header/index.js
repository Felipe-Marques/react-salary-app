import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <nav style={Styles.Navbar} className="navbar-fixed">
        <div className="nav-wrapper">
          <h2 style={Styles.title}>React Salário</h2>
        </div>
      </nav>
    );
  }
}

const Styles = {
  Navbar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    textAlign: 'center',
    padding: '20px',
    height: 'auto',
    background: 'black',
  },
  title: {
    color: 'teal',
  },
};
