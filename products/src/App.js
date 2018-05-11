import React, {Component} from "react";
import ProductList from "./components/product_list";
import Home from "./components/home";
import ProductDetails from "./components/product_details";
import { BrowserRouter as Router,Switch, Route, Link } from "react-router-dom";

export default class App extends Component{

    render(){
        return(
            <Router>
                <div>
                    <div>
                        <Link to="/">Home</Link>
                        <Link to="/products" style={{marginLeft:"10px"}}>Products</Link>
                    </div>
                    
                    <Route exact path="/" component={Home} />
                    <Route exact path="/products" component={ProductList} />
                    <Route path="/products/:id" component={ProductDetails} />
                    
                </div>
            </Router>


        );
    }
}