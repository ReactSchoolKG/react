import React from 'react';

export default class LifecycleExample extends React.Component {


    componentWillMount() {
        console.log("I am changing the prop-someText");
    }

    componentDidMount() {
        console.log("Has been mounted");
        console.log(this.refs);
    }

    componentWillReceiveProps(nextProps) {
        console.log("I am receiving new props");
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("Should i update because something has changed");
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log("I  will start updating because something os going to change");
    }

    componentDidUpdate() {
        console.log("I  have  updated because something changed");
    }

    componentWillUnmount() {
        console.log("Will be Unmounted");
    }


    render() {
        console.log('render');
        return (
            <div>
                <div ref="loAndBehold">
                    I am lifecycle Test component (everything is in the code)
                </div>
                <button onClick={this.props._onClick}>Toggle a property (and look into console)</button>
            </div>
        );
    }
}
