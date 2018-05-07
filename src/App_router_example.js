import React from 'react';
import './App.css';
import NestedComponentsExample from './nesting_components/nested_components_main_container';
import ComponentStateAndInteractions from './component_state_and_interactions/component_state_and_interactions_main_container';
import ConditionalRendering from './conditional_rendering/conditional_rendering_main_container';
import LifecycleComponentExample from './lifecycle/lifecycle_example_main_container';

import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    NavLink
} from 'react-router-dom'


class App extends React.Component {
    render() {


        return (

            <Router>
                <div>

                    <header className="App-header">
                        <h1 className="App-title">Welcome to KindGeek React School</h1>
                    </header>
                    <ul>
                        <li><NavLink to="/">Nested</NavLink></li>
                        <li><NavLink to={`/conditional/${1}`}>Conditional rendering</NavLink></li>
                        <li><NavLink to="/state">Internal state</NavLink></li>
                        <li><NavLink to="/lifecycle">Lifecycle</NavLink></li>
                    </ul>
                    <hr/>
                    <Switch>

                        <Route exact path="/" component={NestedComponentsExample}/>
                        <Route path="/conditional/:id" component={ConditionalRendering}/>
s
                        show difference between switch and route
                        <Route path="/state" component={ComponentStateAndInteractions}/>
                        <Route path="/lifecycle" component={LifecycleComponentExample}></Route>

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

const NoMatch = ({location}) => (
    <div>
        <h3>
            No match for <code>{location.pathname}</code>
        </h3>
    </div>
);