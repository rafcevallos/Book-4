import React, { Component } from 'react';

class Me extends Component {
    state = {
        firstName: "Rafael",
        lastName: "Cevallos",
        cohort: "Cohort 25 Gif/Emoji Master and Code Peon",
        school: "Nashville Software School",
        home: "1602 Gauntlet Way",
        car: "2015 Honda Prius",
        animal: "Red Panda"
    }

    render() {
        return (
            <div className="App-intro">
                <h2>{this.state.firstName} {this.state.lastName}</h2>
                <h4>{this.state.cohort}</h4>
                <h5>{this.state.school}</h5>
                <h5>{this.state.home}</h5>
                <h5>{this.state.car}</h5>
                <h5>{this.state.animal}</h5>
            </div>
        )
    }
}
export default Me;