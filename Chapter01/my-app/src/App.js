import React, { Component } from 'react';
import Home from './Home';
import Prius from './Prius';
import Animal from './Animal';
import logo from './logo.svg';
import './App.css';

class RiffRaf extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to the Poopcacalypse!!</h1>
        </header>

    <section className="App-intro">
      <h3> Rafael Cevallos </h3>
      <h4> Cohort 25 Gif & Emoji Master and Code Peon </h4>
      <h5> VP Candidate for Big Ron 2020 </h5>
    </section>
    <Home />
    <Prius />
    <Animal />
      </div>
    );
  }
}

export default RiffRaf;




