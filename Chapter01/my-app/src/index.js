import { BrowserRouter as Router, Route } from "react-router-dom"
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import People from './People';
import registerServiceWorker from './registerServiceWorker';
import NavBar from "./Nav";

ReactDOM.render(
    <Router>
    <div>
        <NavBar/>
        <Route exact path="/" component={People} />
        <Route exact path="/People" component={People} />
    </div>
</Router>,
document.getElementById('root'));
registerServiceWorker();
