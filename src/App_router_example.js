import React from 'react';
import './App.css';
import NestedComponentsExample from './nesting_components/nested_components_main_container';
import ComponentStateAndInteractions from './component_state_and_interactions/component_state_and_interactions_main_container';
import ConditionalRendering from './conditional_rendering/conditional_rendering_main_container';
import LifecycleComponentExample from './lifecycle/lifecycle_example_main_container';
import HttpCallExample from './http_call_example/http_call_example';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    NavLink
} from 'react-router-dom'
import ContextExample from "./context_example/context_main_container";


class App extends React.Component {
    render() {

        return (

            <Router>
                <div>

                    <header className="App-header">
                        <h1 className="App-title">Welcome to KindGeek React School</h1>
                    </header>
                    <ul>
                        <li><NavLink to="/">Context</NavLink></li>
                        <li><NavLink to="/http_call_example">Http call example</NavLink></li>
                        <li><NavLink activeClassName='loandbehold' to="/nested">Nested</NavLink></li>
                        <li><NavLink to="/conditional">Conditional rendering</NavLink></li>
                        <li><NavLink activeClassName='loandbehold' to="/products/1">Internal state</NavLink></li>
                        <li><NavLink activeClassName='loandbehold' to='/lifecycle'>Lifecycle</NavLink></li>
                    </ul>
                    <hr/>
                    <Switch>
                        <Route exact path="/" component={ContextExample}></Route>
                        <Route path="/nested" component={NestedComponentsExample}/>
                        <Route path="/conditional" component={ConditionalRendering}/>
                        show difference between switch and route
                        <Route path="/lifecycle" component={LifecycleComponentExample}></Route>
                        <Route path="/products/:id" component={ComponentStateAndInteractions}/>
                        <Route path="/products/step1" component={ComponentStateAndInteractions}/>
                        <Route path="/products/step1/step2" component={ComponentStateAndInteractions}/>
                        <Route path="/http_call_example" component={HttpCallExample}/>
                        <Route component={NoMatch}/>
                    </Switch>

                    {/*<Switch>*/}
                    {/*/!*<Route path="/" exact component={Home} />*!/*/}
                    {/*/!*<Route path="/will-match" component={WillMatch} />*!/*/}

                </div>
            </Router>
        );
    }
}

export default App;

const NoMatch = ({location, match}) => (
    <div>
        <h3>
            No match for <code>{location.pathname}</code>
        </h3>
    </div>
);