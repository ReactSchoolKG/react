import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

// const Topic = ({match}) => (
//   <div>
//     <h3>{match.params.topicId}</h3>
//   </div>
// );

class Topic extends React.Component{
  render(){
    return(
      <div>
    <h3>{this.props.match.params.topicId}</h3>
  </div>
    )
  }
}

export default Topic
