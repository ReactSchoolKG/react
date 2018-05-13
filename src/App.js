import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Switch,
    NavLink
} from "react-router-dom";

import ProductsList from "./components/products_list/products_list";
import Home from "./components/home";
import Products from "./components/products_list/products_list";
import ProductDetails from "./components/products_list/products_detail";
import NotMatch from "./components/no_match";
import "./App.css";

class App extends React.Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <header className="App-header">
                        <h1 className="App-title">
                            Homework for KindGeek React School
                        </h1>
                        <h3>Products list</h3>
                        <nav>
                            <ul>
                                <li>
                                    <NavLink
                                        exact
                                        to="/"
                                        style={{ color: "white" }}
                                    >
                                        Home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/products"
                                        style={{ color: "white" }}
                                    >
                                        Products
                                    </NavLink>
                                </li>
                            </ul>
                        </nav>
                    </header>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/products" component={Products} />
                        <Route
                            path="/products/:id"
                            component={ProductDetails}
                        />
                        <Route component={NotMatch} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
