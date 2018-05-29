import React, { Component } from "react"

class Project extends Component {
    render() {
        return (
            <article className="projectSection">
                <div className="projectName">{this.props.name}</div>
                <div className="projectDescrip">{this.props.description}</div>
                <div className="projectLink">{this.props.link}</div>
            </article>
        )
    }
}

export default Project;