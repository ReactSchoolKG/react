import React from 'react';
import {Context} from "./context_main_container";

export default class ContextNestedItemLast extends React.Component {
    render() {
        return (
            <Context.Consumer>
                {(context) => {
                    return (
                        <div style={{backgroundColor: 'yellow'}}>
                            {
                                context.products.map((el, i) =>
                                    <div key={i}>{el}</div>
                                )
                            }
                            <SomeComponent myProp={context.someProp}/>
                        </div>
                    )
                }}
            </Context.Consumer>
        );
    }
}

class SomeComponent extends React.Component {

    componentDidMount() {
        console.log(this.props.myProp);
    }

    render() {
        return (<div style={{backgroundColor: 'purple'}}>{this.props.myProp}</div>)
    }
}

