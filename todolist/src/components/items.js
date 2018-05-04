import React from 'react';
import '../style/items.css';

const items = (props) => {
    return (
       <div>
           <div className='item-block'>
            <li className='items'>{props.children}</li>
            <button className='del-button'
                    onClick = {props.delEvent}>
                {(props.status)? 'RESTORE': 'DELETE'}
            </button>
            </div>

       </div>
    );

       };
export default items;