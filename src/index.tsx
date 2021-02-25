import React from 'react'
import { render } from 'react-dom'

import './index.css'
import 'semantic-ui-css/semantic.min.css'
import {Dropdown, Input} from "semantic-ui-react";
const options = [
    { key: '.com', text: '.com', value: '.com' },
    { key: '.net', text: '.net', value: '.net' },
    { key: '.org', text: '.org', value: '.org' },
]

render(<Input
    label={<Dropdown defaultValue='.com' options={options} />}
    labelPosition='right'
    placeholder='Find domain'
/>, document.querySelector('#root'))
