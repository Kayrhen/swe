import React, { Component } from 'react';
import '../Styles/Home.css';
import ourNav from '../Components/Navigation'

class Home extends Component {
  render() {
    return (
    	<div>
      <ourNav></ourNav>
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
