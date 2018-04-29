import React from 'react';

export default class ComponentStateAndInteractions extends React.Component {
    constructor(props) {
        super(props);
        // components internal state is declared in the constructor and exists during the lifecycle of the component
        this.state = {
            studentsCount: 0
        };
    }

    addStudentToCount(e) {
        // this.setState received an object that u wan't to merge with current state - output is a new object
        this.setState({studentsCount: this.state.studentsCount + 1});
    }

    render() {
        return (
            <div className="app-block">
                <h2>This is an example of components internal state and interactions with it</h2>
                <p>Total number of students in class {this.state.studentsCount}</p>

                {/*event handler for click on the button*/}
                <button onClick={(e) => this.addStudentToCount(e)}>Add a student to count</button>
            </div>
        );
    }
}