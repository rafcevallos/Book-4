import React, { Component } from 'react';


class Prius extends Component {
  state = {
    car: "2015 Honda Prius"
  }
  render() {
    return (
      <section className="App-intro">
        <h4>{this.state.car}</h4>
      </section>
    );
  }
}

export default Prius;