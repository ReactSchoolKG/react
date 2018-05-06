import React from 'react';
import Item from './message_item';

export default class MessagesList extends React.Component {

    render() {
        let list = [{message: 'First text'}, {message: 'Second text'}, {message: 'Third text'}];

        return (
            // u can see an example of inline styling in react here
            <div>
                <h4> OPTION 1: Current example shows how to nest a component directly inside other component ( this is
                    content of parent component)</h4>
                <ul>
                    {/*an example of using javascript inside the jsx*/}
                    {/*any javascript logic should be placed between curly brackets {   }*/}

                    {/*we r passing el.message as props (properties) to a child component*/}
                    {list.map((el, index) => <Item key={index} message={el.message}/>)}
                </ul>
            </div>
        );
    }
}

