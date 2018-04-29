import React from 'react';


export default class ProductsList extends React.Component {
    render() {
        return (
            <div>
                <h4>
                    OPTION 2: Current example shows how to nest a component with this props children ( This is a content of parent component)
                </h4>
                {this.props.children}
            </div>
        );
    }
}