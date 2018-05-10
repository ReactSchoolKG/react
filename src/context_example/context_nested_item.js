import React from 'react';
import ContextNestedItemLast from './context_nested_item_last';
import {Context} from './context_main_container';

export default class ContextNestedItem extends React.Component {

    render() {
        return (
            <Context.Consumer>
                {(context) => {
                    return (
                        <div style={{backgroundColor: 'green'}}>
                            I am a first-nested item in context example
                            <button onClick={context.addProduct}>Add a product</button>
                            <ContextNestedItemLast/>
                        </div>
                    )
                }}
            </Context.Consumer>
        );
    }
}

