import React from 'react';
import PropTypes from 'prop-types'; // ES6


export default class ProptypesExample extends React.Component {

// Current example shows how to nest a component directly inside other component

    // OPTION 2:logic:
    // 1. Create a component that has to be nested(child) and make it an exportable
    // 2. Inside a parent component import a child component and use it as with the help of jsx ( as an html tag )


    // OPTION 2:logic:
    // 1. Create a component that has to be nested(child) and make it an exportable
    // 2. Create a parent component that renders {this.props.children} - the content between open/close tags
    // 3. When using a parent component somewhere, also include a child component and place is between open close tages of parent component

    render() {
        let styles = {width: '400px', backgroundColor: this.props.someProp ? '#ff0000' : '#00ff00'};
        return (
            <div className="app-block" style={styles}>
                <h2>Proptypes example (check the code)</h2>
            </div>
        );
    }
}


ProptypesExample.propTypes = {
    optionalArray: PropTypes.object.isRequired,
    optionalBool: PropTypes.bool.isRequired,
    optionalFunc: PropTypes.func.isRequired,
    optionalNumber: PropTypes.number.isRequired,
    optionalObject: PropTypes.object.isRequired,
    optionalString: PropTypes.string.isRequired,
    requiredAny: PropTypes.any.isRequired,
};