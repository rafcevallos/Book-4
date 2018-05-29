import React, { Component } from 'react';

class Home extends Component {
  constructor(props) {
    super(props)

    state = {
      home: "1602 Gauntlet Way"
    }
  }
  render() {
    return (
      <section className="App-intro">
        <h4>{this.state.home}</h4>
      </section>
    );
  }
}

export default Home;