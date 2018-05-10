import React from 'react';
import {Link} from 'react-router-dom'
// this is a functional component
let messageItem = (props) => {

    // this component received props (properties) passed from the parent component
    return (
        <li>{props.message}</li>

    );
};


export default messageItem;
