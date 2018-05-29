import React, { Component } from 'react';

class Animal extends Component {
  state = {
    animal: "Red Panda"
  }

  render() {
    return (
      <section className="App-intro">
        <h4>{this.state.animal}</h4>
      </section>
    )
  }
}

export default Animal;