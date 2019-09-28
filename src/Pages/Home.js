import React, { Component } from 'react';
import '../Styles/Home.css';
import Nav from '../Components/Navigation'

class Home extends Component {
  render() {
    return (
    	<div>
      <Nav></Nav>
      <div className="Home">
        <header className="Home-header">
          <p>
            Blakk is better.
          </p>
        </header>
      </div>
      </div>
    );
  }
}
export default Home;
