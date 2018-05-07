import React from 'react';
import {SelectForm, TextareaForm, InputForm, CheckBoxForm, MultipleForms} from "./forms_collection";

export default class FormsExample extends React.Component {

    render() {
        return (
            <div className="app-block">
                <h2>Forms example</h2>

                <h5>Input Form</h5>
                <InputForm/>

                <h5>Select form</h5>
                <SelectForm/>

                <h5>Textarea form</h5>
                <TextareaForm/>

                <h5>Checkbox Form</h5>
                <CheckBoxForm/>

                <h5>Multiple Forms</h5>
                <MultipleForms/>
            </div>
        );
    }
}
