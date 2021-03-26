import * as React from "react";
import * as ReactDOM from "react-dom";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import './app.css';
import Home from './Home';

const R = () => {
    return <Switch>
        <Route path="/eagle">
            <Home/>
        </Route>
        <Route path="/canvas">
            <Home/>
        </Route>
        <Route path="/">
            <Nav/>
        </Route>
    </Switch>
}
const Nav = () => {
    return <React.Fragment>
        <h1>project</h1>
        <ul>
            <li>
                <Link to="/eagle">eagle</Link>
            </li>
            <li>
                <Link to="/canvas">canvas</Link>
            </li>
        </ul>
    </React.Fragment>
}
const App = () => {
    return <Router>
        <R/>
    </Router>

}
ReactDOM.render(
    <App/>,
    document.getElementById("example")
);
