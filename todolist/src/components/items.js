import React from 'react';
import './items.css';

const items = (props) => {
    return (
        <div className='item-block'>
            <li className='items'>{props.children}</li>
            <button className='del-button' onClick = {props.delEvent}>DELETE</button>
        </div>
    )


};
export default items;