import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Topic from './topic.js'


class Topics extends React.Component{
  render(){
    return(
      <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <NavLink to={`${this.props.match.url}/rendering`}>Rendering with React</NavLink>
      </li>
      <li>
        <NavLink to={`${this.props.match.url}/components`}>Components</NavLink>
      </li>
      <li>
        <NavLink to={`${this.props.match.url}/props-v-state`}>Props v. State</NavLink>
      </li>
    </ul>

    <Route path={`${this.props.match.url}/:topicId`} component={Topic} />
    <Route
      exact
      path={this.props.match.url}
      render={() => <h3>Please select a topic.</h3>}
    />
  </div>
    )
  }
}

export default Topics