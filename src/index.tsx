import * as React from "react";
import * as ReactDOM from "react-dom";
import {
    BrowserRouter,
    Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import './app.css';
import Home from './Home';
// import CanvasTemplate from "./canvas";
import SvgTemplate from "./svg";

const R = () => {
    return <Switch>
        <Route exact path="/" component={Nav}/>
        <Route path="/eagle" component={Home}/>
        {/*<Route path="/canvas" component={CanvasTemplate}/>*/}
        <Route path="/svg" component={SvgTemplate}/>
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
            <li>
                <Link to="/svg">svg</Link>
            </li>
        </ul>
    </React.Fragment>
}
const App = () => {
    return <BrowserRouter>
        <R/>
    </BrowserRouter>

}
ReactDOM.render(
    <App/>,
    document.getElementById("example")
);
