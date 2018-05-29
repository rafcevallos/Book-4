import { BrowserRouter as Router, Route } from "react-router-dom"
import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './styles/index.css';
import NavBar from "./Nav";
import People from './People';
import ProjectList from "./ProjectList";

ReactDOM.render(
    <Router>
        <div>
            <NavBar />
            <Route exact path="/" component={People} />
            <Route exact path="/People" component={People} />
            <Route exact path="/ProjectList" component={ProjectList} />
        </div>
    </Router>,
    document.getElementById('root'));
registerServiceWorker();
