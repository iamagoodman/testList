import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from '../components/home'
import Second from '../components/second'
import Third from '../components/third'
function BasicExample() {
    return (
        <Router>
            <div>
                <Route exact path="/" name='home' component={Home} />
                <Route path="/second" name='second' component={Second} />
                <Route path="/third" name='third' component={Third} />
                <Route path="/topics" component={Topics} />
            </div>
        </Router>
    );
}


function Topics({ match }) {
    return (
        <div>
            <h2>Topics</h2>
            <ul>
                <li>
                    <Link to={`${match.url}/rendering`}>Rendering with React</Link>
                </li>
                <li>
                    <Link to={`${match.url}/components`}>Components</Link>
                </li>
                <li>
                    <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
                </li>
            </ul>

            <Route path={`${match.path}/:topicId`} component={Topic} />
            <Route
                exact
                path={match.path}
                render={() => <h3>Please select a topic.</h3>}
            />
        </div>
    );
}

function Topic({ match }) {
    return (
        <div>
            <h3>{match.params.topicId}</h3>
        </div>
    );
}

export default BasicExample;