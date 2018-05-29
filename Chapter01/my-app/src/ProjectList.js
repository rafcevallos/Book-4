import React, { Component } from 'react';
import Project from './Project';
import logo from './logo.svg';
import './styles/Main.css';


class ProjectList extends Component {

    constructor(props) {
        super(props)
        this.uniqueKey = 1

        this.state = {
            projectList: []
        }
    }

    componentDidMount() {
        fetch("http://localhost:8088/project/")
            .then(r => r.json())
            .then(projects => {
                this.setState({
                    projectList: projects
                })
            })
    }

    render() {
        return (
            <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">Welcome to the Poopcacalypse!!</h1>
            </header>

            <div className="projectContainer">
                {this.state.projectList.map(projects => (
                    <div className = "projectInfo">
                    <Project name={projects.name}
                        description={projects.description}
                        link={projects.link}
                        key={this.uniqueKey++} />
                    </div>
                    ))}
                    </div>
            </div>
        )
    }
}

export default ProjectList;