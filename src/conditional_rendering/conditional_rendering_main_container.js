import React from 'react';

export default class ConditionalRendering extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            condition: true
        };
    }

    changeCondition(e) {
        // this.setState received an object that u wan't to merge with current state - output is a new object
        this.setState({condition: !this.state.condition});
    }

    httpRequest() {
        new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(() => ({products: ['Mango', 'Kiwi', 'Avocado']}))
            }, 2000)
        }).then(data => {
            console.log(data());
            return data;
        });
    }

    componentDidMount() {

    }

    render() {

        return (
            <div className="app-block">
                <h2>This is an example of conditional rendering in React.js (JSX)</h2>
                <div>
                    {/*example of javascript logic in JSX*/}
                    {this.state.condition && <span> This element is rendered if condition is TRUE</span>}
                    {!this.state.condition && <span> This element is rendered if condition is FALSE</span>}
                </div>
                <button onClick={this.httpRequest}>Do API call</button>
                <button onClick={(e) => this.changeCondition(e)}>Change condition</button>
            </div>
        );
    }
}
