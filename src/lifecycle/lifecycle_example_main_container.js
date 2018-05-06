import React from 'react';
import LifecycleExample from '../lifecycle/lifecycle_example';

export default class LifecycleComponentExample extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            someText: "Initial text", show: true
        };
    }

    _onClick() {
        this.setState({show: !this.state.show});
    }

    render() {
        return (
            <div className="app-block">
                <h2>Component Lifecycle:</h2>
                <LifecycleExample _onClick={() => this._onClick()} show={this.state.show}/>
            </div>
        );
    }
}
