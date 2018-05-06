import React from 'react';
import MessagesList from './messages_list';
import ProductsList from './products_list';
import ProductItem from './product_item';

export default class NestedComponentsExample extends React.Component {

// Current example shows how to nest a component directly inside other component

    // OPTION 2:logic:
    // 1. Create a component that has to be nested(child) and make it an exportable
    // 2. Inside a parent component import a child component and use it as with the help of jsx ( as an html tag )


    // OPTION 2:logic:
    // 1. Create a component that has to be nested(child) and make it an exportable
    // 2. Create a parent component that renders {this.props.children} - the content between open/close tags
    // 3. When using a parent component somewhere, also include a child component and place is between open close tages of parent component

    render() {
        return (
            <div className="app-block">
                <h2>Component nesting ( parent-child ):</h2>
                {/*option1*/}
                <MessagesList/>

                {/*option2*/}
                <ProductsList>
                    <ProductItem></ProductItem>
                </ProductsList>
            </div>
        );
    }
}
