import {Dropdown, Input} from "semantic-ui-react";
import React, {useState} from "react";


const options = [
    { key: '.com', text: '.com', value: '.com' },
    { key: '.net', text: '.net', value: '.net' },
    { key: '.org', text: '.org', value: '.org' },
]
export default function App(){
    return (
        <Input
        label={<Dropdown defaultValue='.com' options={options} />}
        labelPosition='right'
        placeholder='Find domain'
    />)
}