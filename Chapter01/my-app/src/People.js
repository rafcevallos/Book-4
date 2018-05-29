import React, { Component } from 'react';
import logo from './logo.svg';
import './styles/Main.css';



class People extends Component {
  constructor(props) {
    super(props)

    this.contactCardKey = 1

    // Define initial state
    this.state = {
      peopleList: []
    }
  }

  /*
    Get all contacts from the API. This is the fetch
    syntax which replaces $.ajax()

    https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
*/
  loadPeople() {
    fetch("http://localhost:8088/people/")
      // Must be explicit on how to parse the response
      .then(r => r.json())

      // JSON parsed data comes to this then()
      .then(people => {
        this.setState({
          peopleList: people
        })
      })
  }
  componentDidMount() {
    this.loadPeople() // Trigger the loading of contacts
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to the Poopcacalypse!!</h1>
        </header>

        <div className="App-intro container">
          {this.state.peopleList.map(c => (
            <div key={this.contactCardKey++} className="personInfo">
                <h2>{c.firstName} {c.lastName}</h2>
                <h4>{c.cohort}</h4>
                <h5>{c.school}</h5>
                <h5>{c.address.street}</h5>
                <h5>{c.address.city}, {c.address.state}</h5>
                <h5>{c.car.year} {c.car.make} {c.car.model}</h5>
                <h5>{c.animal.name} the {c.animal.species} who is {c.animal.breed}.</h5>
              </div>
          ))}
        </div>
      </div>
    )
  }
}

export default People;